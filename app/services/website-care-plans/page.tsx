import type { Metadata } from "next";
import WebsiteCarePlansContent from "./WebsiteCarePlansContent";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WebsiteCarePlansContent faqs={faqs} />
    </>
  );
}
