import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abhidnya Agro Industries | Premium Pulses, Grains & Agricultural Products",
  description:
    "Abhidnya Agro Industries delivers farm-to-fork traceability on premium pulses, grains, spices, and oilseeds. Certified quality, global standards, sustainable sourcing.",
  keywords: [
    "agro industries",
    "premium pulses",
    "lentils supplier",
    "chickpeas",
    "organic grains",
    "spices export",
    "agricultural products India",
  ],
  openGraph: {
    title: "Abhidnya Agro Industries",
    description: "Sustaining generations with premium agricultural yields.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
