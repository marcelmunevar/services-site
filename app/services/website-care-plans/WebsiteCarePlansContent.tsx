"use client";

import posthog from "posthog-js";
import { Box, Container } from "@mui/material";
import ServiceBreadcrumbs from "../../components/ServiceBreadcrumbs";
import ServiceFitSection from "../../components/ServiceFitSection";
import ServiceHeroPanel from "../../components/ServiceHeroPanel";
import ServicePricingSection from "../../components/ServicePricingSection";
import ServiceFaqSection from "../../components/ServiceFaqSection";
import ServiceTwoColumnListSection from "../../components/ServiceTwoColumnListSection";

type FAQItem = {
  question: string;
  answer: string;
};

type WebsiteCarePlansContentProps = {
  faqs: FAQItem[];
};

export default function WebsiteCarePlansContent({
  faqs,
}: WebsiteCarePlansContentProps) {
  const handleConsultationClick = () => {
    posthog.capture("consultation_cta_clicked", {
      service: "website-care-plans",
    });
  };

  const pricingPlans = [
    {
      title: "Essential Care",

      description: "Core updates, monitoring, and backup checks.",
    },
    {
      title: "Growth Care",

      description:
        "Includes content support, compliance checks, and reporting.",
    },
    {
      title: "Enterprise Care",

      description:
        "Multi-site governance, team workflows, and priority support.",
    },
  ];

  const guidancePoints = [
    {
      title: "Use it for recurring maintenance pressure",
      body: "This service fits teams that need steady support for updates, monitoring, and routine site care without building an internal maintenance function.",
    },
    {
      title: "Reduce preventable website risk",
      body: "It is useful when delayed updates, inconsistent checks, or small technical issues are starting to create operational drag.",
    },
    {
      title: "Keep support predictable",
      body: "The model is built around ongoing coverage, clear response expectations, and recurring execution rather than one-off fixes.",
    },
  ];

  const proofPoints = [
    { value: "Monthly", label: "Recurring support model" },
    { value: "Coverage", label: "Maintenance, monitoring, and checks" },
    { value: "Predictable", label: "Clear support expectations" },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 4 }}>
        <ServiceBreadcrumbs currentLabel="Website Care Plans" />

        <ServiceHeroPanel
          eyebrow="Website Care Plans"
          title="Ongoing website support with predictable monthly coverage"
          description="Keep your website healthy, secure, and up-to-date with recurring care plans tailored to your platform, content workflow, and growth goals."
          proofPoints={proofPoints}
          sideTitle="When this is a fit"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best for teams that need dependable recurring website support"
          description="This service is designed for organizations that want ongoing help with updates, monitoring, accessibility checks, and lightweight publishing work without treating each task as a separate project."
          callout="It is a strong fit when website upkeep needs to become routine, visible, and easier to budget."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "What is covered",
            items: [
              "WordPress core, plugin, and theme updates",
              "Security monitoring and incident response support",
              "Automated backups and restore checks",
              "Accessibility checks on key templates",
              "Cookie scan checks and consent maintenance",
              "Small content and publishing updates",
            ],
          }}
          right={{
            title: "Why teams choose care plans",
            items: [
              "Reduce risk of security and uptime issues",
              "Avoid delayed updates and technical debt",
              "Get predictable support without hiring in-house",
              "Maintain compliance and accessibility standards",
            ],
            cta: {
              label: "Ask about monthly website care plans",
              href: "/contact-us",
              onClick: handleConsultationClick,
            },
          }}
        />

        <ServicePricingSection
          eyebrow="Plans"
          title="Monthly website care plan options"
          description="Typical ranges shown to help budget planning. Final pricing depends on site size, platform complexity, and response requirements."
          plans={pricingPlans}
        />

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Website care plan FAQs"
        />
      </Box>
    </Container>
  );
}
