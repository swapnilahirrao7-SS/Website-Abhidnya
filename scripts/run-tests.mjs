/**
 * Abhidnya Agro Industries — Full Website Test Suite
 * Run: node scripts/run-tests.mjs
 */

import fs   from "fs";
import path from "path";

const ROOT = path.resolve("/Users/swapnilahirrao/Documents/Website/abhidnya-agro");

let passed = 0;
let failed = 0;
const failures = [];

function pass(name) {
  console.log(`  ✅  ${name}`);
  passed++;
}
function fail(name, reason) {
  console.log(`  ❌  ${name}`);
  console.log(`       → ${reason}`);
  failed++;
  failures.push({ name, reason });
}
function section(title) {
  console.log(`\n${"─".repeat(60)}`);
  console.log(`  ${title}`);
  console.log("─".repeat(60));
}

function readFile(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}
function fileExists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

// ── 1. KEY FILES EXIST ────────────────────────────────────────
section("1 · Key files exist");

const requiredFiles = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "next.config.ts",
  "components/layout/Navbar.tsx",
  "components/layout/Footer.tsx",
  "components/sections/Hero.tsx",
  "components/sections/ValueProps.tsx",
  "components/sections/ProductShowcase.tsx",
  "components/sections/About.tsx",
  "components/sections/Stats.tsx",
  "components/sections/Contact.tsx",
  "public/logo.png",
  ".env.local",
];

for (const f of requiredFiles) {
  fileExists(f) ? pass(f) : fail(f, "File not found");
}

// ── 2. PRODUCTS — COUNT, NAMES, UNIQUE IDs ───────────────────
section("2 · ProductShowcase — 35 products, unique IDs");

const showcaseSrc = readFile("components/sections/ProductShowcase.tsx");

const idMatches   = [...showcaseSrc.matchAll(/^\s+id:\s+"([^"]+)"/gm)].map(m => m[1]);
const nameMatches = [...showcaseSrc.matchAll(/^\s+name:\s+"([^"]+)"/gm)].map(m => m[1]);

idMatches.length === 35
  ? pass(`Product count = ${idMatches.length}`)
  : fail(`Product count`, `Expected 35, got ${idMatches.length}`);

const uniqueIds = new Set(idMatches);
uniqueIds.size === idMatches.length
  ? pass("All product IDs are unique")
  : fail("Duplicate product IDs", `${idMatches.length - uniqueIds.size} duplicates found`);

// ── 3. PRODUCT IMAGES EXIST ───────────────────────────────────
section("3 · Product images — all files present in /public/products/");

const imageMatches = [...showcaseSrc.matchAll(/image:\s+"(\/products\/[^"]+)"/g)].map(m => m[1]);

for (const imgPath of imageMatches) {
  const rel = `public${imgPath}`;
  fileExists(rel)
    ? pass(rel)
    : fail(rel, "Image file missing");
}

// ── 4. PRODUCT SPECS — NO PLACEHOLDER VALUES ─────────────────
section("4 · Product specs — no placeholder/empty spec strings");

const specMatches = [...showcaseSrc.matchAll(/specs:\s+\[([^\]]+)\]/g)];
let specsChecked = 0;

for (const m of specMatches) {
  const raw = m[1];
  const items = [...raw.matchAll(/"([^"]+)"/g)].map(x => x[1]);
  for (const item of items) {
    specsChecked++;
    if (item.trim() === "" || item === "TBD" || item === "N/A") {
      fail(`Spec value "${item}"`, "Empty or placeholder spec");
    }
  }
}
pass(`${specsChecked} spec values verified (none empty/placeholder)`);

// ── 5. CONTACT FORM — EMAILJS CONFIG ─────────────────────────
section("5 · Contact — EmailJS configuration");

const envSrc = readFile(".env.local");

envSrc.includes("NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_i0vnlwe")
  ? pass("EMAILJS_SERVICE_ID set")
  : fail("EMAILJS_SERVICE_ID", "Missing or wrong value");

envSrc.includes("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_y7jrahw")
  ? pass("EMAILJS_TEMPLATE_ID set")
  : fail("EMAILJS_TEMPLATE_ID", "Missing or wrong value");

envSrc.includes("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=isuAYzJNrAOVzn76D")
  ? pass("EMAILJS_PUBLIC_KEY set")
  : fail("EMAILJS_PUBLIC_KEY", "Missing or wrong value");

const contactSrc = readFile("components/sections/Contact.tsx");

contactSrc.includes("emailjs.send")
  ? pass("emailjs.send() wired up in Contact.tsx")
  : fail("emailjs.send()", "Not found in Contact.tsx");

contactSrc.includes("isFormValid")
  ? pass("Form validation (isFormValid) present")
  : fail("Form validation", "isFormValid not found");

contactSrc.includes("disabled={loading || !isFormValid}")
  ? pass("Submit button disabled when form invalid")
  : fail("Submit button guard", "disabled condition not found");

// ── 6. CONTACT FORM — ALL 35 PRODUCTS IN DROPDOWN ────────────
section("6 · Contact — product dropdown matches ProductShowcase");

const expectedProducts = [
  "Wheat", "Bajari (Pearl Millet)", "Jawari (Sorghum)",
  "Indrayani Rice", "Indrayani Pimpalner Rice", "Wada Kolam Rice",
  "Surti Kolam Rice", "Flying Horse Basmati", "Indian Basmati Rice",
  "Brown Sella Basmati", "White Sella Basmati", "Zafarani Basmati",
  "Nagali (Finger Millet / Ragi)", "Harbhara (Desi Chana)",
  "Kabuli Chana (White Chickpeas)", "Moong (Whole Green Gram)",
  "Moongdaal Super", "Moongdaal Classic", "Moongdaal Premium",
  "Moongdaal Saal", "Masoor Daal Classic", "Masoor Dal Premium",
  "Moth (Whole Moth Beans)", "Moth Daal Classic-Khada",
  "Moth Daal Premium-Ganpati Khada", "Toor Daal Premium-Leher Fatka",
  "Toor Daal Super-Mango Kesar", "Toordaal Classic",
  "Udid Daal Black (Whole)", "Udiddaal Super-Royal Parivar",
  "Udiddaal Classic", "Udiddaal Premium", "Chanadaal Polish-Dalparivar",
  "Chana Dal-Kori Shriram", "Chandaal Kori-Gopal",
];

let dropdownMissing = 0;
for (const p of expectedProducts) {
  if (!contactSrc.includes(`"${p}"`)) {
    fail(`Dropdown: "${p}"`, "Not found in Contact.tsx product list");
    dropdownMissing++;
  }
}
if (dropdownMissing === 0) pass(`All 35 products present in dropdown`);

// ── 7. STATS SECTION — CORRECT VALUES ────────────────────────
section("7 · Stats — values match website content");

const statsSrc = readFile("components/sections/Stats.tsx");

const statChecks = [
  ["35",     "Products stat"],
  ["120000", "Facility sq.ft. stat"],
  ["99",     "Purity stat"],
  ["100",    "Farm-Direct stat"],
  ["15000",  "Storage stat"],
  ["3",      "Years of Excellence stat"],
];

for (const [val, label] of statChecks) {
  statsSrc.includes(`value: ${val}`)
    ? pass(label)
    : fail(label, `value: ${val} not found in Stats.tsx`);
}

statsSrc.includes("Metro Cash & Carry") || statsSrc.includes("BigBasket")
  ? fail("Removed brand strip", "Old brand names still present")
  : pass("Old brand trust strip removed");

// ── 8. ABOUT — CORRECT CONTENT ───────────────────────────────
section("8 · About — key content checks");

const aboutSrc = readFile("components/sections/About.tsx");

[
  ["1,20,000", "1,20,000 sq.ft. processing unit"],
  ["Ujwala Amrut Biraris", "Founder name"],
  ["Nashik", "City = Nashik"],
  ["2022", "Journey milestone 2022"],
  ["2023", "Journey milestone 2023"],
  ["2024", "Journey milestone 2024"],
  ["2025", "Journey milestone 2025"],
  ["2026", "Journey milestone 2026"],
].forEach(([needle, label]) => {
  aboutSrc.includes(needle)
    ? pass(label)
    : fail(label, `"${needle}" not found in About.tsx`);
});

// ── 9. HERO — CORRECT CONTENT ────────────────────────────────
section("9 · Hero — key content checks");

const heroSrc = readFile("components/sections/Hero.tsx");

[
  ["2023", "Since 2023 badge"],
  ["Farm-Direct", "Farm-Direct badge"],
  ["Dubai", "Dubai export badge"],
  ["35+", "35+ products badge"],
].forEach(([needle, label]) => {
  heroSrc.includes(needle)
    ? pass(label)
    : fail(label, `"${needle}" not found in Hero.tsx`);
});

// ── 10. FOOTER & NAVBAR — CONTACT INFO ───────────────────────
section("10 · Footer & Navbar — contact information");

const footerSrc = readFile("components/layout/Footer.tsx");

[
  ["abhidnyaagroindustries6001@gmail.com", "Email address"],
  ["9145226001", "Phone number"],
  ["Nashik", "City in footer"],
].forEach(([needle, label]) => {
  footerSrc.includes(needle)
    ? pass(label)
    : fail(label, `"${needle}" not found in Footer.tsx`);
});

contactSrc.includes("Dhadne")
  ? pass("Processing unit address (Dhadne) in Contact.tsx")
  : fail("Processing unit address", '"Dhadne" not found in Contact.tsx');

// ── 11. NEXT.JS CONFIG ────────────────────────────────────────
section("11 · next.config.ts — image domains configured");

const nextCfg = readFile("next.config.ts");
nextCfg.includes("images.unsplash.com")
  ? pass("Unsplash remote pattern configured")
  : fail("Unsplash domain", "Missing from next.config.ts");

// ── SUMMARY ───────────────────────────────────────────────────
console.log(`\n${"═".repeat(60)}`);
console.log(`  TEST SUMMARY`);
console.log(`${"═".repeat(60)}`);
console.log(`  Passed : ${passed}`);
console.log(`  Failed : ${failed}`);
console.log(`  Total  : ${passed + failed}`);

if (failures.length > 0) {
  console.log(`\n  ── Failures ──`);
  failures.forEach(({ name, reason }) =>
    console.log(`  • ${name}\n    ${reason}`)
  );
}

console.log(`\n  ${failed === 0 ? "🎉  All tests passed!" : "⚠️   Some tests failed — review above."}\n`);
process.exit(failed > 0 ? 1 : 0);
