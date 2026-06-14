import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import ProductShowcase from "@/components/sections/ProductShowcase";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductShowcase />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
