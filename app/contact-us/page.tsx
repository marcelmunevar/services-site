import type { Metadata } from "next";
import TrackableCTA from "../components/TrackableCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Web Growth Studio for website privacy, care plans, consulting, and productized service inquiries.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-5 py-12 sm:px-8 lg:px-10">
      <h1 className="display-font text-4xl text-slate-950 sm:text-5xl">
        Contact Us
      </h1>
      <p className="max-w-2xl text-slate-700">
        Share your website goals and current setup. We will recommend the right
        engagement model and next steps.
      </p>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
        <h2 className="text-xl font-semibold text-slate-950">Email</h2>
        <p className="mt-2 text-slate-700">
          Send inquiries to
          <TrackableCTA
            className="ml-1 font-semibold text-slate-900 underline"
            href="mailto:hello@example.com"
            eventName="contact_email_clicked"
            eventProperties={{ source: "contact_us_page" }}
          >
            hello@example.com
          </TrackableCTA>
          .
        </p>
      </section>
    </main>
  );
}
