"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Head Buyer, Metro Cash & Carry India",
    quote:
      "Abhidnya Agro has been our most reliable pulse supplier for 4 years. Consistent grade, on-time delivery, and their QC documentation is impeccable. We haven't seen a single non-conformance in all our orders.",
    rating: 5,
    avatar: "RM",
    color: "bg-blue-600",
  },
  {
    name: "Priya Krishnan",
    role: "Director, FreshToHome B2B",
    quote:
      "What sets Abhidnya apart is their farm traceability. Our customers demand transparency, and Abhidnya's QR-batch system lets us show exactly where every kilogram of lentils came from. This is the future of agro supply.",
    rating: 5,
    avatar: "PK",
    color: "bg-purple-600",
  },
  {
    name: "Ahmed Al-Rashidi",
    role: "Import Manager, Al Ain Agri Supplies, UAE",
    quote:
      "We source Kabuli chickpeas and Basmati rice from Abhidnya for our UAE and Oman retail chain. Their export documentation, phytosanitary compliance, and moisture levels have always been spot on. Highly recommended.",
    rating: 5,
    avatar: "AA",
    color: "bg-emerald-600",
  },
  {
    name: "Sunita Babu",
    role: "Procurement Lead, Organic India Ltd.",
    quote:
      "Their direct farmer sourcing model resonates deeply with our values. We get certified organic turmeric and cumin that we can proudly trace back to specific villages in Rajasthan. Premium quality at fair farm pricing.",
    rating: 5,
    avatar: "SB",
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
          <span className="badge-amber mb-4">Client Stories</span>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Trusted by Industry{" "}
            <span className="bg-gradient-to-r from-accent-700 via-accent to-yellow-500 bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            From domestic retail chains to international exporters — our partners speak for our quality.
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
