"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Leaf,
  Users,
  Factory,
  ArrowRight,
  Sprout,
  Globe,
  Warehouse,
} from "lucide-react";

const milestones = [
  { year: "2022", event: "Founded in Nashik with a vision to modernize agro processing", icon: Sprout, color: "bg-emerald-500", glow: "shadow-emerald-500/40" },
  { year: "2023", event: "Setup the fully automated plant in Dhadane, Sakri", icon: Factory, color: "bg-primary", glow: "shadow-primary/40" },
  { year: "2024", event: "Expanded more direct farmer partnerships across Maharashtra", icon: Users, color: "bg-amber-500", glow: "shadow-amber-500/40" },
  { year: "2025", event: "Launched export operations serving Dubai", icon: Globe, color: "bg-blue-500", glow: "shadow-blue-500/40" },
  { year: "2026", event: "15,000 sq.ft. additional storage capacity Godown commissioned", icon: Warehouse, color: "bg-violet-500", glow: "shadow-violet-500/40" },
];

const commitments = [
  "Direct sourcing eliminates exploitative middlemen, ensuring farmers receive 15–20% above MSP",
  "Zero-waste processing — husk and by-products converted to animal feed",
  "Rainwater harvesting and solar-powered processing unit",
  "We actively encourage women empowerment — our processing unit proudly employs and uplifts women from local communities",
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white overflow-hidden relative" aria-labelledby="about-heading">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-emerald-50 opacity-60 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-50 opacity-50 blur-3xl"
        />
      </div>
      <div className="section-container relative">
        {/* Top row: split layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24">
          {/* Left: Modern Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=85"
                alt="State-of-the-art food processing facility at Abhidnya Agro"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>

            {/* Second image below */}
            <div className="relative h-[200px] mt-4 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=85"
                alt="Lush green agricultural fields in Maharashtra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 -right-6 lg:-right-10 bg-white rounded-2xl p-5 shadow-card-hover
                border border-gray-100 w-56"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-lg leading-none">1.2L sq.ft.</div>
                  <div className="text-xs text-gray-500 mt-0.5">Fully automated unit</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                Fully automated sortex &amp; grading — zero human contamination in critical stages.
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
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
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We have grown from a modest grain trading operation in Nashik into a fully-integrated
              agro processing company — operating a 1,20,000 sq.ft. fully automated processing unit,
              employing 200+ dedicated professionals, and enriching the lives of farming families
              across Maharashtra.
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
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-extrabold text-gray-900 mb-3">
              Our Journey
            </h3>
            <p className="text-gray-500">Key milestones that shaped who we are today.</p>
          </div>

          <div className="relative">
            {/* Animated gradient timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-primary to-violet-500 opacity-30" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-primary to-violet-500"
            />

            <div className="space-y-10">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
                    className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Year + content side */}
                    <div className={`md:w-[calc(50%-2.5rem)] w-full ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group inline-block w-full"
                      >
                        {/* Year badge */}
                        <div className={`inline-flex items-center gap-2 mb-3 ${isLeft ? "md:flex-row-reverse" : ""} flex-row`}>
                          <span className={`font-display font-extrabold text-2xl bg-gradient-to-r from-primary to-forest-mid bg-clip-text text-transparent`}>
                            {m.year}
                          </span>
                        </div>
                        {/* Event card */}
                        <div className={`relative bg-white border border-gray-100 rounded-2xl p-5 shadow-card
                          group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                          {/* Coloured left/right accent bar */}
                          <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} bottom-0 w-1 ${m.color} rounded-full`} />
                          <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                          {/* Subtle hover glow */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 ${m.color}`} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Center icon node */}
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                      className={`hidden md:flex w-12 h-12 rounded-full ${m.color} ${m.glow}
                        shadow-lg items-center justify-center shrink-0 z-10 border-4 border-white`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Empty spacer side */}
                    <div className="md:w-[calc(50%-2.5rem)] hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom image strip: farming connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
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
