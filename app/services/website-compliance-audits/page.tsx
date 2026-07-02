import type { Metadata } from "next";
import ProductizedWebsiteServicesContent from "./WebsiteComplianceAuditsContent";

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
    canonical: "/services/website-compliance-audits",
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
        item: `${siteUrl}/services/website-compliance-audits`,
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
      <ProductizedWebsiteServicesContent faqs={faqs} />
    </>
  );
}
