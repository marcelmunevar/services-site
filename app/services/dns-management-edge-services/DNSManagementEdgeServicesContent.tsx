"use client";

import NextLink from "next/link";
import { Box, Container, Stack } from "@mui/material";
import ServiceBreadcrumbs from "../../components/ServiceBreadcrumbs";
import ServiceFitSection from "../../components/ServiceFitSection";
import ServiceFaqSection from "../../components/ServiceFaqSection";
import ServiceHeroPanel from "../../components/ServiceHeroPanel";
import ServiceTwoColumnListSection from "../../components/ServiceTwoColumnListSection";

type FAQItem = {
  question: string;
  answer: string;
};

type DNSManagementEdgeServicesContentProps = {
  faqs: FAQItem[];
};

export default function DNSManagementEdgeServicesContent({
  faqs,
}: DNSManagementEdgeServicesContentProps) {
  const guidancePoints = [
    {
      title: "Use it to reduce operational risk",
      body: "This service fits teams that need a cleaner DNS and edge setup with less dependency on informal processes.",
    },
    {
      title: "Keep infrastructure client-owned",
      body: "It works well when organizations want implementation help without losing control of the Cloudflare account.",
    },
    {
      title: "Support both migration and steady-state operations",
      body: "The scope can cover nameserver cutovers, hardening, governance, and ongoing change support.",
    },
  ];

  const proofPoints = [
    { value: "Cloudflare", label: "Client-owned account model" },
    { value: "DNS", label: "Migration and record governance" },
    { value: "Edge", label: "Security and performance tuning" },
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
      <Stack spacing={4}>
        <ServiceBreadcrumbs currentLabel="DNS Management and Edge Services" />

        <ServiceHeroPanel
          eyebrow="DNS and Edge Operations"
          title="Client-owned Cloudflare setup and managed DNS operations"
          description="Reduce DNS and edge infrastructure risk with a setup model where your team owns the Cloudflare account and we provide implementation and operational support. This includes nameserver migration planning, record governance, SSL/TLS hardening, and edge performance and security tuning."
          proofPoints={proofPoints}
          sideTitle="When this is a fit"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best for teams that need stronger control over DNS and edge changes"
          description="This service is designed for organizations that need a more reliable operating model for DNS, SSL/TLS, caching, and edge security without handing ownership of the platform to a vendor."
          callout="It works especially well when teams need migration support, change governance, and a clearer handoff model for ongoing operations."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "Included deliverables",
            items: [
              "Cloudflare account and zone onboarding in a client-owned tenant",
              "DNS record migration, validation, and cutover support",
              "SSL/TLS setup, redirect strategy, and origin hardening",
              "CDN caching rules and basic performance tuning",
              "WAF baseline and managed edge security controls",
              "Change request workflow and operational documentation",
            ],
          }}
          right={{
            title: "Engagement model",
            body: "Engagements can be delivered as one-time implementation projects or ongoing managed operations retainers. Response windows, change volumes, and incident support expectations are defined in the scope of work.",
            cta: {
              label: "Request DNS and edge support",
              href: "/contact-us",
            },
          }}
        />

        <ServiceFaqSection faqs={faqs} title="Frequently asked questions" />
      </Stack>
    </Container>
  );
}
