"use client";

import posthog from "posthog-js";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
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

type ProductizedWebsiteServicesContentProps = {
  faqs: FAQItem[];
};

export default function ProductizedWebsiteServicesContent({
  faqs,
}: ProductizedWebsiteServicesContentProps) {
  const handleAuditClick = () => {
    posthog.capture("consultation_cta_clicked", {
      service: "productized-website-services",
    });
  };

  const pricingPlans = [
    {
      title: "Single Audit",
      price: "$600+",
      description: "One focused audit with prioritized recommendations.",
    },
    {
      title: "Audit + Guide",
      price: "$1,200+",
      description: "Adds implementation guide and team-ready documentation.",
    },
    {
      title: "Bundle Package",
      price: "$2,500+",
      description:
        "Multiple audit deliverables with coordinated handoff support.",
    },
  ];

  const guidancePoints = [
    {
      title: "Use it when your team can self-remediate",
      body: "This service fits organizations that need a strong external assessment but plan to handle implementation with internal resources.",
    },
    {
      title: "Create a clear compliance baseline",
      body: "It works well when leaders need a documented snapshot of current issues before assigning internal work or choosing longer-term support.",
    },
    {
      title: "Keep the engagement time-boxed",
      body: "The model is built for a fast decision, a fixed output, and no ongoing commitment unless you want one.",
    },
  ];

  const proofPoints = [
    { value: "2 weeks", label: "Typical turnaround" },
    { value: "Fixed-scope", label: "Audit-first engagement" },
    { value: "Internal-ready", label: "Outputs for self-remediation" },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 4 }}>
        <ServiceBreadcrumbs currentLabel="Website Compliance Audits and Checklists" />

        <ServiceHeroPanel
          eyebrow="Website Compliance Audits and Checklists"
          title="Independent audits and reports for teams that want to self-remediate"
          description="You get a detailed audit report and implementation roadmap. Your team handles the fixes or uses it to scope internal work. Two-week turnaround, no ongoing commitment required."
          proofPoints={proofPoints}
          sideTitle="When this is a fit"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best for teams that want an external assessment without ongoing support"
          description="This service is designed for companies with internal development capacity that need a credible compliance baseline, a prioritized report, and clearer next steps before choosing how to act."
          callout="It works well when the main need is clarity, documentation, and scoped follow-up rather than hands-on implementation."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "What you receive",
            items: [
              "Website compliance audit report (privacy, security, accessibility)",
              "Detailed findings with remediation priorities",
              "Cookie and consent inventory report",
              "Privacy policy and legal checklist",
              "Accessibility conformance audit",
              "Implementation guide with templates",
              "2-week turnaround",
            ],
          }}
          right={{
            title: "Best for",
            items: [
              "Companies with internal dev resources that want a one-time assessment before hiring long-term support",
              "Teams that need a clear compliance baseline before directing internal work",
              "Organizations that need standardized compliance artifacts for internal review",
              "Leaders who want a credible third-party audit without an ongoing engagement",
            ],
            cta: {
              label: "Request an audit package",
              href: "/#contact",
              onClick: handleAuditClick,
            },
          }}
        />

        <ServicePricingSection
          eyebrow="Pricing"
          title="Audit package options"
          description="Each package is designed for a fast decision and a clear outcome. Typical starting prices shown for planning."
          plans={pricingPlans}
        />

        <ServiceFaqSection faqs={faqs} eyebrow="FAQ" title="Audit FAQs" />
      </Box>
    </Container>
  );
}
