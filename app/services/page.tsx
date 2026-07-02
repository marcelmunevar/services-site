import type { Metadata } from "next";
import Link from "next/link";
import TrackableCTA from "../components/TrackableCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional website services for privacy compliance, website care plans, enterprise consulting, and compliance audits.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "DNS Management & Edge Services",
    href: "/services/dns-management-edge-services",
    description:
      "Client-owned Cloudflare setup and managed DNS/edge operations including migrations, DNS records, SSL/TLS hardening, CDN and WAF tuning, and ongoing change support.",
  },
  {
    title: "Website Privacy Compliance",
    href: "/services/website-privacy-compliance",
    description:
      "Cookie consent audits, consent implementation, OneTrust setup, privacy policy implementation, and GTM consent fixes.",
  },
  {
    title: "Website Care Plans",
    href: "/services/website-care-plans",
    description:
      "Monthly website support including updates, security monitoring, backups, accessibility checks, and content maintenance.",
  },
  {
    title: "Enterprise Web Consulting",
    href: "/services/enterprise-web-consulting",
    description:
      "Senior consulting for website migrations, landing pages, performance improvements, and accessibility remediation.",
  },
  {
    title: "Website Compliance Audits & Checklists",
    href: "/services/productized-website-services",
    description:
      "Independent compliance audit reports for teams that want to self-remediate. Covers privacy, security, accessibility, cookie inventory, and includes an implementation guide with templates.",
  },
  {
    title: "AI-Generated Static Websites",
    href: "/services/ai-generated-static-websites",
    description:
      "Cost-effective static websites built with AI and Next.js, deployed to Vercel's free tier. Ideal for portfolios, landing pages, and small business sites.",
  },
];

export default function ServicesIndexPage() {
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
    ],
  };

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
