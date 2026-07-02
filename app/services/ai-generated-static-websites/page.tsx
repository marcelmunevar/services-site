import type { Metadata } from "next";
import AIGeneratedStaticWebsitesContent from "./AIGeneratedStaticWebsitesContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "AI-Generated Static Websites",
  description:
    "Cost-effective static websites built with AI and Next.js, deployed to Vercel's free tier. Ideal for portfolios, landing pages, documentation sites, and small business websites.",
  keywords: [
    "AI-generated static websites",
    "Next.js static site generation",
    "Vercel deployment",
    "free tier hosting",
    "portfolio website",
    "landing page development",
    "static site generator",
  ],
  alternates: {
    canonical: "/services/ai-generated-static-websites",
  },
};

export default function AIGeneratedStaticWebsitesPage() {
  const faqs = [
    {
      question: "What is included in the free Vercel deployment?",
      answer:
        "Vercel's free tier (Hobby plan) includes hosting, global CDN delivery, automatic HTTPS, and continuous deployment from Git. It supports custom domains and provides generous bandwidth for most small sites. Limitations include bandwidth caps and limits on build minutes per month.",
    },
    {
      question: "Can I use my own domain name?",
      answer:
        "Yes. You bring your domain and we configure it in your Vercel account. DNS updates typically propagate within a few hours. SSL is provisioned automatically at no extra cost.",
    },
    {
      question: "What are the free tier limitations?",
      answer:
        "Vercel's free Hobby tier is designed for personal projects and low-traffic sites. Commercial use requires a Pro plan. There are also limits on serverless function execution time, build minutes, and bandwidth. For most portfolios and landing pages these limits are more than sufficient.",
    },
    {
      question: "Is this suitable for e-commerce or a membership site?",
      answer:
        "No. This service targets static content sites without real-time databases, user authentication, or complex backend interactions. It is ideal for portfolios, landing pages, documentation sites, and small business brochure sites.",
    },
    {
      question: "How is the content generated?",
      answer:
        "Content is drafted using AI based on a brief you provide about your brand, goals, and audience. You review and approve the copy before deployment. Final content is always your choice.",
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
        name: "AI-Generated Static Websites",
        item: `${siteUrl}/services/ai-generated-static-websites`,
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
      <AIGeneratedStaticWebsitesContent faqs={faqs} />
    </>
  );
}
