"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Certifications", href: "#quality" },
    { label: "Sustainability", href: "#about" },
    { label: "Careers", href: "#contact" },
  ],
  products: [
    { label: "Pulses & Lentils", href: "#products" },
    { label: "Whole Grains", href: "#products" },
    { label: "Specialty Spices", href: "#products" },
    { label: "Oilseeds", href: "#products" },
    { label: "Organic Range", href: "#products" },
  ],
  support: [
    { label: "Bulk Orders", href: "#contact" },
    { label: "B2B Inquiries", href: "#contact" },
    { label: "Export Queries", href: "#contact" },
    { label: "Quality Reports", href: "#contact" },
    { label: "FAQs", href: "#contact" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest text-white" aria-label="Site footer">

      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <Image
                src="/logo.png"
                alt="Abhidnya Agro Industries Logo"
                width={64}
                height={64}
                className="object-contain w-16 h-16"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">Abhidnya Agro</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-accent-400">
                  Industries
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Cultivating trust since 2022. We bridge premium farmlands with your table —
              delivering pure, traceable, and sustainably sourced agricultural products.
            </p>

            {/* Contact Info */}
            <address className="not-italic space-y-3 mb-7">
              <a
                href="mailto:abhidnyaagroindustries6001@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                abhidnyaagroindustries6001@gmail.com
              </a>
              <a
                href="tel:+919145226001"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                9145226001 / 9145446001
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>A-403, 4th Floor, Omkar Residency, Above Formula One Zone Tyre Shop, Near Fog City Hotel, Gangapur Road, Nashik - 422013</span>
              </div>
            </address>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/19q5qmzgs9/",
                  svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/abhidnya.agro.industries?igsh=MTlzdjZsM2pmZGhlbA==",
                  svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                    hover:bg-accent transition-colors text-white/70 hover:text-white"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>{svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(
            [
              { title: "Company", links: footerLinks.company },
              { title: "Products", links: footerLinks.products },
              { title: "Support", links: footerLinks.support },
            ] as const
          ).map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-white/55 hover:text-accent transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Abhidnya Agro Industries Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
