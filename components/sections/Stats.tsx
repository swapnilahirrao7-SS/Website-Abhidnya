"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Globe, Package, Award, Leaf } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: 35,     suffix: "+",      label: "Premium Products",       sublabel: "Across categories",     icon: Package    },
  { value: 120000, suffix: " sq.ft.", label: "Processing Facility",    sublabel: "Fully automated unit",  icon: Award      },
  { value: 99,     suffix: ".5%",    label: "Purity Guarantee",        sublabel: "Across all product lines", icon: Users  },
  { value: 100,    suffix: "%",      label: "Farm-Direct Sourcing",    sublabel: "Zero middlemen",        icon: Leaf       },
  { value: 15000,  suffix: " sq.ft.", label: "New Storage Added",      sublabel: "2026 expansion",        icon: TrendingUp },
  { value: 3,      suffix: " Yrs",   label: "Years of Excellence",     sublabel: "& growing since 2023",  icon: Globe      },
];

function AnimatedNumber({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) { setCount(0); return; }
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="quality"
      className="relative section-pad overflow-hidden"
      aria-labelledby="stats-heading"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80"
          alt="Wheat fields background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/92 via-primary/88 to-forest/95" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl z-0" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase
            text-accent-300 bg-accent/15 border border-accent/25 rounded-full px-3 py-1 mb-4">
            Our Impact
          </span>
          <h2
            id="stats-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Numbers That Tell{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-accent-400 to-amber-300 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Built on integrity and powered by precision — our rapid growth story in numbers,
            from a single vision to a fully automated agro powerhouse.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 lg:p-8
                  hover:bg-white/12 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-300" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="font-display text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    start={isInView}
                  />
                </div>
                <div className="font-semibold text-white/90 text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-white/45">{stat.sublabel}</div>

                {/* Subtle gradient bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent
                  rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
