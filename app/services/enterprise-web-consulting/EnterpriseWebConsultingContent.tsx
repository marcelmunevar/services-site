"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import { Box, Container } from "@mui/material";
import ServiceBreadcrumbs from "../../components/ServiceBreadcrumbs";
import ServiceFitSection from "../../components/ServiceFitSection";
import ServiceHeroPanel from "../../components/ServiceHeroPanel";
import ServicePricingSection from "../../components/ServicePricingSection";
import ServiceFaqSection from "../../components/ServiceFaqSection";
import ServiceTwoColumnListSection from "../../components/ServiceTwoColumnListSection";
import { bulletListSx } from "../../components/muiListStyles";

type FAQItem = {
  question: string;
  answer: string;
};

type EnterpriseWebConsultingContentProps = {
  faqs: FAQItem[];
};

export default function EnterpriseWebConsultingContent({
  faqs,
}: EnterpriseWebConsultingContentProps) {
  const handleConsultationClick = () => {
    posthog.capture("consultation_cta_clicked", {
      service: "enterprise-web-consulting",
    });
  };

  const guidancePoints = [
    {
      title: "Use it for complex delivery periods",
      body: "This service fits programs with launch pressure, migration risk, or coordination challenges across teams.",
    },
    {
      title: "Bring in focused senior support",
      body: "It works well when a team needs hands-on technical direction without committing to a full-time hire.",
    },
    {
      title: "Keep execution aligned across stakeholders",
      body: "The engagement supports delivery decisions across marketing, engineering, compliance, and leadership groups.",
    },
  ];

  const proofPoints = [
    { value: "Multi-brand", label: "Governance across teams" },
    { value: "Launch-ready", label: "Support for critical delivery windows" },
    { value: "Flexible", label: "Project or embedded models" },
  ];

  const pricingPlans = [
    {
      title: "Advisory Sprint",

      description: "Focused architecture and implementation planning support.",
    },
    {
      title: "Project Consulting",

      description: "End-to-end support for migrations and launch initiatives.",
    },
    {
      title: "Embedded Support",

      description: "Part-time or ongoing enterprise consulting across teams.",
    },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 4 }}>
        <ServiceBreadcrumbs currentLabel="Enterprise Web Consulting" />

        <ServiceHeroPanel
          eyebrow="Enterprise Web Consulting"
          title="Senior web consulting for complex enterprise delivery"
          description="Support high-priority initiatives with implementation leadership, practical technical direction, and delivery workflows that scale across brands and teams."
          proofPoints={proofPoints}
          sideTitle="When this is a fit"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best for teams managing delivery risk across stakeholders"
          description="This service is designed for organizations that need senior technical direction during migrations, launch periods, or other initiatives where delivery quality depends on consistent coordination."
          callout="It helps when teams need practical leadership, implementation oversight, and a clearer path from planning to execution."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "Consulting areas",
            items: [
              "Website migration planning and implementation support",
              "Landing page build systems and release workflows",
              "Performance optimization strategy and execution",
              "Accessibility remediation and quality assurance",
              "Governance for multi-brand and multi-team environments",
              "CI/CD and modern frontend delivery support",
            ],
          }}
          right={{
            title: "Engagement options",
            items: [
              "Project-based advisory and implementation support",
              "Part-time embedded consulting",
              "Technical lead coverage for launch-critical periods",
              "Cross-functional collaboration with legal and compliance teams",
            ],
            cta: {
              label: "Discuss enterprise consulting support",
              href: "/#contact",
              onClick: handleConsultationClick,
            },
          }}
        />

        <ServicePricingSection
          eyebrow="Engagement Models"
          title="Consulting options and typical pricing"
          description="Typical ranges shown for planning. Final scope is based on team size, delivery risk, and implementation depth."
          plans={pricingPlans}
        />

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Enterprise consulting FAQs"
        />
      </Box>
    </Container>
  );
}
