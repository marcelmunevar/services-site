import type { Metadata } from "next";
import DNSManagementEdgeServicesContent from "./DNSManagementEdgeServicesContent";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DNSManagementEdgeServicesContent faqs={faqs} />
    </>
  );
}
