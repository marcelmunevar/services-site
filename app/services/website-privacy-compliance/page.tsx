import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Website Privacy Compliance Services",
  description:
    "Website privacy compliance services including cookie consent audits, Consent Mode v2 implementation, OneTrust setup, and Google Tag Manager consent fixes.",
  keywords: [
    "website privacy compliance",
    "cookie consent audit",
    "Consent Mode v2 implementation",
    "OneTrust setup",
    "Google Tag Manager consent fixes",
  ],
  alternates: {
    canonical: "/services/website-privacy-compliance",
  },
};

export default function PrivacyCompliancePage() {
  const faqs = [
    {
      question: "Do you provide legal advice?",
      answer:
        "No. This service focuses on technical implementation, consent tooling, and tagging behavior. Legal advice should come from legal counsel.",
    },
    {
      question: "Can you work with our existing CMP and GTM setup?",
      answer:
        "Yes. I can audit and improve existing setups, including OneTrust, CookiePro, and Google Tag Manager consent configurations.",
    },
    {
      question: "Do you support multi-brand or multi-site organizations?",
      answer:
        "Yes. Rollout planning and implementation support can be aligned across multiple subsidiaries, brands, and publishing teams.",
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
        name: "Website Privacy Compliance",
        item: `${siteUrl}/services/website-privacy-compliance`,
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
          <li className="font-semibold text-slate-900">
            Website Privacy Compliance
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Website Privacy Compliance
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Privacy implementation for modern marketing websites
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Get implementation support for consent tooling, tag governance, and
          privacy-compliant analytics setup without adding friction to your
          marketing operations.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Included services
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>Cookie consent audits and remediation planning</li>
            <li>Consent Mode v2 implementation and validation</li>
            <li>OneTrust or CookiePro setup and configuration</li>
            <li>Google Tag Manager consent fixes and governance</li>
            <li>Privacy policy implementation support</li>
            <li>Monthly compliance monitoring options</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">Ideal for</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>Marketing teams running paid media across regions</li>
            <li>
              Organizations using multiple consent tools or tag containers
            </li>
            <li>Teams preparing for internal or external compliance reviews</li>
            <li>Companies that need implementation help, not legal advice</li>
          </ul>
          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Request a privacy compliance consultation
          </a>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Packages
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Privacy compliance package options
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Typical ranges shown for planning. Final scope and pricing depend on
          your platform complexity, tags, and number of sites.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Audit Sprint</p>
            <p className="display-font mt-2 text-3xl text-slate-950">$750+</p>
            <p className="mt-2 text-sm text-slate-700">
              Consent and tag audit with prioritized implementation plan.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Implementation Project
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">$2,000+</p>
            <p className="mt-2 text-sm text-slate-700">
              Consent Mode v2, CMP configuration, and GTM consent fixes.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Monthly Monitoring
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">
              $300+/mo
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Ongoing checks, documentation updates, and change tracking.
            </p>
          </article>
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Website privacy compliance FAQs
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
