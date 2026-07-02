import type { Metadata } from "next";
import Link from "next/link";
import TrackableCTA from "../../components/TrackableCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Website Compliance Audits & Checklists",
  description:
    "Independent website compliance audits and checklists for teams that want to self-remediate. Covers privacy, security, accessibility, cookie inventory, and includes implementation guides with templates. 2-week turnaround.",
  keywords: [
    "website compliance audit",
    "accessibility conformance audit",
    "cookie and consent inventory report",
    "privacy policy checklist",
    "website compliance checklist",
    "self-remediation audit report",
  ],
  alternates: {
    canonical: "/services/productized-website-services",
  },
};

export default function ProductizedServicesPage() {
  const faqs = [
    {
      question: "How quickly are audits delivered?",
      answer:
        "All audit packages have a 2-week turnaround from the time inputs are received. You'll get a complete findings report, prioritized remediation list, and implementation guide by the end of that window.",
    },
    {
      question: "Can an audit lead into ongoing support?",
      answer:
        "Yes. Many teams start with an audit to understand their current state, then continue with a care plan or consulting engagement based on the findings.",
    },
    {
      question: "What do we receive at the end of an audit?",
      answer:
        "You receive a compliance audit report covering privacy, security, and accessibility; a cookie and consent inventory; a privacy policy and legal checklist; an accessibility conformance audit; and an implementation guide with templates.",
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
        name: "Website Compliance Audits & Checklists",
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
            Website Compliance Audits &amp; Checklists
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Website Compliance Audits &amp; Checklists
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Independent audits and reports for teams that want to self-remediate
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          You get a detailed audit report and implementation roadmap. Your team
          handles the fixes—or use it to scope internal work. 2-week turnaround,
          no ongoing commitment required.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Best for companies with internal dev resources looking for a one-time
          assessment before hiring long-term support or directing internal teams.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            What you receive
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Website compliance audit report (privacy, security, accessibility)</li>
            <li>Detailed findings with remediation priorities</li>
            <li>Cookie and consent inventory report</li>
            <li>Privacy policy and legal checklist</li>
            <li>Accessibility conformance audit</li>
            <li>Implementation guide with templates</li>
            <li>2-week turnaround</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">Best for</h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>
              Companies with internal dev resources that want a one-time assessment before hiring long-term support
            </li>
            <li>
              Teams that need a clear compliance baseline before directing internal work
            </li>
            <li>Organizations that need standardized compliance artifacts for internal review</li>
            <li>
              Leaders who want a credible third-party audit without an ongoing engagement
            </li>
          </ul>
          <TrackableCTA
            href="/#contact"
            eventName="consultation_cta_clicked"
            eventProperties={{ service: "productized-website-services" }}
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Request an audit package
          </TrackableCTA>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Audit package options
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Each package is designed for a fast decision and a clear outcome.
          Typical starting prices shown for planning.
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
          Audit FAQs
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
