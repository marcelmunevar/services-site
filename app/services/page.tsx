import type { Metadata } from "next";
import Link from "next/link";
import TrackableCTA from "../components/TrackableCTA";
import {
  buildServicesBreadcrumbSchema,
  getServicesIndexCards,
} from "../../lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional website services for privacy compliance, website care plans, enterprise consulting, and compliance audits.",
  alternates: {
    canonical: "/services",
  },
};

const services = getServicesIndexCards();

export default function ServicesIndexPage() {
  const breadcrumbSchema = buildServicesBreadcrumbSchema();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-5 py-12 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-slate-900">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-slate-900">Services</li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Services
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Technical website services built for growth and compliance
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Choose the engagement model that matches your goals, from recurring
          support to enterprise consulting and fixed-scope implementation
          audits.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.href}
            className={`reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)] ${index % 2 === 1 ? "delay-1" : ""}`}
          >
            <h2 className="text-2xl font-semibold text-slate-950">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {service.description}
            </p>
            <TrackableCTA
              href={service.href}
              eventName="service_card_clicked"
              eventProperties={{ service: service.title }}
              className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              View service details
            </TrackableCTA>
          </article>
        ))}
      </section>
    </main>
  );
}
