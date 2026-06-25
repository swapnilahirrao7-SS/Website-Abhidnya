"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Sprout, Globe, Leaf } from "lucide-react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) { setCount(0); return; }
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return count;
}

const heroStats = [
  { target: 50, suffix: "K+", label: "Tons Processed" },
  { target: 35, suffix: "+", label: "Premium Products" },
  { target: 100, suffix: "%", label: "Farm-Direct Sourcing" },
];

function StatCounter({ target, suffix, label, delay, started }: { target: number; suffix: string; label: string; delay: number; started: boolean }) {
  const count = useCountUp(target, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col"
    >
      <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-sm text-white/55 font-medium mt-0.5">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: false, amount: 0.5 });

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
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-1/3 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        />
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
              Premium Agro Processing Since 2023
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

          {/* Trust badges — inline below headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { icon: Sprout, text: "Farm-Direct Sourcing" },
              { icon: Globe, text: "Exporting to Dubai" },
              { icon: Leaf, text: "35+ Premium Products" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ willChange: "transform" }}
                className="relative flex items-center gap-2 cursor-default overflow-hidden
                  bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2
                  text-white text-sm font-semibold
                  hover:bg-white/20 hover:border-yellow-300/60 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)]
                  transition-[background-color,border-color,box-shadow] duration-150 group"
              >
                {/* Animated shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 ease-in-out
                  bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                {/* Icon with pulse ring */}
                <span className="relative flex items-center justify-center">
                  <span className="absolute w-5 h-5 rounded-full bg-yellow-300/20 animate-ping opacity-60" />
                  <Icon className="relative w-4 h-4 text-yellow-300 shrink-0" />
                </span>
                {text}
              </motion.div>
            ))}
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
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
          <div ref={statsRef} className="flex flex-wrap gap-8 sm:gap-12">
            {heroStats.map(({ target, suffix, label }, i) => (
              <StatCounter key={label} target={target} suffix={suffix} label={label} delay={0.5 + i * 0.1} started={isInView} />
            ))}
          </div>
        </div>

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
