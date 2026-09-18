"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Store,
  Handshake,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import { navigateToInquiry } from "@/lib/inquiryNavigation";

interface OutletSlide {
  src: string;
  alt: string;
  /** Anchor when using cover fit — storefront shots use top so signage stays visible */
  objectPosition?: "center" | "top";
}

interface Outlet {
  id: string;
  name: string;
  location: string;
  tagline: string;
  /** cover fills the carousel edge-to-edge; contain shows full image with possible letterboxing */
  carouselFit?: "cover" | "contain";
  slides: OutletSlide[];
}

const outlets: Outlet[] = [
  {
    id: "shop-1",
    name: "Shop 1",
    location: "Khutwad Nagar, Nashik",
    tagline: "Wholesale & retail — all types of grains and pulses",
    carouselFit: "cover",
    slides: [
      {
        src: "/outlets/shop-1/shop-1-1.webp",
        alt: "Shop 1 storefront at Khutwad Nagar, Nashik",
        objectPosition: "top",
      },
      { src: "/outlets/shop-1/shop-1-2.webp", alt: "Shop 1 interior — packaged grains on shelves", objectPosition: "center" },
      { src: "/outlets/shop-1/shop-1-3.webp", alt: "Shop 1 interior — bulk bins and product display", objectPosition: "center" },
      { src: "/outlets/shop-1/shop-1-4.webp", alt: "Shop 1 interior — wide aisle with grains and pulses", objectPosition: "center" },
    ],
  },
  {
    id: "shop-2",
    name: "Shop 2",
    location: "Nampur Road, Satana",
    tagline: "Wholesale & retail — premium farm-direct grains and dal",
    slides: [
      {
        src: "/outlets/shop-2/shop-2-1.webp",
        alt: "Shop 2 storefront at Nampur Road, Satana",
        objectPosition: "top",
      },
      { src: "/outlets/shop-2/shop-2-2.webp", alt: "Shop 2 interior — branded product shelves" },
      { src: "/outlets/shop-2/shop-2-3.webp", alt: "Shop 2 interior — bulk bins and retail counter" },
    ],
  },
];

function carouselImageClass(fit: Outlet["carouselFit"]) {
  return fit === "cover" ? "object-cover" : "object-contain";
}

function ImageLightbox({
  outlet,
  index,
  onClose,
  onNavigate,
}: {
  outlet: Outlet;
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const slide = outlet.slides[index];
  const total = outlet.slides.length;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(index - 1);
      if (e.key === "ArrowRight") onNavigate(index + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${outlet.name} photo ${index + 1} of ${total}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close full size view"
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 text-white
          flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index - 1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
              bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(index + 1);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full
              bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div
        className="relative w-full max-w-6xl h-[80vh] sm:h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              unoptimized
              className="object-contain"
              style={{ objectPosition: slide.objectPosition ?? "center" }}
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center px-4">
        {outlet.name} · {index + 1} / {total}
      </p>
    </motion.div>
  );
}

function OutletCarousel({ outlet }: { outlet: Outlet }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = outlet.slides.length;
  const currentSlide = outlet.slides[index];
  const carouselFit = outlet.carouselFit ?? "contain";

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (lightboxOpen) return;

    const timer = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(timer);
  }, [index, goTo, lightboxOpen]);

  return (
    <>
      <div className="relative group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${outlet.id}-${index}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                unoptimized
                className={carouselImageClass(carouselFit)}
                style={{ objectPosition: currentSlide.objectPosition ?? "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`View ${outlet.name} photo full size`}
            className="absolute inset-0 z-10 cursor-zoom-in"
          />

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full
              bg-black/45 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5
              opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Full size
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index - 1);
            }}
            aria-label={`Previous ${outlet.name} photo`}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
              bg-white/90 text-primary shadow-md flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index + 1);
            }}
            aria-label={`Next ${outlet.name} photo`}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full
              bg-white/90 text-primary shadow-md flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {outlet.slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-gray-400">
          Tap or click image to view full size
        </p>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            outlet={outlet}
            index={index}
            onClose={() => setLightboxOpen(false)}
            onNavigate={goTo}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Outlets() {
  const handleFranchiseClick = () => {
    navigateToInquiry("franchise");
  };

  return (
    <section
      id="outlets"
      className="section-pad bg-white overflow-hidden"
      aria-labelledby="outlets-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="badge-green mb-4">Our Outlets</span>
          <h2
            id="outlets-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Visit Our{" "}
            <span className="bg-gradient-to-r from-primary via-forest-mid to-primary bg-clip-text text-transparent">
              Retail Stores
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Two thriving outlets bringing Abhidnya&apos;s farm-direct purity closer to
            communities across Maharashtra — same quality, same trust, right in your neighbourhood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {outlets.map((outlet, i) => (
            <motion.article
              key={outlet.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex flex-col bg-cream border border-gray-100 rounded-3xl p-5 sm:p-6
                shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <OutletCarousel outlet={outlet} />

              <div className="mt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">
                    {outlet.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    {outlet.location}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {outlet.tagline}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-forest-mid to-forest
            p-8 sm:p-10 text-center text-white"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #fcd34d 0%, transparent 50%), radial-gradient(circle at 80% 20%, #86efac 0%, transparent 40%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20
              rounded-full px-4 py-1.5 text-sm font-medium mb-4"
            >
              <Handshake className="w-4 h-4 text-accent-300" />
              Franchise Opportunity
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Bring Abhidnya Agro to Your City
            </h3>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
              Partner with a trusted brand backed by a fully automated processing unit,
              35+ premium products, and farm-direct sourcing. Join our growing retail network.
            </p>
            <button
              type="button"
              onClick={handleFranchiseClick}
              className="btn-outline text-base px-8 py-3.5"
            >
              Request Franchise
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
