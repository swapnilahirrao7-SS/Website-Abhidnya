"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  CheckCircle,
  Send,
  Leaf,
} from "lucide-react";
import { useState } from "react";

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

const certifications = [
  { label: "FSSAI Certified", icon: Award },
  { label: "ISO 22000", icon: CheckCircle },
  { label: "Organic India", icon: Leaf },
  { label: "AGMARK", icon: Award },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest text-white" aria-label="Site footer">
      {/* Newsletter bar */}
      <div className="bg-primary border-b border-white/10">
        <div className="section-container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Stay Updated with Harvest Insights
              </h3>
              <p className="text-sm text-white/70 mt-1">
                Get market prices, new product launches, and agro news directly.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-300 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed! Thank you.</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 md:w-72 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5
                      text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2
                      focus:ring-accent/50 focus:border-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-accent hover:bg-accent-700 text-white
                      font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

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
              Cultivating trust since 2001. We bridge premium farmlands with your table —
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
                { label: "Facebook", href: "#", svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                { label: "X (Twitter)", href: "#", svg: <><path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" /></> },
                { label: "LinkedIn", href: "#", svg: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
                { label: "Instagram", href: "#", svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
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

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
            Certifications & Accreditations
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {certifications.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/8 border border-white/15
                  rounded-full px-4 py-1.5 text-xs font-medium text-white/70"
              >
                <Icon className="w-3.5 h-3.5 text-accent" />
                {label}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
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
