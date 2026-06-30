import type { Metadata } from "next";
import Link from "next/link";
import TrackableCTA from "../../components/TrackableCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Productized Website Services",
  description:
    "Productized website services with fixed-scope deliverables including compliance audits, accessibility reports, cookie inventory reports, and implementation guides.",
  keywords: [
    "productized website services",
    "website compliance audit",
    "accessibility report service",
    "cookie inventory report",
    "privacy implementation checklist",
  ],
  alternates: {
    canonical: "/services/productized-website-services",
  },
};

export default function ProductizedServicesPage() {
  const faqs = [
    {
      question: "How quickly can productized services be delivered?",
      answer:
        "Most fixed-scope services start quickly once inputs are received. Timelines are typically defined at kickoff based on package complexity.",
    },
    {
      question:
        "Can productized audits transition into implementation support?",
      answer:
        "Yes. Many teams start with an audit and then continue with remediation or monthly support based on priorities.",
    },
    {
      question: "What do we receive at the end of a package?",
      answer:
        "Deliverables usually include findings, prioritized actions, implementation notes, and handoff-ready documentation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Productized Website Services",
        item: `${siteUrl}/services/productized-website-services`,
      },
    ],
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-5 py-12 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          <li>
            <a
              href="/services"
              className="transition-colors hover:text-slate-900"
            >
              Services
            </a>
          </li>
          <li>/</li>
          <li className="font-semibold text-slate-900">
            Productized Website Services
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Productized Website Services
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Fixed-scope services with clear deliverables and timelines
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Book structured audits and implementation packages designed to produce
          useful outputs quickly without long discovery cycles.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Available deliverables
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Website privacy compliance audits</li>
            <li>Accessibility reports with prioritized fixes</li>
            <li>Cookie inventory reports and tag documentation</li>
            <li>Privacy implementation checklists</li>
            <li>Templates and implementation guides for teams</li>
            <li>Fixed-scope remediation packages</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">Best for</h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>
              Teams that need a clear scope before committing to retainers
            </li>
            <li>Organizations that need standardized compliance artifacts</li>
            <li>Marketing and web teams with short implementation windows</li>
            <li>
              Leaders who want repeatable deliverables for internal rollout
            </li>
          </ul>
          <TrackableCTA
            href="/#contact"
            eventName="consultation_cta_clicked"
            eventProperties={{ service: "productized-website-services" }}
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Request a productized service package
          </TrackableCTA>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Packages
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Productized package options
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Fixed-scope services are designed for fast decisions and clear
          outcomes. Typical ranges shown for planning.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Single Audit</p>
            <p className="display-font mt-2 text-3xl text-slate-950">$600+</p>
            <p className="mt-2 text-sm text-slate-700">
              One focused audit with prioritized recommendations.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Audit + Guide
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">$1,200+</p>
            <p className="mt-2 text-sm text-slate-700">
              Adds implementation guide and team-ready documentation.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Bundle Package
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">$2,500+</p>
            <p className="mt-2 text-sm text-slate-700">
              Multiple audit deliverables with coordinated handoff support.
            </p>
          </article>
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Productized service FAQs
        </h2>
        <div className="mt-5 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
