"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Factory,
  Globe,
  FlaskConical,
  Truck,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Farm to Fork Traceability",
    description:
      "Every batch carries a digital lineage — know exactly which farm, which season, and which quality lot your product comes from. Full QR-based traceability.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Factory,
    title: "State-of-the-Art Processing",
    description:
      "Our fully automated processing unit uses the latest sortex, de-husking, and grading machinery ensuring zero-contamination, consistent grade, and superior shelf life.",
    color: "text-primary",
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
  {
    icon: FlaskConical,
    title: "Rigorous Quality Testing",
    description:
      "FSSAI-accredited in-house labs test every lot for moisture, impurities, aflatoxin, and nutritional parameters before dispatch.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Globe,
    title: "Global Quality Standards",
    description:
      "Stringent in-house quality checks at every stage — from sourcing to packaging. Our products meet international standards and are currently exported to Dubai.",
    color: "text-accent-700",
    bg: "bg-accent/8",
    border: "border-accent/15",
  },
  {
    icon: Truck,
    title: "Reliable B2B Logistics",
    description:
      "Temperature-controlled cold-chain dispatch for sensitive products, bulk container loading, and on-time delivery tracked end-to-end.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Handshake,
    title: "Farmer Partnership Program",
    description:
      "We partner directly with farming families across Maharashtra, ensuring fair pricing, reducing middlemen and maximising farm income.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];


export default function ValueProps() {
  return (
    <section id="value-props" className="section-pad bg-white relative overflow-hidden" aria-labelledby="value-props-heading">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-50 blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-50 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            className="badge-green mb-4 inline-flex"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why Choose Us
          </motion.span>
          <h2
            id="value-props-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            The{" "}
            <span className="bg-gradient-to-r from-primary via-forest-mid to-emerald-500 bg-clip-text text-transparent">
              Abhidnya
            </span>{" "}
            Difference
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From seed to shelf, we maintain an unbroken chain of quality, sustainability, and trust
            that sets the industry benchmark.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white border ${item.border} rounded-2xl p-7
                  shadow-card hover:shadow-card-hover transition-all duration-300
                  overflow-hidden`}
              >
                {/* Subtle gradient glow on hover — very light so product colors stay true */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.25] transition-opacity duration-500
                  bg-gradient-to-br ${item.bg} from-transparent`} />

                {/* Background accent orb */}
                <div
                  className={`absolute -top-6 -right-6 w-32 h-32 rounded-full ${item.bg} opacity-50
                    group-hover:scale-[2] group-hover:opacity-80 transition-all duration-700 blur-2xl`}
                />

                {/* Icon with micro-animation */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className={`relative w-12 h-12 rounded-xl ${item.bg} border ${item.border}
                    flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.8} />
                </motion.div>

                <h3 className="font-display font-bold text-gray-900 text-lg mb-3 relative group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative">{item.description}</p>

                {/* Bottom gradient line on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${item.bg} scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left rounded-b-2xl`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
