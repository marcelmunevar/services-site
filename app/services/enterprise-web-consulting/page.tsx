import type { Metadata } from "next";
import EnterpriseWebConsultingContent from "./EnterpriseWebConsultingContent";

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EnterpriseWebConsultingContent faqs={faqs} />
    </>
  );
}
