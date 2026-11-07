import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | Abhidnya Agro Industries",
  description:
    "How Abhidnya Agro Industries collects and uses personal information in the Abhidnya Agro mobile app and on abhidnyaagro.in.",
  alternates: { canonical: "https://abhidnyaagro.in/privacy-policy" },
};

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-this-covers", label: "What this policy covers" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "who-we-share", label: "Who we share it with" },
  { id: "how-long", label: "How long we keep it" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your choices and rights" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes" },
  { id: "grievance", label: "Contact and Grievance Officer" },
];

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 rounded-3xl border border-primary/10 bg-white p-6 shadow-card sm:p-8">
      <div className="mb-4 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
          {number}
        </span>
        <h2 className="pt-1.5 font-display text-2xl font-extrabold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-4 pl-0 text-[15px] leading-relaxed text-gray-600 sm:pl-14">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream pb-20">
      <header className="relative overflow-hidden bg-forest pt-20 text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="section-container relative py-14 sm:py-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Legal
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Abhidnya Agro Industries explains how personal information is collected and used in the
            mobile app and on this website.
          </p>
          <p className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
            Effective date: <span className="ml-1 font-semibold text-white">7 November 2026</span>
          </p>
        </div>
      </header>

      <div className="section-container mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Privacy policy sections" className="rounded-3xl border border-primary/10 bg-white p-5 shadow-card">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary/60">On this page</p>
            <ol className="space-y-2">
              {toc.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    <span className="w-5 shrink-0 font-semibold text-accent-700">{index + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="space-y-5">
          <p className="rounded-3xl border border-accent/20 bg-accent/10 px-6 py-5 text-[15px] leading-relaxed text-gray-700">
            This policy explains how Abhidnya Agro Industries (“we”, “us”, “Abhidnya Agro”) collects
            and uses personal information when you use the Abhidnya Agro mobile app (for e-commerce
            and ordering) and our informational website at{" "}
            <a className="font-semibold text-primary underline decoration-accent/40 underline-offset-2" href="https://abhidnyaagro.in/">
              https://abhidnyaagro.in/
            </a>{" "}
            (for product listings).
          </p>

          <Section id="who-we-are" number="1" title="Who we are">
            <p>Abhidnya Agro Industries</p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>
                  Registered office: A-403, 4th Floor, Omkar Residency, Above Formula One Zone Tyre Shop,
                  Near Fog City Hotel, Gangapur Road, Nashik – 422013, Maharashtra, India
                </span>
              </li>
              <li>Shops: Khutwad Nagar, Nashik; Nampur Road, Satana</li>
              <li>Processing unit: 689/6 Dhadne – 424306, Taluka Sakri, District Dhule, Maharashtra</li>
              <li>
                Phone:{" "}
                <a className="font-medium text-primary" href="tel:+919145226001">9145226001</a>
                {" / "}
                <a className="font-medium text-primary" href="tel:+919145446001">9145446001</a>
              </li>
              <li>
                Email:{" "}
                <a className="font-medium text-primary" href="mailto:admin@abhidnyaagro.in">
                  admin@abhidnyaagro.in
                </a>
              </li>
              <li>
                Website:{" "}
                <a className="font-medium text-primary" href="https://abhidnyaagro.in/">
                  https://abhidnyaagro.in/
                </a>
              </li>
            </ul>
          </Section>

          <Section id="what-this-covers" number="2" title="What this policy covers">
            <p>
              It covers the Abhidnya Agro Android (and iOS, when offered) app used to browse grains,
              pulses, masale, and other grocery products, place home-delivery or store-pickup orders,
              and receive order updates. It also covers our informational website, which lists our
              products but does not process orders. You can browse the app as a guest. Signing in with
              your phone links orders, wishlist, and checkout to your account.
            </p>
          </Section>

          <Section id="information-we-collect" number="3" title="Information we collect">
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Account</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Mobile number, used to send a one-time password (OTP) and to identify your account.</li>
                <li>Name, if you provide it.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Orders and addresses</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Delivery name, phone, address, city, and PIN code.</li>
                <li>Whether the order is home delivery or store pickup.</li>
                <li>Products, pack sizes, quantities, prices, order status, and invoice details.</li>
                <li>Reviews and ratings you submit.</li>
                <li>Wishlist items saved to your account.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Location</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Approximate or precise device location, only if you allow it, to check whether store
                  pickup is available near our Nashik or Satana shops.
                </li>
                <li>You can refuse location permission and continue with home delivery where your PIN code is serviceable.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Payments</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>Order amount and payment choice (cash on delivery, or prepaid via UPI/card through Razorpay).</li>
                <li>We do not store your full card number, UPI PIN, or bank password. Razorpay processes prepaid payments and returns a payment status to us.</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Device and notifications</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>A push-notification token and platform (Android or iOS), if you allow notifications, so we can send order-status alerts.</li>
                <li>Basic technical data needed to run the app and API, such as app version, request logs, and anonymous crash diagnostics to improve app stability.</li>
              </ul>
            </div>
            <p>We do not ask you to create a password. Login is by phone OTP.</p>
          </Section>

          <Section id="how-we-use" number="4" title="How we use information">
            <p>We use it to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and secure your account and verify your phone.</li>
              <li>Show products, prices, and serviceable PIN codes.</li>
              <li>Take orders, offer store pickup when you are near a shop, and deliver or ready items for pickup.</li>
              <li>Send order updates via in-app notifications and push alerts, and (when enabled in future updates) via SMS and WhatsApp.</li>
              <li>Process payments and issue invoices.</li>
              <li>Handle support, cancellations, and refunds where applicable.</li>
              <li>Keep the service reliable and prevent misuse (for example, OTP request limits).</li>
            </ul>
            <p>We use your information strictly to sell and deliver groceries you order. We do not sell your personal information.</p>
          </Section>

          <Section id="who-we-share" number="5" title="Who we share it with">
            <p>We share only what is needed to run the shop:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong className="text-gray-800">Cloudflare:</strong> Hosts our API, database, and product images.</li>
              <li><strong className="text-gray-800">Razorpay:</strong> Processes prepaid UPI/card payments.</li>
              <li><strong className="text-gray-800">Firebase (Google):</strong> Delivers push notifications and may process anonymous crash logs.</li>
              <li><strong className="text-gray-800">MSG91:</strong> Processes OTP SMS and WhatsApp order updates (where this feature is active).</li>
              <li><strong className="text-gray-800">Delivery and shop staff:</strong> Fulfil the order (name, phone, address, and items).</li>
            </ul>
            <p>
              These providers act on our instructions or as independent payment/telecom providers under
              their own terms. We may also disclose information if required by law, or to protect our
              customers, staff, or rights.
            </p>
          </Section>

          <Section id="how-long" number="6" title="How long we keep it">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong className="text-gray-800">Account and order records:</strong> For as long as your account is active and for a reasonable period afterward for invoices, tax, and dispute handling.</li>
              <li><strong className="text-gray-800">OTP codes:</strong> Only for the short verification window.</li>
              <li><strong className="text-gray-800">Push tokens:</strong> Until you sign out, uninstall, or we replace the token.</li>
              <li><strong className="text-gray-800">Location:</strong> Used at the time of the pickup check; we do not build an ongoing location history for advertising.</li>
            </ul>
          </Section>

          <Section id="security" number="7" title="Security">
            <p>
              Orders and account data are sent over encrypted connections to our API. Payment card and
              UPI credentials are handled by Razorpay, not stored in the app. No method of storage or
              transmission is completely secure.
            </p>
          </Section>

          <Section id="your-rights" number="8" title="Your choices and rights">
            <p>You have control over your personal data. You can:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Browse without signing in.</li>
              <li><strong className="text-gray-800">Manage permissions:</strong> Deny location or notification permission in your phone settings.</li>
              <li><strong className="text-gray-800">Update details:</strong> Ask us to correct your name or delivery details.</li>
              <li><strong className="text-gray-800">Withdraw consent:</strong> You may withdraw your consent for data processing at any time by deleting your account and stopping use of the app.</li>
            </ul>
            <div className="rounded-2xl bg-cream px-5 py-4">
              <h3 className="mb-2 font-display text-lg font-bold text-gray-900">Request data or account deletion</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-gray-800">In-app:</strong> Request account deletion from the Profile/Settings menu within the Abhidnya Agro app.</li>
                <li>
                  <strong className="text-gray-800">On the web:</strong> Request account and data deletion without reinstalling the app at{" "}
                  <Link href="/data-deletion" className="font-semibold text-primary underline decoration-accent/40 underline-offset-2">
                    https://abhidnyaagro.in/data-deletion
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-gray-800">Direct contact:</strong> Ask for a copy of your data or to delete your account by emailing{" "}
                  <a className="font-medium text-primary" href="mailto:admin@abhidnyaagro.in">admin@abhidnyaagro.in</a>
                  {" "}or calling 9145226001 / 9145446001.
                </li>
              </ul>
            </div>
            <p>
              We may retain certain order invoices and records where local tax or legal rules require it.
              Deleting the app from your device does not automatically delete your account on our servers.
            </p>
          </Section>

          <Section id="children" number="9" title="Children">
            <p>
              The app is for customers who can enter a contract to buy goods. It is not directed at
              children under 18. We do not knowingly collect information from children.
            </p>
          </Section>

          <Section id="changes" number="10" title="Changes">
            <p>
              We may update this policy when the app or the law changes. The effective date at the top
              will change. Continued use of the app after an update means you accept the revised policy.
              For a material change, we will provide a notice in the app or on{" "}
              <a className="font-medium text-primary" href="https://abhidnyaagro.in/">https://abhidnyaagro.in/</a>{" "}
              where practical.
            </p>
          </Section>

          <section id="grievance" className="scroll-mt-28 overflow-hidden rounded-3xl bg-forest text-white shadow-card">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">11</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold">Contact and Grievance Officer</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  In accordance with the Information Technology Act and applicable data protection laws
                  in India, the name and contact details of the Grievance Officer are provided below.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  We aim to respond to inquiries within 4 business hours on business days, as stated on
                  our website, and to resolve privacy grievances within a reasonable timeframe.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-display text-lg font-bold">Priyanka Kale</p>
                <p className="text-sm text-accent-300">Grievance Officer</p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    Abhidnya Agro Industries, A-403, 4th Floor, Omkar Residency, Gangapur Road, Nashik – 422013, Maharashtra, India
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <a className="hover:text-white" href="mailto:admin@abhidnyaagro.in">admin@abhidnyaagro.in</a>
                  </li>
                  <li className="flex gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>
                      <a className="hover:text-white" href="tel:+919145226001">9145226001</a>
                      {" / "}
                      <a className="hover:text-white" href="tel:+919145446001">9145446001</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
