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
      title: "Start with implementation risk",
      body: "This service fits teams that already know privacy matters but need a practical path to cleaner implementation.",
    },
    {
      title: "Use it to stabilize operations",
      body: "It helps when consent tooling, tags, or analytics setup are creating friction across marketing and compliance work.",
    },
    {
      title: "Keep legal and technical work aligned",
      body: "The focus stays on execution while coordinating with legal teams when interpretation is required.",
    },
  ];

  const proofPoints = [
    { value: "CMP", label: "Consent tooling support" },
    { value: "GTM", label: "Tag governance and fixes" },
    { value: "Ongoing", label: "Monitoring options available" },
  ];

  const packagePlans = [
    {
      title: "Audit Sprint",

      description:
        "Consent and tag audit with prioritized implementation plan.",
    },
    {
      title: "Implementation Project",

      description: "Consent tooling, CMP configuration, and GTM consent fixes.",
    },
    {
      title: "Monthly Monitoring",

      description:
        "Ongoing checks, documentation updates, and change tracking.",
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
          title="Privacy implementation for modern marketing websites"
          description="Get support for consent tooling, tag governance, and privacy-compliant analytics setup without slowing down your marketing operations."
          proofPoints={proofPoints}
          sideTitle="How to use this service"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best when privacy work is blocking marketing execution"
          description="This service is useful when teams need a cleaner operational setup for consent, analytics, and governance without turning the engagement into a legal advisory project."
          callout="It works well for organizations that need implementation help, coordination, and documented changes that internal teams can continue to manage."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "Included services",
            items: [
              "Cookie consent audits and remediation planning",
              "Consent implementation and validation",
              "OneTrust or CookiePro setup and configuration",
              "Google Tag Manager consent fixes and governance",
              "Privacy policy implementation support",
              "Monthly compliance monitoring options",
            ],
          }}
          right={{
            title: "Ideal for",
            items: [
              "Marketing teams running paid media across regions",
              "Organizations using multiple consent tools or tag containers",
              "Teams preparing for internal or external compliance reviews",
              "Companies that need implementation help, not legal advice",
            ],
            cta: {
              label: "Request a privacy compliance consultation",
              href: "/#contact",
              onClick: handleConsultationClick,
            },
          }}
        />

        <ServicePricingSection
          eyebrow="Packages"
          title="Privacy compliance package options"
          description="Typical ranges shown for planning. Final scope and pricing depend on your platform complexity, tags, and number of sites."
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
