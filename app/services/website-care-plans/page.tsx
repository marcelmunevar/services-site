import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Website Care Plans",
  description:
    "Monthly website care plans for WordPress and modern websites including security monitoring, backups, accessibility checks, and content updates.",
  keywords: [
    "website care plans",
    "WordPress maintenance service",
    "monthly website support",
    "website security monitoring",
    "website backup service",
  ],
  alternates: {
    canonical: "/services/website-care-plans",
  },
};

export default function WebsiteCarePlansPage() {
  const faqs = [
    {
      question: "What platforms do care plans support?",
      answer:
        "Care plans are commonly delivered for WordPress and modern frontend stacks. Scope is adjusted to your CMS and hosting setup.",
    },
    {
      question: "Do care plans include emergency support?",
      answer:
        "Yes, response expectations can be included for incidents. The exact SLA and response windows are defined per package.",
    },
    {
      question: "Can we include privacy and accessibility checks each month?",
      answer:
        "Yes. Cookie scans, consent checks, and accessibility checks can be included as recurring deliverables.",
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
        name: "Website Care Plans",
        item: `${siteUrl}/services/website-care-plans`,
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
            <a href="/" className="transition-colors hover:text-slate-900">
              Home
            </a>
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
          <li className="font-semibold text-slate-900">Website Care Plans</li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Website Care Plans
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Ongoing website support with predictable monthly coverage
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Keep your website healthy, secure, and up-to-date with recurring care
          plans tailored to your platform, content workflow, and growth goals.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            What is covered
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>WordPress core, plugin, and theme updates</li>
            <li>Security monitoring and incident response support</li>
            <li>Automated backups and restore checks</li>
            <li>Accessibility checks on key templates</li>
            <li>Cookie scan checks and consent maintenance</li>
            <li>Small content and publishing updates</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Why teams choose care plans
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Reduce risk of security and uptime issues</li>
            <li>Avoid delayed updates and technical debt</li>
            <li>Get predictable support without hiring in-house</li>
            <li>Maintain compliance and accessibility standards</li>
          </ul>
          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Ask about monthly website care plans
          </a>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Plans
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Monthly website care plan options
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Typical ranges shown to help budget planning. Final pricing depends on
          site size, platform complexity, and response requirements.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Essential Care
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">
              $150/mo+
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Core updates, monitoring, and backup checks.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Growth Care</p>
            <p className="display-font mt-2 text-3xl text-slate-950">
              $300/mo+
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Includes content support, compliance checks, and reporting.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Enterprise Care
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">Custom</p>
            <p className="mt-2 text-sm text-slate-700">
              Multi-site governance, team workflows, and priority support.
            </p>
          </article>
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Website care plan FAQs
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
