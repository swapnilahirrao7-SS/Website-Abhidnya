import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Outlets from "@/components/sections/Outlets";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import WaveDivider from "@/components/WaveDivider";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider topColor="#0d2818" bottomColor="#ffffff" />
      <ValueProps />
      <WaveDivider topColor="#ffffff" bottomColor="#f8f4ef" />
      <ProductShowcase />
      <WaveDivider topColor="#f8f4ef" bottomColor="#ffffff" />
      <Outlets />
      <WaveDivider topColor="#ffffff" bottomColor="#f8f4ef" />
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
