"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import { Box, Container } from "@mui/material";
import ServiceBreadcrumbs from "../../components/ServiceBreadcrumbs";
import ServiceFitSection from "../../components/ServiceFitSection";
import ServiceHeroPanel from "../../components/ServiceHeroPanel";
import ServicePricingSection from "../../components/ServicePricingSection";
import ServiceTwoColumnListSection from "../../components/ServiceTwoColumnListSection";
import { bulletListSx } from "../../components/muiListStyles";
import ServiceFaqSection from "../../components/ServiceFaqSection";

type FAQItem = {
  question: string;
  answer: string;
};

type WebsitePrivacyComplianceContentProps = {
  faqs: FAQItem[];
};

export default function WebsitePrivacyComplianceContent({
  faqs,
}: WebsitePrivacyComplianceContentProps) {
  const handleConsultationClick = () => {
    posthog.capture("consultation_cta_clicked", {
      service: "website-privacy-compliance",
    });
  };

  const guidancePoints = [
    {
      title: "Assess your current implementation",
      body: "Review your consent management platform, analytics, tags, and privacy-related website behavior to identify implementation gaps and opportunities for improvement.",
    },
    {
      title: "Prioritize the right changes",
      body: "Create a practical remediation plan based on your website, tracking technologies, and business priorities.",
    },
    {
      title: "Implement and validate",
      body: "Configure consent tooling, update tag behavior, validate analytics, document changes, and confirm the implementation works as intended.",
    },
  ];

  const proofPoints = [
    { value: "CMP", label: "Consent platform implementation" },
    { value: "GTM", label: "Tag governance and consent mode" },
    { value: "Ongoing", label: "Monitoring and maintenance available" },
  ];

  const packagePlans = [
    {
      title: "Audit Sprint",
      description:
        "Review your current implementation and receive a prioritized remediation plan.",
    },
    {
      title: "Implementation Project",
      description:
        "Implement consent tooling, configure tags, and validate your privacy setup.",
    },
    {
      title: "Monthly Monitoring",
      description:
        "Ongoing monitoring, implementation updates, documentation, and change tracking.",
    },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        flex: 1,
        py: { xs: 6, sm: 8 },
      }}
    >
      <Box sx={{ display: "grid", gap: 4 }}>
        <ServiceBreadcrumbs currentLabel="Website Privacy Compliance" />

        <ServiceHeroPanel
          eyebrow="Website Privacy Compliance"
          title="Privacy implementation for modern websites"
          description="Get practical support implementing consent management, governing tags, and configuring privacy-aware analytics. Whether you're launching a new website, improving an existing implementation, or preparing for a compliance review, the focus is on reliable technical execution—not legal advice."
          proofPoints={proofPoints}
          sideTitle="How this service works"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="When this service is a good fit"
          title="Technical privacy implementation for websites of any size"
          description="This service is designed for organizations that need help implementing or improving website privacy controls. Engagements may include new website launches, consent platform deployments, analytics updates, tag cleanup, or ongoing maintenance."
          callout="Whether you're starting from scratch or refining an existing implementation, the goal is to deliver a privacy setup your team can confidently maintain."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "Included services",
            items: [
              "Cookie consent audits and remediation planning",
              "Consent management platform implementation and configuration",
              "OneTrust or CookiePro setup and optimization",
              "Google Tag Manager consent implementation and governance",
              "Privacy-aware analytics configuration",
              "Privacy policy implementation support",
              "Consent validation and testing",
              "Documentation and implementation guidance",
              "Optional ongoing monitoring and maintenance",
            ],
          }}
          right={{
            title: "Ideal for",
            items: [
              "Businesses implementing website privacy controls for the first time",
              "Organizations updating an existing consent management platform",
              "Marketing teams improving analytics and tag governance",
              "Companies preparing for compliance reviews or internal audits",
              "Agencies needing implementation support for client websites",
              "Organizations managing one or multiple websites",
            ],
            cta: {
              label: "Request a privacy consultation",
              href: "/contact-us",
              onClick: handleConsultationClick,
            },
          }}
        />

        <ServicePricingSection
          eyebrow="Packages"
          title="Privacy compliance package options"
          description="Typical engagement ranges are shown for planning purposes. Final scope and pricing depend on website size, implementation complexity, consent platform requirements, and the number of websites involved."
          plans={packagePlans}
        />

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Website privacy compliance FAQs"
        />
      </Box>
    </Container>
  );
}
