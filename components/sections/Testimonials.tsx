"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mangesh Patil",
    role: "Regular Customer, Nashik",
    quote:
      "I've been buying Toor Dal and Basmati rice from Abhidnya for over a year now. The quality is consistently pure — no stones, no dust, just clean, well-graded grains every single time.",
    rating: 5,
    avatar: "MP",
    color: "bg-blue-600",
  },
  {
    name: "Usha Bhadane",
    role: "Homemaker, Sakri",
    quote:
      "Being close to their Dhadne processing unit, I've seen how fresh everything is straight from the farm. The Moong and Masoor dal cook faster and taste so much better than what I used to buy at the local market.",
    rating: 5,
    avatar: "UB",
    color: "bg-purple-600",
  },
  {
    name: "Pankaj Jain",
    role: "Loyal Customer, Nashik",
    quote:
      "What I love most is the purity. My family has switched entirely to Abhidnya's Wada Kolam rice and Chana dal — you can actually taste the difference when the produce comes straight from the farm.",
    rating: 5,
    avatar: "PJ",
    color: "bg-emerald-600",
  },
  {
    name: "Rajesh Mehta",
    role: "Regular Customer, Nashik",
    quote:
      "Consistent quality, fair pricing, and you know exactly where your food is coming from. Abhidnya's farm-direct sourcing gives me real confidence in what I feed my family every day.",
    rating: 5,
    avatar: "RM",
    color: "bg-orange-600",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="badge-amber mb-4">Customer Stories</span>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Trusted for{" "}
            <span className="bg-gradient-to-r from-accent-700 via-accent to-yellow-500 bg-clip-text text-transparent">
              Purity & Farm-Direct Freshness
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            From daily kitchens to festive feasts — real customers share why they trust Abhidnya Agro for pure, farm-direct quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-card-hover
                transition-shadow duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 not-italic">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center
                    text-white text-sm font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
