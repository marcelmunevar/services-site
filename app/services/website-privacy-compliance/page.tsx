import type { Metadata } from "next";
import WebsitePrivacyComplianceContent from "./WebsitePrivacyComplianceContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Website Privacy Compliance Services",
  description:
    "Website privacy compliance services including cookie consent audits, consent implementation, OneTrust setup, and Google Tag Manager consent fixes.",
  keywords: [
    "website privacy compliance",
    "cookie consent audit",
    "consent implementation",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebsitePrivacyComplianceContent faqs={faqs} />
    </>
  );
}
