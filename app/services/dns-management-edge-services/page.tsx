import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "DNS Management & Edge Services",
  description:
    "Client-owned Cloudflare setup and managed DNS/edge operations including migrations, DNS records, SSL/TLS hardening, CDN and WAF tuning, and ongoing change support.",
  keywords: [
    "DNS management service",
    "Cloudflare setup service",
    "managed DNS",
    "edge services",
    "CDN and WAF configuration",
    "DNS migration",
    "Cloudflare nameserver migration",
    "SSL TLS hardening",
  ],
  alternates: {
    canonical: "/services/dns-management-edge-services",
  },
};

export default function DNSManagementEdgeServicesPage() {
  const faqs = [
    {
      question: "Who owns the Cloudflare account?",
      answer:
        "Your team owns the Cloudflare account and billing. We configure and operate the environment using delegated access so ownership and control always remain with you.",
    },
    {
      question: "What does DNS management include?",
      answer:
        "DNS management includes onboarding/migration planning, record setup and validation, TTL strategy, change requests, and incident support for DNS-related outages within the agreed response window.",
    },
    {
      question: "Do you also configure edge security and performance?",
      answer:
        "Yes. We can configure SSL/TLS settings, caching rules, redirects, WAF baselines, bot protections, and Cloudflare performance controls based on your risk and performance requirements.",
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
        name: "DNS Management & Edge Services",
        item: `${siteUrl}/services/dns-management-edge-services`,
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
            DNS Management &amp; Edge Services
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          DNS &amp; Edge Operations
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          Client-owned Cloudflare setup and managed DNS operations
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Reduce DNS and edge infrastructure risk with a setup model where your
          team owns the Cloudflare account and we provide implementation and
          operational support. This includes nameserver migration planning,
          record governance, SSL/TLS hardening, and edge performance/security
          tuning.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Included deliverables
          </h2>
          <ul className="service-list mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
            <li>Cloudflare account and zone onboarding in a client-owned tenant</li>
            <li>DNS record migration, validation, and cutover support</li>
            <li>SSL/TLS setup, redirect strategy, and origin hardening</li>
            <li>CDN caching rules and basic performance tuning</li>
            <li>WAF baseline and managed edge security controls</li>
            <li>Change request workflow and operational documentation</li>
          </ul>
        </article>

        <article className="reveal delay-1 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            Engagement model
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">
            Engagements can be delivered as one-time implementation projects or
            ongoing managed operations retainers. Response windows, change
            volumes, and incident support expectations are defined in the scope
            of work.
          </p>
          <a
            href="/contact-us"
            className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Request DNS and edge support
          </a>
        </article>
      </section>

      <section className="reveal rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-9">
        <h2 className="text-3xl font-semibold text-slate-950">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-base font-semibold text-slate-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-700">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
