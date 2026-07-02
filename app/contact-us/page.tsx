import { Suspense } from "react";
import type { Metadata } from "next";
import TrackableCTA from "../components/TrackableCTA";
import ContactStatus from "../components/ContactStatus";

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

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
        <h2 className="text-xl font-semibold text-slate-950">Send a Message</h2>
        <p className="mt-2 text-slate-700">
          Fill out the form below and we will get back to you shortly.
        </p>

        <Suspense>
          <ContactStatus />
        </Suspense>

        <form
          className="mt-4 flex flex-col gap-4"
          action="/api/contact"
          method="post"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-800"
            >
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="company"
              className="text-sm font-semibold text-slate-800"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="website"
              className="text-sm font-semibold text-slate-800"
            >
              Website URL
            </label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-800"
            >
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="service"
              className="text-sm font-semibold text-slate-800"
            >
              Service Interest
            </label>
            <input
              id="service"
              name="service"
              type="text"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-800"
            >
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
