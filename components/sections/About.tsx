"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Leaf,
  Users,
  Factory,
  Award,
  ArrowRight,
} from "lucide-react";

const milestones = [
  { year: "2001", event: "Founded in Nashik with a vision to modernize agro processing" },
  { year: "2007", event: "Received FSSAI certification & ISO 22000 accreditation" },
  { year: "2013", event: "Expanded to 2,000+ direct farmer partnerships across Maharashtra & MP" },
  { year: "2018", event: "Launched export operations serving 15+ countries" },
  { year: "2023", event: "Commissioned new 50,000 sq.ft HACCP-compliant processing unit" },
];

const commitments = [
  "Direct sourcing eliminates exploitative middlemen, ensuring farmers receive 15–20% above MSP",
  "Zero-waste processing — husk and by-products converted to animal feed",
  "Rainwater harvesting and solar-powered processing unit",
  "Women empowerment: 60% of workforce at our processing unit are women",
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white overflow-hidden" aria-labelledby="about-heading">
      <div className="section-container">
        {/* Top row: split layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24">
          {/* Left: Modern Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565793928422-3e23f8dd3c37?auto=format&fit=crop&w=1200&q=85"
                alt="State-of-the-art food processing facility at Abhidnya Agro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-6 lg:-right-10 bg-white rounded-2xl p-5 shadow-card-hover
                border border-gray-100 w-56"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-lg leading-none">50K+</div>
                  <div className="text-xs text-gray-500 mt-0.5">Tons processed / year</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                Fully automated sortex & grading — zero human contamination in critical stages.
              </div>
            </motion.div>

            {/* Second floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -left-6 lg:-left-8 bg-accent rounded-2xl p-4 shadow-lg w-44"
            >
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-xs">ISO 22000</span>
              </div>
              <div className="text-white/80 text-[11px]">International Food Safety Standard</div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="badge-green mb-5">Our Heritage</span>
            <h2
              id="about-heading"
              className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Rooted in Farms,{" "}
              <span className="bg-gradient-to-r from-primary to-forest-mid bg-clip-text text-transparent">
                Driven by Purpose
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded by Ujwala Amrut Biraris,
              Abhidnya Agro Industries was born from a simple belief: Indian farmers deserve
              better markets, and Indian consumers deserve better produce.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Over two decades, we have grown from a modest grain trading operation in Nashik into
              a fully-integrated agro processing company — operating a 50,000 sq.ft. HACCP-certified
              processing unit, employing 200+ people, and touching the lives of 2,000+ farming
              families across Maharashtra, Madhya Pradesh, and Rajasthan.
            </p>

            {/* Commitments */}
            <div className="space-y-3 mb-8">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Timeline section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-extrabold text-gray-900 mb-3">
              Our Journey
            </h3>
            <p className="text-gray-500">Key milestones that shaped who we are today.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-xl px-4 py-2">
                      <span className="font-display font-extrabold text-primary text-xl">{m.year}</span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-primary/20 shrink-0 z-10" />

                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "" : ""}`}>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
                      {m.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom image strip: farming connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-4 rounded-3xl overflow-hidden h-56"
        >
          {[
            {
              src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
              alt: "Indian farming fields",
            },
            {
              src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
              alt: "Farmers working in field",
            },
            {
              src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
              alt: "Aerial view of agricultural landscape",
            },
          ].map(({ src, alt }) => (
            <div key={alt} className="relative overflow-hidden group">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
