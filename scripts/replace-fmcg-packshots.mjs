import sharp from "sharp";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/products");

/** @type {Record<string, string | null>} null = explicitly kept (no URL) */
const SOURCES = {
  // Soap
  "aly-kapade-soap.webp": null,
  "dettol-soap.webp": null,
  "dove-soap.webp":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Dove_IIII.jpg",
  "exo-bhade-soap.webp": null,
  "godrej-no1-soap.webp": null,
  "lifebuoy-soap.webp":
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Lifebuoy_Health_soap.JPG",
  "lux-soap.webp":
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Lux_soap.jpg",
  "medimix-soap.webp": null,
  "moti-soap.webp": null,
  "mysore-sandal-soap.webp":
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mysore_Sandal_2016.jpg",
  "nirma-kapade-soap.webp": null,
  "patanjali-bhade-soap.webp": null,
  "pears-soap.webp":
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Pears_New_Shape.jpg",
  "rexona-soap.webp": null,
  "rin-kapade-soap.webp": null,
  "santabai-soap.webp": null,
  "santoor-soap.webp": null,
  "sargam-kapade-soap.webp": null,
  "surf-excel-kapade-soap.webp": null,
  "vim-bhade-soap.webp": null,
  "wheel-sabun.webp": null,
  // Shampoo
  "clinic-plus-shampoo.webp": null,
  "dove-shampoo.webp":
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Dove_shampoo_bottle.jpg",
  "head-shoulders-shampoo.webp":
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Head_%26_Shoulders_Shampoo_%2851013601187%29.jpg",
  "sunsilk-shampoo.webp": null,
  "tresemme-shampoo.webp":
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/TRESemm%C3%A9.jpg",
  "vatika-shampoo.webp": null,
  // Paste
  "colgate-white.webp":
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/2022_Colgate_Toothpaste_for_Russia_market_assorted.jpg",
  "colgate-max-fresh.webp":
    "https://upload.wikimedia.org/wikipedia/commons/7/79/2022_Colgate_Toothpaste_for_Russia_market_Total_12_Vitamin_Recharge.jpg",
  // Detergent
  "nirma-powder.webp": null,
  "rin-powder.webp": null,
  "sargam-powder.webp": null,
  "surf-excel-powder.webp": null,
  "tide-powder.webp":
    "https://upload.wikimedia.org/wikipedia/commons/6/66/TideDetergentChina.jpg",
  "wheel-powder.webp": null,
  // Phenyl
  "harpic.webp":
    "https://upload.wikimedia.org/wikipedia/commons/4/43/ToiletcleanersbyAlofok_%284%29.JPG",
  "lizol.webp": null,
  "sunny-phenyl.webp": null,
  // Bhagar (commons grains)
  "bhagar.webp":
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Echinochloa_frumentacea_seeds%2C_by_Omar_Hoftun.jpg",
};

const results = [];

function download(url, dest) {
  execSync(
    `curl -sSL -f -A "AbhidnyaAgroBot/1.0" -o ${JSON.stringify(dest)} ${JSON.stringify(url)}`,
    { stdio: "pipe" },
  );
}

async function toWebp(name, inputPath) {
  const outPath = path.join(outDir, name);
  await sharp(inputPath)
    .rotate()
    .resize(1200, 1200, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(outPath);
}

for (const [filename, url] of Object.entries(SOURCES)) {
  if (!url) {
    results.push({
      filename,
      status: "kept",
      note: "No usable direct packshot URL found on public web",
    });
    continue;
  }
  const tmp = path.join("/tmp", `fmcg-src-${filename.replace(/\//g, "_")}`);
  try {
    download(url, tmp);
    const size = fs.statSync(tmp).size;
    if (size < 3000) throw new Error(`Download too small (${size} bytes)`);
    await toWebp(filename, tmp);
    fs.unlinkSync(tmp);
    results.push({ filename, status: "replaced", note: url });
  } catch (err) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    results.push({
      filename,
      status: "kept",
      note: `Download/convert failed: ${err.message}`,
    });
  }
}

console.log(JSON.stringify(results, null, 2));
