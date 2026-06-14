"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star, Leaf, CheckCircle2 } from "lucide-react";

type Category = "All" | "Pulses" | "Grains" | "Specialty";

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

const products: Product[] = [
  {
    id: "red-lentils",
    name: "Red Split Lentils (Masoor Dal)",
    category: "Pulses",
    image:
      "https://images.unsplash.com/photo-1764573464925-da17a9f796d4?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    grade: "Premium Grade A",
    description:
      "Bright crimson split lentils with exceptionally uniform particle size. Quick-cooking, high-protein, naturally gluten-free.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.5%"],
    rating: 4.9,
    featured: true,
  },
  {
    id: "chickpeas",
    name: "Kabuli Chickpeas (Chole)",
    category: "Pulses",
    image:
      "https://images.unsplash.com/photo-1644432757699-bb5a01e8fb0e?auto=format&fit=crop&w=800&q=80",
    badge: "Export Grade",
    grade: "Super Grade",
    description:
      "Large-seeded, milky-white Kabuli chickpeas sourced from Rajasthan's premium growing belts. High count size 42/44.",
    specs: ["Count: 42/44 per oz", "Moisture: <11%", "Purity: 99.0%"],
    rating: 4.8,
    featured: true,
  },
  {
    id: "toor-dal",
    name: "Toor Dal (Yellow Pigeon Peas)",
    category: "Pulses",
    image:
      "https://images.unsplash.com/photo-1594900799266-0e56587ba586?auto=format&fit=crop&w=800&q=80",
    badge: "Organic",
    grade: "A Grade",
    description:
      "Premium oiled and un-oiled toor dal varieties. Rich nutty aroma, consistent split quality.",
    specs: ["Protein: 22g/100g", "Fat: <1.5%", "Purity: 99.0%"],
    rating: 4.7,
  },
  {
    id: "moong-dal",
    name: "Green Moong Whole & Split",
    category: "Pulses",
    image:
      "https://images.unsplash.com/photo-1644432758003-536a7e0a7544?auto=format&fit=crop&w=800&q=80",
    badge: "Organic",
    grade: "Premium Grade",
    description:
      "Vibrant green mung beans and split moong. Exceptionally digestible, high in antioxidants.",
    specs: ["Protein: 24g/100g", "Moisture: <10%", "Purity: 99.5%"],
    rating: 4.8,
  },
  {
    id: "basmati-rice",
    name: "Extra Long Grain Basmati",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    badge: "GI Tagged",
    grade: "Premium Grade",
    description:
      "Authentic aged Basmati from the Himalayan foothills. Extra-long grain, fragrant, non-sticky when cooked.",
    specs: ["Grain Length: 8.5mm+", "Aged: 2 years", "Purity: 100%"],
    rating: 5.0,
    featured: true,
  },
  {
    id: "wheat",
    name: "Sharbati Wheat (MP Premium)",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1663025293688-322e16b6cb66?auto=format&fit=crop&w=800&q=80",
    badge: "Export Grade",
    grade: "Grade A",
    description:
      "Golden Sharbati wheat from Madhya Pradesh's black-soil belt. High protein flour yield.",
    specs: ["Protein: 12%+", "Gluten: 28%+", "Moisture: <13%"],
    rating: 4.7,
  },
  {
    id: "turmeric",
    name: "Erode Turmeric Fingers & Powder",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?auto=format&fit=crop&w=800&q=80",
    badge: "High Curcumin",
    grade: "Premium Grade",
    description:
      "Brilliant golden Erode turmeric with high curcumin content (4%+). Double-polished finger & fine powder.",
    specs: ["Curcumin: 4%+", "Moisture: <10%", "ASTA Colour: 28+"],
    rating: 4.9,
    featured: true,
  },
  {
    id: "cumin",
    name: "Rajasthan Cumin Seeds (Jeera)",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1773869910193-c7ae23145ac9?auto=format&fit=crop&w=800&q=80",
    badge: "Origin Certified",
    grade: "Singapore Grade",
    description:
      "Premium Unjha/Rajasthan cumin seeds. Deep brown color, intense aroma, bold essential oil content.",
    specs: ["Oil Content: 3%+", "Moisture: <10%", "Purity: 99.5%"],
    rating: 4.8,
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds (Oilseed Grade)",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1635843111961-06c71c3ed8cf?auto=format&fit=crop&w=800&q=80",
    badge: "Cold Press Ready",
    grade: "Grade A",
    description:
      "High-oil sunflower seeds for cold-press extraction. Uniform size, low FFA, ideal for premium oil production.",
    specs: ["Oil Content: 48%+", "FFA: <0.5%", "Moisture: <8%"],
    rating: 4.6,
  },
];

const categories: Category[] = ["All", "Pulses", "Grains", "Specialty"];

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-amber-50 text-amber-700 border-amber-200",
  "Export Grade": "bg-blue-50 text-blue-700 border-blue-200",
  Organic: "bg-green-50 text-green-700 border-green-200",
  "GI Tagged": "bg-purple-50 text-purple-700 border-purple-200",
  "High Curcumin": "bg-orange-50 text-orange-700 border-orange-200",
  "Origin Certified": "bg-red-50 text-red-700 border-red-200",
  "Cold Press Ready": "bg-yellow-50 text-yellow-700 border-yellow-200",
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
