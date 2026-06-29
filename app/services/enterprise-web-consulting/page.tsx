import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Enterprise Web Consulting",
  description:
    "Enterprise web consulting for migrations, landing page delivery, performance improvements, accessibility remediation, and implementation governance.",
  keywords: [
    "enterprise web consulting",
    "website migration consulting",
    "landing page development support",
    "website performance consulting",
    "accessibility remediation consulting",
  ],
  alternates: {
    canonical: "/services/enterprise-web-consulting",
  },
};

export default function EnterpriseConsultingPage() {
  const faqs = [
    {
      question: "Do you support short-term consulting engagements?",
      answer:
        "Yes. Engagements can range from focused advisory sprints to embedded support during launch-critical periods.",
    },
    {
      question:
        "Can you work with internal legal, compliance, and marketing teams?",
      answer:
        "Yes. Cross-functional collaboration is a core part of enterprise delivery, especially for privacy and accessibility initiatives.",
    },
    {
      question: "Do you provide implementation support or only strategy?",
      answer:
        "Both. I provide practical technical direction and hands-on implementation support where needed.",
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
        name: "Enterprise Web Consulting",
        item: `${siteUrl}/services/enterprise-web-consulting`,
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
            Enterprise Web Consulting
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Enterprise Web Consulting
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Senior web consulting for complex enterprise delivery
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Support high-priority initiatives with implementation leadership,
          practical technical direction, and delivery workflows that scale
          across brands and teams.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Consulting areas
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Website migration planning and implementation support</li>
            <li>Landing page build systems and release workflows</li>
            <li>Performance optimization strategy and execution</li>
            <li>Accessibility remediation and quality assurance</li>
            <li>Governance for multi-brand and multi-team environments</li>
            <li>CI/CD and modern frontend delivery support</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Engagement options
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Project-based advisory and implementation support</li>
            <li>Part-time embedded consulting</li>
            <li>Technical lead coverage for launch-critical periods</li>
            <li>
              Cross-functional collaboration with legal and compliance teams
            </li>
          </ul>
          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Discuss enterprise consulting support
          </a>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Engagement Models
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Consulting options and typical pricing
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Typical ranges shown for planning. Final scope is based on team size,
          delivery risk, and implementation depth.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Advisory Sprint
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">$1,500+</p>
            <p className="mt-2 text-sm text-slate-700">
              Focused architecture and implementation planning support.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Project Consulting
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">$4,000+</p>
            <p className="mt-2 text-sm text-slate-700">
              End-to-end support for migrations and launch initiatives.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">
              Embedded Support
            </p>
            <p className="display-font mt-2 text-3xl text-slate-950">Custom</p>
            <p className="mt-2 text-sm text-slate-700">
              Part-time or ongoing enterprise consulting across teams.
            </p>
          </article>
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Enterprise consulting FAQs
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
