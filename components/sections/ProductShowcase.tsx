"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star, Leaf, CheckCircle2 } from "lucide-react";

type Category = "All" | "Pulses" | "Grains";

interface Product {
  id: string;
  name: string;
  category: Omit<Category, "All">;
  image: string;
  badge: string;
  grade: string;
  description: string;
  specs: string[];
  rating: number;
  featured?: boolean;
}

// ─── Every product gets its own unique confirmed Unsplash URL ─────────────────
const Q = "?auto=format&fit=crop&w=800&q=80";
const BASE = "https://images.unsplash.com/";
const PLUS = "https://plus.unsplash.com/";
// helper
const u = (id: string) => (id.startsWith("premium_") ? PLUS : BASE) + id + Q;

const products: Product[] = [
  // ── GRAINS ──────────────────────────────────────────────────────────────────
  {
    id: "wheat",
    name: "Wheat",
    category: "Grains",
    image: "/products/wheat.png",
    badge: "Export Grade",
    grade: "Grade A",
    description:
      "Golden Sharbati wheat from Madhya Pradesh's black-soil belt. High protein content, excellent flour yield — ideal for premium atta and semolina.",
    specs: ["Protein: 12%+", "Gluten: 28%+", "Moisture: <13%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "bajari",
    name: "Bajari (Pearl Millet)",
    category: "Grains",
    image: "/products/bajari.png",
    badge: "Gluten-Free",
    grade: "Grade A",
    description:
      "Pearl millet — iron-rich, calcium-packed staple of Maharashtra. Used for traditional bhakri, porridge, and flour blends.",
    specs: ["Iron: 8mg/100g", "Fibre: 11g/100g", "Moisture: <12%"],
    rating: 4.6,
  },
  {
    id: "jawari",
    name: "Jawari (Sorghum)",
    category: "Grains",
    image: "/products/jawari.png",
    badge: "Gluten-Free",
    grade: "Grade A",
    description:
      "White sorghum grains for bhakri, porridge and flour. A high-antioxidant, gluten-free superfood grain widely consumed across Maharashtra and Karnataka.",
    specs: ["Protein: 11g/100g", "Fibre: 6g/100g", "Moisture: <12%"],
    rating: 4.6,
  },
  {
    id: "harbhara",
    name: "Harbhara (Desi Chana)",
    category: "Pulses",
    image: "/products/harbhara.png",
    badge: "Local Favourite",
    grade: "Premium Grade",
    description:
      "Whole brown desi chickpeas (Kala Chana) — earthy, nutty, high-fibre. Perfect for sprouting, traditional curries, and sundal.",
    specs: ["Protein: 20g/100g", "Fibre: 8g/100g", "Moisture: <12%"],
    rating: 4.7,
  },
  {
    id: "kabuli-chana",
    name: "Kabuli Chana (White Chickpeas)",
    category: "Pulses",
    image: "/products/kabuli-chana.png",
    badge: "Export Grade",
    grade: "Super Grade",
    description:
      "Large-seeded milky-white Kabuli chickpeas from Rajasthan's premium belts. High count size 42/44 — sought after globally.",
    specs: ["Count: 42/44 per oz", "Moisture: <11%", "Purity: 99.0%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "indrayani",
    name: "Indrayani Rice",
    category: "Grains",
    image: "/products/indrayani.png",
    badge: "Maharashtra Special",
    grade: "Premium Grade",
    description:
      "Aromatic short-grain rice from Maharashtra. Soft, sticky texture with a distinctive fragrance — the everyday favourite of Pune and Nashik.",
    specs: ["Grain: Short & Aromatic", "Texture: Soft-Sticky", "Moisture: <13%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "indrayani-pimpalner",
    name: "Indrayani Pimpalner Rice",
    category: "Grains",
    image: "/products/indrayani-pimpalner.png",
    badge: "Superior Variety",
    grade: "Premium Grade",
    description:
      "The premium Pimpalner sub-variety of Indrayani — fuller grain, deeper aroma, and slightly firmer bite than regular Indrayani.",
    specs: ["Grain: Short Premium", "Aroma: Rich", "Moisture: <13%"],
    rating: 4.9,
    featured: true,
  },
  {
    id: "wada-kolam",
    name: "Wada Kolam Rice",
    category: "Grains",
    image: "/products/wada-kolam.png",
    badge: "Fine Grain",
    grade: "Grade A",
    description:
      "Wada Kolam — a fine, soft-cooking white rice prized for its consistent texture. Excellent yield, low brokens, ideal for everyday meals.",
    specs: ["Type: Medium-Short", "Brokens: <2%", "Moisture: <13%"],
    rating: 4.7,
  },
  {
    id: "surti-kolam",
    name: "Surti Kolam Rice",
    category: "Grains",
    image: "/products/surti-kolam.png",
    badge: "Fine Grain",
    grade: "Grade A",
    description:
      "Surti Kolam — fine medium-short grain white rice from Gujarat-Maharashtra belt. Light, fluffy when cooked, loved for its mild aroma.",
    specs: ["Type: Medium-Short", "Brokens: <2%", "Moisture: <13%"],
    rating: 4.7,
  },
  {
    id: "flying-horse-basmati",
    name: "Flying Horse Basmati",
    category: "Grains",
    image: "/products/flying-horse-basmati.png",
    badge: "Premium Brand",
    grade: "Premium Grade",
    description:
      "Flying Horse — a trusted premium brand of extra-long grain Basmati. Aged 2 years for deeper fragrance, non-sticky, elongates beautifully on cooking.",
    specs: ["Grain Length: 8.5mm+", "Aged: 2 years", "Purity: 100%"],
    rating: 5.0,
    featured: true,
  },
  {
    id: "indian-basmati",
    name: "Indian Basmati Rice",
    category: "Grains",
    image: "/products/indian-basmati.png",
    badge: "GI Tagged",
    grade: "Standard Grade",
    description:
      "Classic Indian Basmati from the Himalayan foothills. Long-grain, fragrant, and non-sticky — the foundation of every great biryani and pulao.",
    specs: ["Grain Length: 7.5mm+", "Aroma: Strong", "Moisture: <13%"],
    rating: 4.8,
  },
  {
    id: "brown-sella-basmati",
    name: "Brown Sella Basmati",
    category: "Grains",
    image: "/products/brown-sella-basmati.png",
    badge: "Parboiled",
    grade: "Sella Grade",
    description:
      "Parboiled Basmati with the outer bran retained — a whole-grain, nutrient-dense rice that remains firm and non-sticky even after extended cooking.",
    specs: ["Type: Parboiled Whole Grain", "Fibre: Higher", "Moisture: <13%"],
    rating: 4.6,
  },
  {
    id: "white-sella-basmati",
    name: "White Sella Basmati",
    category: "Grains",
    image: "/products/white-sella-basmati.png",
    badge: "Parboiled",
    grade: "Sella Grade",
    description:
      "White parboiled Basmati — the chef's choice for large-scale cooking. Pre-gelatinised starch ensures every grain separates perfectly, every time.",
    specs: ["Type: Parboiled White", "Brokens: <1%", "Moisture: <13%"],
    rating: 4.7,
  },
  {
    id: "zafarani-basmati",
    name: "Zafarani Basmati",
    category: "Grains",
    image: "/products/zafarani-basmati.png",
    badge: "Luxury Grade",
    grade: "Extra Premium",
    description:
      "Zafarani — our finest Basmati reserve. Extra-long needle grains, saffron-like golden hue, and an unmatched floral fragrance. The pinnacle of Basmati.",
    specs: ["Grain Length: 9mm+", "Aged: 3 years", "Purity: 100%"],
    rating: 5.0,
    featured: true,
  },

  // ══════════════════════════════════════════════════════════
  //  PULSES  (22 products: #15–#35 from rate chart)
  // ══════════════════════════════════════════════════════════
  {
    id: "moong",
    name: "Moong (Whole Green Gram)",
    category: "Pulses",
    image: "/products/moong-whole.png",
    badge: "Organic",
    grade: "Premium Grade",
    description:
      "Whole green moong beans — vibrant, highly digestible, rich in antioxidants. Ideal for sprouts, khichdi, and traditional moong curries.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.5%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "moongdaal-super",
    name: "Moongdaal Super",
    category: "Pulses",
    image: "/products/moongdaal-super.png",
    badge: "Best Seller",
    grade: "Super Grade",
    description:
      "Super-grade split and skinned moong dal — quick-cooking, golden-yellow, mild flavour. Our top-selling moong dal for B2B distribution.",
    specs: ["Protein: 24g/100g", "Moisture: <9%", "Purity: 99.5%"],
    rating: 4.9,
    featured: true,
  },
  {
    id: "moongdaal-classic",
    name: "Moongdaal Classic",
    category: "Pulses",
    image: "/products/moongdaal-classic.png",
    badge: "Classic Grade",
    grade: "Classic Grade",
    description:
      "Classic-grade split moong dal with consistent size and colour. A household staple prized for its everyday reliability and nutritional value.",
    specs: ["Protein: 23g/100g", "Moisture: <10%", "Purity: 99.0%"],
    rating: 4.7,
  },
  {
    id: "moongdaal-premium",
    name: "Moongdaal Premium",
    category: "Pulses",
    image: "/products/moongdaal-premium.png",
    badge: "Premium Grade",
    grade: "Premium Grade",
    description:
      "Premium split moong dal — machine-sorted for uniform grain size, vibrant colour, and superior cooking quality. Preferred by hotels and caterers.",
    specs: ["Protein: 24g/100g", "Moisture: <9%", "Purity: 99.5%"],
    rating: 4.8,
  },
  {
    id: "moongdaal-saal",
    name: "Moongdaal Saal",
    category: "Pulses",
    image: "/products/moongdaal-saal.png",
    badge: "Annual Stock",
    grade: "Grade A",
    description:
      "Moongdaal Saal — our annual-harvest fresh moong dal. Light green tinge, excellent texture, and a naturally sweet, nutty flavour after cooking.",
    specs: ["Harvest: Annual", "Moisture: <10%", "Purity: 99.0%"],
    rating: 4.7,
  },
  {
    id: "masoor-classic",
    name: "Masoor Daal Classic",
    category: "Pulses",
    image: "/products/masoor-classic.png",
    badge: "Classic Grade",
    grade: "Classic Grade",
    description:
      "Classic-grade red split lentils — bright crimson, quick-cooking, high-protein. A daily staple in millions of homes, reliable and consistent.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.0%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "masoor-premium",
    name: "Masoor Dal Premium",
    category: "Pulses",
    image: "/products/masoor-premium.png",
    badge: "Premium Grade",
    grade: "Premium Grade A",
    description:
      "Premium-grade red split lentils — machine-sorted for exceptional uniformity, deep crimson colour, and <10% moisture. The best of Masoor.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.5%"],
    rating: 4.9,
  },
  {
    id: "moth",
    name: "Moth (Whole Moth Beans)",
    category: "Pulses",
    image: "/products/moth-whole.png",
    badge: "Traditional",
    grade: "Grade A",
    description:
      "Whole moth beans (matki) — small, nutty, protein-rich legumes used across Maharashtra. Essential ingredient for usal and sprouted salads.",
    specs: ["Protein: 23g/100g", "Iron: 8mg/100g", "Moisture: <12%"],
    rating: 4.6,
  },
  {
    id: "moth-classic-khada",
    name: "Moth Daal Classic-Khada",
    category: "Pulses",
    image: "/products/moth-classic-khada.png",
    badge: "Classic Grade",
    grade: "Classic Grade",
    description:
      "Classic-Khada split moth dal — slightly coarser split with full earthy flavour intact. Popular in Maharashtra for traditional dals and usal.",
    specs: ["Protein: 23g/100g", "Texture: Coarse-Split", "Purity: 99%"],
    rating: 4.5,
  },
  {
    id: "moth-premium-ganpati",
    name: "Moth Daal Premium-Ganpati Khada",
    category: "Pulses",
    image: "/products/moth-premium-ganpati.png",
    badge: "Premium Grade",
    grade: "Ganpati Grade",
    description:
      "Premium Ganpati Khada moth dal — finest selection of split moth beans with superior protein content and minimal foreign matter.",
    specs: ["Protein: 23g/100g", "FM: <0.1%", "Purity: 99.5%"],
    rating: 4.7,
  },
  {
    id: "toor-leher-fatka",
    name: "Toor Daal Premium-Leher Fatka",
    category: "Pulses",
    image: "/products/toor-leher-fatka.png",
    badge: "Best Seller",
    grade: "Premium Grade",
    description:
      "Leher Fatka — our signature premium toor dal. Bright golden-yellow split pigeon peas, machine-cleaned, lightly oiled for longer shelf life.",
    specs: ["Protein: 22g/100g", "Fat: <1.5%", "Purity: 99.0%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "toor-mango-kesar",
    name: "Toor Daal Super-Mango Kesar",
    category: "Pulses",
    image: "/products/toor-mango-kesar.png",
    badge: "Super Grade",
    grade: "Super Grade",
    description:
      "Mango Kesar toor dal — a super-grade, un-oiled variety with a natural golden hue and rich aroma reminiscent of ripe mangoes. Prized by connoisseurs.",
    specs: ["Protein: 22g/100g", "Oiled: No", "Purity: 99.5%"],
    rating: 4.9,
  },
  {
    id: "toor-classic",
    name: "Toordaal Classic",
    category: "Pulses",
    image: "/products/toor-classic.png",
    badge: "Classic Grade",
    grade: "Classic Grade",
    description:
      "Classic-grade toor dal — consistent quality for everyday use. Uniform split, reliable protein content, and excellent cooking texture.",
    specs: ["Protein: 21g/100g", "Moisture: <12%", "Purity: 99.0%"],
    rating: 4.6,
  },
  {
    id: "udid-black",
    name: "Udid Daal Black (Whole)",
    category: "Pulses",
    image: "/products/udid-black.png",
    badge: "Whole Black",
    grade: "Grade A",
    description:
      "Whole black urad (sabut urad) with skin intact — deep earthy flavour, high protein. The key ingredient for authentic dal makhani and papad.",
    specs: ["Protein: 25g/100g", "Moisture: <10%", "Purity: 99.0%"],
    rating: 4.7,
  },
  {
    id: "udid-super-royal",
    name: "Udiddaal Super-Royal Parivar",
    category: "Pulses",
    image: "/products/udid-super-royal.png",
    badge: "Super Royal",
    grade: "Super Royal Grade",
    description:
      "Super-Royal Parivar — our flagship urad dal range. Exceptional uniformity, premium split quality, white dhuli dal ideal for idli, dosa and vada.",
    specs: ["Protein: 25g/100g", "Moisture: <9%", "Purity: 99.5%"],
    rating: 4.9,
    featured: true,
  },
  {
    id: "udid-classic",
    name: "Udiddaal Classic",
    category: "Pulses",
    image: "/products/udid-classic.png",
    badge: "Classic Grade",
    grade: "Classic Grade",
    description:
      "Classic urad dal — split, skinned, white dhuli variety. Reliable everyday quality for dals, khichdi, and traditional South Indian preparations.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.0%"],
    rating: 4.6,
  },
  {
    id: "udid-premium",
    name: "Udiddaal Premium",
    category: "Pulses",
    image: "/products/udid-premium.png",
    badge: "Premium Grade",
    grade: "Premium Grade",
    description:
      "Premium urad dal — machine-sorted for superior whiteness and uniform grain size. Preferred by restaurants for idli batter and restaurant-quality dal.",
    specs: ["Protein: 25g/100g", "Moisture: <9%", "Purity: 99.5%"],
    rating: 4.8,
  },
  {
    id: "chana-dal-polish",
    name: "Chanadaal Polish-Dalparivar",
    category: "Pulses",
    image: "/products/chana-dal-polish.png",
    badge: "Polished Grade",
    grade: "Dal Parivar Polish",
    description:
      "Dal Parivar Polished Chana Dal — machine-polished split Bengal gram with a bright golden-yellow finish. Uniform size, superior texture after cooking.",
    specs: ["Protein: 20g/100g", "Fibre: 5g/100g", "Moisture: <11%"],
    rating: 4.7,
  },
  {
    id: "chana-dal-shriram",
    name: "Chana Dal-Kori Shriram",
    category: "Pulses",
    image: "/products/chana-dal-shriram.png",
    badge: "Kori Grade",
    grade: "Kori-Shriram",
    description:
      "Kori Shriram Chana Dal — unpolished split Bengal gram with its natural bran intact. Rustic appearance, earthy flavour, higher fibre content.",
    specs: ["Protein: 20g/100g", "Fibre: 6g/100g", "Moisture: <11%"],
    rating: 4.6,
  },
  {
    id: "chana-dal-gopal",
    name: "Chandaal Kori-Gopal",
    category: "Pulses",
    image: "/products/chana-dal-gopal.png",
    badge: "Kori Grade",
    grade: "Kori-Gopal",
    description:
      "Kori Gopal Chana Dal — a preferred unpolished variety known for its traditional flavour profile. Widely used in Maharashtra for dals and snacks.",
    specs: ["Protein: 20g/100g", "Fibre: 6g/100g", "Moisture: <11%"],
    rating: 4.6,
  },
  {
    id: "nagali",
    name: "Nagali (Finger Millet / Ragi)",
    category: "Grains",
    image: "/products/nagali-ragi.png",
    badge: "Calcium Rich",
    grade: "Grade A",
    description:
      "Finger millet (Ragi/Nagali) — one of the richest plant sources of calcium. Used for nutritious porridges, flatbreads, and health foods. Naturally gluten-free.",
    specs: ["Calcium: 344mg/100g", "Fibre: 3.6g/100g", "Moisture: <12%"],
    rating: 4.8,
  },
];

const categories: Category[] = ["All", "Pulses", "Grains"];

const badgeColors: Record<string, string> = {
  "Export Grade":     "bg-blue-50 text-blue-700 border-blue-200",
  "Gluten-Free":      "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Local Favourite":  "bg-lime-50 text-lime-700 border-lime-200",
  "Maharashtra Special": "bg-orange-50 text-orange-700 border-orange-200",
  "Superior Variety": "bg-violet-50 text-violet-700 border-violet-200",
  "Fine Grain":       "bg-teal-50 text-teal-700 border-teal-200",
  "Premium Brand":    "bg-purple-50 text-purple-700 border-purple-200",
  "GI Tagged":        "bg-purple-50 text-purple-700 border-purple-200",
  Parboiled:          "bg-stone-50 text-stone-700 border-stone-200",
  "Luxury Grade":     "bg-amber-50 text-amber-800 border-amber-300",
  Organic:            "bg-green-50 text-green-700 border-green-200",
  "Best Seller":      "bg-amber-50 text-amber-700 border-amber-200",
  "Classic Grade":    "bg-gray-50 text-gray-700 border-gray-200",
  "Premium Grade":    "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Annual Stock":     "bg-yellow-50 text-yellow-700 border-yellow-200",
  Traditional:        "bg-orange-50 text-orange-700 border-orange-200",
  "Super Grade":      "bg-sky-50 text-sky-700 border-sky-200",
  "Whole Black":      "bg-neutral-100 text-neutral-700 border-neutral-300",
  "Super Royal":      "bg-rose-50 text-rose-700 border-rose-200",
  "Polished Grade":   "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Kori Grade":       "bg-stone-50 text-stone-600 border-stone-200",
  "Calcium Rich":     "bg-sky-50 text-sky-700 border-sky-200",
};

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover
        transition-all duration-300 hover:-translate-y-1 border border-gray-100/80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent
            transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[11px] font-semibold border rounded-full px-2.5 py-0.5
              ${badgeColors[product.badge] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}
          >
            {product.badge}
          </span>
        </div>

        {/* Featured star */}
        {product.featured && (
          <div className="absolute top-3 right-3 w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow">
            <Star className="w-3.5 h-3.5 text-white fill-white" />
          </div>
        )}

        {/* Hover CTA */}
        <motion.div
          initial={false}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-3 inset-x-3"
        >
          <button
            className="w-full flex items-center justify-center gap-2 bg-white text-primary
              font-semibold text-sm rounded-xl py-2.5 hover:bg-primary hover:text-white
              transition-colors duration-200"
          >
            View Specifications
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary/70 bg-primary/8 rounded-full px-2 py-0.5">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {product.rating}
          </div>
        </div>

        <h3 className="font-display font-bold text-gray-900 text-base leading-tight mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specs */}
        <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-4">
          {product.specs.slice(0, 2).map((spec) => (
            <div key={spec} className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              {spec}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductShowcase() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="section-pad bg-cream" aria-labelledby="products-heading">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="badge-amber mb-4">Product Range</span>
          <h2
            id="products-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Premium{" "}
            <span className="bg-gradient-to-r from-accent-700 via-accent to-yellow-500 bg-clip-text text-transparent">
              Agricultural
            </span>{" "}
            Products
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every product is hand-selected, machine-cleaned, lab-tested, and packed to
            international standards.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter products by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-primary/30
                ${
                  active === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              {cat}
              {cat === "All" && (
                <span className="ml-1.5 text-xs opacity-60">({products.length})</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Looking for a specific grade, packaging, or custom specification?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            <Leaf className="w-4 h-4" />
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
