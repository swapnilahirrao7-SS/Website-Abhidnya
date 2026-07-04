"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
  Building2,
  User,
  MessageSquare,
  Package,
  Handshake,
} from "lucide-react";
import {
  clearInquiryNavigation,
  INQUIRY_NAV_EVENT,
  readInquiryNavigation,
  type InquiryNavigateDetail,
  type InquiryType,
} from "@/lib/inquiryNavigation";

const productGroups: { label: string; options: string[] }[] = [
  {
    label: "── Grains ──",
    options: [
      "Wheat",
      "Bajari (Pearl Millet)",
      "Jawari (Sorghum)",
      "Indrayani Rice",
      "Indrayani Pimpalner Rice",
      "Wada Kolam Rice",
      "Surti Kolam Rice",
      "Flying Horse Basmati",
      "Indian Basmati Rice",
      "Brown Sella Basmati",
      "White Sella Basmati",
      "Zafarani Basmati",
      "Nagali (Finger Millet / Ragi)",
    ],
  },
  {
    label: "── Pulses ──",
    options: [
      "Harbhara (Desi Chana)",
      "Kabuli Chana (White Chickpeas)",
      "Moong (Whole Green Gram)",
      "Moongdaal Super",
      "Moongdaal Classic",
      "Moongdaal Premium",
      "Moongdaal Saal",
      "Masoor Daal Classic",
      "Masoor Dal Premium",
      "Moth (Whole Moth Beans)",
      "Moth Daal Classic",
      "Moth Daal Premium",
      "Toor Daal Premium",
      "Toor Daal Super",
      "Toordaal Classic",
      "Udid Daal Black (Whole)",
      "Udiddaal Super",
      "Udiddaal Classic",
      "Udiddaal Premium",
      "Chanadaal Polish",
      "Chana Dal",
      "Chandaal Kori",
    ],
  },
  {
    label: "── Other ──",
    options: ["Custom / Multiple Products"],
  },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("bulk");
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "" &&
    (inquiryType === "franchise" || form.product.trim() !== "");

  useEffect(() => {
    const applyInquiryNavigation = (detail: InquiryNavigateDetail | null) => {
      if (!detail) return;

      setSubmitted(false);

      if (detail.type === "franchise") {
        setInquiryType("franchise");
        setForm((prev) => ({
          ...prev,
          product: "",
          message:
            prev.message.trim() === ""
              ? "I am interested in opening an Abhidnya Agro franchise outlet. Please share details on requirements, investment, and support."
              : prev.message,
        }));
      } else {
        setInquiryType("bulk");
        if (detail.product) {
          setForm((prev) => ({ ...prev, product: detail.product! }));
        }
      }

      clearInquiryNavigation();
    };

    applyInquiryNavigation(readInquiryNavigation());

    const handleInquiryNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<InquiryNavigateDetail>;
      applyInquiryNavigation(customEvent.detail);
    };

    window.addEventListener(INQUIRY_NAV_EVENT, handleInquiryNavigate);
    return () => window.removeEventListener(INQUIRY_NAV_EVENT, handleInquiryNavigate);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          company:   form.company,
          reply_to:  form.email,
          phone:     form.phone || "Not provided",
          product:   inquiryType === "franchise" ? "Franchise Inquiry" : form.product,
          quantity:  form.quantity || "Not specified",
          message:   `[${inquiryType === "franchise" ? "Franchise Request" : "Bulk Inquiry"}]\n${form.message}`,
        },
        publicKey,
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at abhidnyaagroindustries6001@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-cream" aria-labelledby="contact-heading">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="badge-green mb-4">Get In Touch</span>
          <h2
            id="contact-heading"
            className="font-display text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          >
            Bulk Enquiries &{" "}
            <span className="bg-gradient-to-r from-primary to-forest-mid bg-clip-text text-transparent">
              Franchise Requests
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Order premium grains and pulses in bulk, or partner with us to open
            an Abhidnya Agro outlet — our team responds within 4 business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info (left panel) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary rounded-2xl p-7 text-white">
              <h3 className="font-display font-bold text-xl mb-6">Contact Details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Registered Office</div>
                    <div className="text-white/65 text-sm leading-relaxed">
                      Abhidnya Agro Industries
                      <br />
                      A-403, 4th Floor, Omkar Residency,
                      <br />
                      Above Formula One Zone Tyre Shop,
                      <br />
                      Near Fog City Hotel, Gangapur Road,
                      <br />
                      Nashik - 422013
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Phone</div>
                    <a
                      href="tel:+919145226001"
                      className="text-white/65 text-sm hover:text-accent-300 transition-colors"
                    >
                      9145226001 / 9145446001
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Email</div>
                    <a
                      href="mailto:abhidnyaagroindustries6001@gmail.com"
                      className="text-white/65 text-sm hover:text-accent-300 transition-colors"
                    >
                      abhidnyaagroindustries6001@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Unit Info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
              <h4 className="font-display font-bold text-gray-900 text-base mb-4">
                Processing Unit
              </h4>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  689/6 Dhadne - 424306, Tal-Sakri, Dist-Dhule, Maharashtra
                  <br />
                  <span className="text-primary font-medium text-xs mt-1 inline-block">
                    Open Mon–Sat: 9AM – 6PM IST
                  </span>
                </span>
              </div>
            </div>

            {/* Why respond fast */}
            <div className="bg-accent/8 border border-accent/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-accent-700 font-semibold text-sm mb-2">
                <CheckCircle className="w-4 h-4" />
                We respond within 4 business hours
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our team reviews every bulk order and franchise application personally —
                from custom packaging and grades to outlet setup guidance and ongoing support.
              </p>
            </div>
          </motion.div>

          {/* Form (right panel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-card-hover">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-3">
                    {inquiryType === "franchise" ? "Franchise Request Received!" : "Inquiry Received!"}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you for reaching out. Our team will review your{" "}
                    {inquiryType === "franchise" ? "franchise application" : "requirements"} and
                    get back to you within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Inquiry type toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-100 rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setInquiryType("bulk")}
                      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        inquiryType === "bulk"
                          ? "bg-white text-primary shadow-sm ring-1 ring-primary/10"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Package className="w-4 h-4" />
                      Bulk Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("franchise")}
                      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        inquiryType === "franchise"
                          ? "bg-white text-primary shadow-sm ring-1 ring-primary/10"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Handshake className="w-4 h-4" />
                      Franchise Request
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed -mt-1">
                    {inquiryType === "bulk"
                      ? "Tell us about the products, grades, and quantities you need for wholesale or export."
                      : "Share your preferred location and interest — we'll guide you through franchise requirements and support."}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className={inquiryType === "franchise" ? "sm:col-span-2" : ""}>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                            text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                            focus:ring-primary/25 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company — bulk inquiries only */}
                    {inquiryType === "bulk" && (
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Company / Business
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company or trade name"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                              text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                              focus:ring-primary/25 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                            text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                            focus:ring-primary/25 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                            text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                            focus:ring-primary/25 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {inquiryType === "bulk" ? (
                      <>
                        <div>
                          <label htmlFor="product" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Product Interest <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            <select
                              id="product"
                              name="product"
                              required
                              value={form.product}
                              onChange={handleChange}
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                                text-gray-800 appearance-none focus:outline-none focus:ring-2
                                focus:ring-primary/25 focus:border-primary transition-colors"
                            >
                              <option value="">Select a product</option>
                              {productGroups.map((group) => (
                                <optgroup key={group.label} label={group.label}>
                                  {group.options.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                  ))}
                                </optgroup>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Quantity (Metric Tons)
                          </label>
                          <input
                            id="quantity"
                            name="quantity"
                            type="text"
                            value={form.quantity}
                            onChange={handleChange}
                            placeholder="e.g. 5 MT, 1 container"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm
                              text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                              focus:ring-primary/25 focus:border-primary transition-colors"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="quantity" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Preferred City / Location
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              id="quantity"
                              name="quantity"
                              type="text"
                              value={form.quantity}
                              onChange={handleChange}
                              placeholder="e.g. Nashik, Pune, Satana"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                                text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                                focus:ring-primary/25 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Business / Retail Experience
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="e.g. Kirana store, distributor"
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                                text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                                focus:ring-primary/25 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      {inquiryType === "franchise" ? "Tell Us About Your Interest" : "Message / Requirements"}{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          inquiryType === "franchise"
                            ? "Preferred outlet size, investment capacity, timeline, and any questions about franchise support..."
                            : "Tell us about your requirements — grade, packaging, delivery location, certification needs, etc."
                        }
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm
                          text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2
                          focus:ring-primary/25 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !isFormValid}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : inquiryType === "franchise" ? (
                      <>
                        <Handshake className="w-5 h-5" />
                        Submit Franchise Request
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Bulk Inquiry
                      </>
                    )}
                  </button>
                  {!isFormValid && (
                    <p className="text-center text-xs text-gray-400">
                      {inquiryType === "franchise"
                        ? "Please fill in Full Name, Email, and your franchise interest to continue."
                        : "Please fill in Full Name, Email, Product Interest and Requirements to continue."}
                    </p>
                  )}
                  {isFormValid && (
                    <p className="text-center text-xs text-gray-400">
                      Your information is secure and will never be shared. We respond within 4 business hours.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
