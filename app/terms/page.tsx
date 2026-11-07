import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Scale } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Use | Abhidnya Agro Industries",
  description:
    "Terms that apply to the Abhidnya Agro mobile app and to orders placed through it.",
  alternates: { canonical: "https://abhidnyaagro.in/terms" },
};

const toc = [
  { id: "who-you-buy-from", label: "Who you are buying from" },
  { id: "account", label: "Account" },
  { id: "orders", label: "Orders" },
  { id: "payment", label: "Payment" },
  { id: "delivery", label: "Delivery and store pickup" },
  { id: "cancellation", label: "Cancellation and refunds" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "liability", label: "Liability" },
  { id: "changes", label: "Changes" },
  { id: "law-and-contact", label: "Law and contact" },
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

export default function TermsPage() {
  return (
    <div className="bg-cream pb-20">
      <header className="relative overflow-hidden bg-forest pt-20 text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="section-container relative py-14 sm:py-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            <Scale className="h-3.5 w-3.5" aria-hidden />
            Legal
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Abhidnya Agro Industries sets out the terms for the mobile app and for orders placed through it.
          </p>
          <p className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
            Effective date: <span className="ml-1 font-semibold text-white">7 November 2026</span>
          </p>
        </div>
      </header>

      <div className="section-container mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Terms of use sections" className="rounded-3xl border border-primary/10 bg-white p-5 shadow-card">
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
            These terms apply to the Abhidnya Agro mobile app and to orders placed through it. By
            creating an account or placing an order, you agree to these terms and to the{" "}
            <Link href="/privacy-policy" className="font-semibold text-primary underline decoration-accent/40 underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>

          <Section id="who-you-buy-from" number="1" title="Who you are buying from">
            <p>Abhidnya Agro Industries</p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>
                  A-403, 4th Floor, Omkar Residency, Above Formula One Zone Tyre Shop, Near Fog City
                  Hotel, Gangapur Road, Nashik – 422013, Maharashtra, India
                </span>
              </li>
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
            <p>
              The app sells physical grocery goods (grains, pulses, rice, masale, and related products)
              supplied by Abhidnya Agro. It is not a third-party marketplace.
            </p>
          </Section>

          <Section id="account" number="2" title="Account">
            <p>
              You sign in with your Indian mobile number and a one-time password. You must provide a
              number you control. You are responsible for orders placed from your account.
            </p>
            <p>
              You can delete your account in the app under <strong className="text-gray-800">Settings → Delete account</strong>.
              Deleting the account does not erase invoices we must keep for tax or legal reasons. Order
              records needed for those reasons are kept as described in the{" "}
              <Link href="/privacy-policy" className="font-semibold text-primary underline decoration-accent/40 underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="orders" number="3" title="Orders">
            <ul className="list-disc space-y-2 pl-5">
              <li>The minimum order value is <strong className="text-gray-800">₹499</strong>.</li>
              <li>
                Product names, pack sizes, prices, and availability are shown in the app at the time you
                order. Prices are in Indian rupees and include applicable taxes as displayed at checkout.
              </li>
              <li>
                An order is accepted when the app confirms it. We may refuse or cancel an order if an
                item is unavailable, the PIN code is not serviceable, payment fails, or we suspect misuse.
              </li>
              <li>You should check the order summary before you pay or place a cash-on-delivery order.</li>
            </ul>
          </Section>

          <Section id="payment" number="4" title="Payment">
            <p>You can pay by:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-gray-800">Cash on delivery</strong>, where the app shows it for your PIN code.</li>
              <li><strong className="text-gray-800">UPI or card</strong> through Razorpay.</li>
            </ul>
            <p>
              Prepaid payments are processed by Razorpay, not by Google Play or Apple. We do not store
              your card number or UPI PIN. A prepaid order is confirmed only after Razorpay reports a
              successful payment.
            </p>
          </Section>

          <Section id="delivery" number="5" title="Delivery and store pickup">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-gray-800">Home delivery</strong> is available only for PIN codes
                shown as serviceable in the app. Delivery is free on orders that meet the ₹499 minimum.
              </li>
              <li>
                <strong className="text-gray-800">Store pickup</strong> is offered only when the app shows
                you are near the Nashik shop (Khutwad Nagar) or the Satana shop (Nampur Road). Location is
                used only for that check. You can refuse location permission and continue with home
                delivery where your PIN code is serviceable.
              </li>
              <li>
                Delivery time shown in the app is an estimate. It can change because of stock, weather, or
                local conditions.
              </li>
              <li>
                Someone at the delivery address should be available to receive the order. For cash on
                delivery, please keep the exact amount ready.
              </li>
            </ul>
          </Section>

          <Section id="cancellation" number="6" title="Cancellation and refunds">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                You can cancel an order in the app <strong className="text-gray-800">before it is marked Packed</strong>.
              </li>
              <li>
                After the order is Packed, out for delivery, ready for pickup, or delivered, cancellation
                in the app is closed. Call or email us if there is a problem with the goods.
              </li>
              <li>
                If a prepaid order is cancelled before it is packed, or if we cancel it because we cannot
                fulfil it, we refund the amount paid to the original payment method. Refunds are initiated
                by our team promptly and typically reflect in your account within{" "}
                <strong className="text-gray-800">5 to 7 business days</strong>, depending on Razorpay and
                your bank’s timelines.
              </li>
              <li>Cash-on-delivery orders that are cancelled before delivery have nothing to refund.</li>
              <li>
                Grocery items are perishable. If goods arrive damaged, short, or not as ordered, contact us{" "}
                <strong className="text-gray-800">within 24 hours of delivery</strong> on{" "}
                <a className="font-medium text-primary" href="tel:+919145226001">9145226001</a>
                {" / "}
                <a className="font-medium text-primary" href="tel:+919145446001">9145446001</a>
                {" or "}
                <a className="font-medium text-primary" href="mailto:admin@abhidnyaagro.in">admin@abhidnyaagro.in</a>
                {" "}with the order number. We will replace the item or refund the affected amount where the
                claim is valid.
              </li>
            </ul>
          </Section>

          <Section id="acceptable-use" number="7" title="Acceptable use">
            <p>
              Do not misuse the app, attempt to access another customer’s orders, or interfere with the
              service. We may suspend an account that is used for fraud or abuse.
            </p>
          </Section>

          <Section id="liability" number="8" title="Liability">
            <p>
              The app and product information are provided for retail purchase of groceries. To the extent
              allowed by Indian law, we are not liable for indirect losses. This does not limit any rights
              you have under the Consumer Protection Act, 2019.
            </p>
          </Section>

          <Section id="changes" number="9" title="Changes">
            <p>
              We may update these terms. The effective date at the top will change. Continued use of the
              app after an update means you accept the revised terms. The current version will always be
              available at{" "}
              <Link href="/terms" className="font-semibold text-primary underline decoration-accent/40 underline-offset-2">
                https://abhidnyaagro.in/terms
              </Link>
              .
            </p>
          </Section>

          <section id="law-and-contact" className="scroll-mt-28 overflow-hidden rounded-3xl bg-forest text-white shadow-card">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">10</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold">Law and contact</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  These terms are governed by the laws of India. Courts at Nashik, Maharashtra have
                  jurisdiction, subject to any rights you have to approach a consumer forum.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  For questions about an order, these terms, or to reach our Grievance Officer, please
                  contact:
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="font-display text-lg font-bold">Abhidnya Agro Industries</p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    A-403, 4th Floor, Omkar Residency, Gangapur Road, Nashik – 422013
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
