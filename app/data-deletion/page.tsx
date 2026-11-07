import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Trash2 } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Delete your account | Abhidnya Agro Industries",
  description:
    "Request deletion of your Abhidnya Agro account and personal data without reinstalling the app.",
  alternates: { canonical: "https://abhidnyaagro.in/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <div className="bg-cream pb-20">
      <header className="bg-forest pt-20 text-white">
        <div className="section-container py-14 sm:py-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            <Trash2 className="h-3.5 w-3.5" aria-hidden />
            Your data
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Delete your account and data
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            You can ask Abhidnya Agro Industries to delete your app account and personal data
            without reinstalling the app.
          </p>
        </div>
      </header>

      <div className="section-container mt-10 max-w-3xl space-y-5">
        <section className="rounded-3xl border border-primary/10 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-gray-900">How to request deletion</h2>
          <ol className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-600">
            <li>
              <strong className="text-gray-900">In the app.</strong> Open Profile or Settings in the
              Abhidnya Agro app and request account deletion.
            </li>
            <li>
              <strong className="text-gray-900">By email.</strong> Write to{" "}
              <a className="font-semibold text-primary" href="mailto:admin@abhidnyaagro.in?subject=Account%20deletion%20request">
                admin@abhidnyaagro.in
              </a>{" "}
              from the email or with the mobile number linked to your account. Use the subject
              “Account deletion request” and include your name and phone number.
            </li>
            <li>
              <strong className="text-gray-900">By phone.</strong> Call{" "}
              <a className="font-semibold text-primary" href="tel:+919145226001">9145226001</a>
              {" or "}
              <a className="font-semibold text-primary" href="tel:+919145446001">9145446001</a>.
            </li>
          </ol>
        </section>

        <section className="rounded-3xl border border-primary/10 bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-gray-900">What we delete and what we keep</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            We delete your account profile, saved addresses, wishlist, and push tokens when the
            request is completed. Order invoices and records may be kept where tax or other law
            requires it. Removing the app from your phone does not delete the account on our servers.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            Read the full{" "}
            <Link href="/privacy-policy" className="font-semibold text-primary underline decoration-accent/40 underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl bg-forest p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-display text-lg font-bold">Need help with a request?</p>
            <p className="mt-1 text-sm text-white/70">We aim to respond within 4 business hours on business days.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a className="inline-flex items-center gap-2 text-accent-300 hover:text-white" href="mailto:admin@abhidnyaagro.in">
              <Mail className="h-4 w-4" aria-hidden /> admin@abhidnyaagro.in
            </a>
            <a className="inline-flex items-center gap-2 text-accent-300 hover:text-white" href="tel:+919145226001">
              <Phone className="h-4 w-4" aria-hidden /> 9145226001
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
