"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sprout, Globe, ShieldCheck } from "lucide-react";

const heroStats = [
  { value: "50K+", label: "Tons Processed" },
  { value: "20+", label: "Export Countries" },
  { value: "23 Yrs", label: "Industry Legacy" },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2070&q=90"
          alt="Premium golden agricultural fields at harvest"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2818]/85 via-[#1b4332]/70 to-[#0d2818]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-[#d97706]/20 border border-[#d97706]/40 backdrop-blur-sm
              text-yellow-300 text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5">
              <Sprout className="w-3.5 h-3.5" />
              Premium Agro Processing Since 2001
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Sustaining{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Generations
            </span>
            <br />
            with Premium{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Agricultural
            </span>
            <br />
            Yields
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10"
          >
            From the richest farmlands of India to tables across the globe —
            Abhidnya Agro delivers traceable, certified, and sustainably processed
            pulses, grains, and specialty agricultural products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          >
            <button
              onClick={() => handleScroll("#products")}
              className="btn-amber text-base px-8 py-4 shadow-2xl"
            >
              Explore Our Range
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-outline text-base px-8 py-4"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {heroStats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col"
              >
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {value}
                </span>
                <span className="text-sm text-white/55 font-medium mt-0.5">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust badges - floating card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3"
        >
          {[
            { icon: ShieldCheck, text: "ISO 22000 Certified" },
            { icon: Globe, text: "20+ Countries Served" },
            { icon: Sprout, text: "100% Organic Certified" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20
                rounded-xl px-4 py-3 text-white text-sm font-medium w-52"
            >
              <Icon className="w-5 h-5 text-yellow-300 shrink-0" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, ease: "easeOut" }}
        className="relative z-10 flex justify-center pb-8"
      >
        <button
          onClick={() => handleScroll("#value-props")}
          aria-label="Scroll down"
          className="text-white/50 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
