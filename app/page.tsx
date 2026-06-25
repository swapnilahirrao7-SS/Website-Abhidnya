import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import ProductShowcase from "@/components/sections/ProductShowcase";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

function WaveDivider({ flip = false, topColor = "#ffffff", bottomColor = "#f8f4ef" }: { flip?: boolean; topColor?: string; bottomColor?: string }) {
  return (
    <div className="relative -my-px overflow-hidden leading-none" style={{ height: 60 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="60" fill={topColor} />
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider topColor="#0d2818" bottomColor="#ffffff" />
      <ValueProps />
      <WaveDivider topColor="#ffffff" bottomColor="#f8f4ef" />
      <ProductShowcase />
      <WaveDivider topColor="#f8f4ef" bottomColor="#ffffff" />
      <About />
      <WaveDivider topColor="#ffffff" bottomColor="#f8f4ef" />
      <Stats />
      <WaveDivider topColor="#f8f4ef" bottomColor="#ffffff" />
      <Testimonials />
      <WaveDivider topColor="#ffffff" bottomColor="#f8f4ef" />
      <Contact />
    </>
  );
}
