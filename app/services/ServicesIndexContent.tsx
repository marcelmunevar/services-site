"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ServiceBreadcrumbs from "../components/ServiceBreadcrumbs";
import ServiceFitSection from "../components/ServiceFitSection";
import ServiceHeroPanel from "../components/ServiceHeroPanel";

type ServiceCard = {
  title: string;
  href: string;
  description: string;
};

type ServicesIndexContentProps = {
  breadcrumbSchema: Record<string, unknown>;
  services: ServiceCard[];
};

export default function ServicesIndexContent({
  services,
}: ServicesIndexContentProps) {
  const handleServiceCardClick = (service: string) => {
    posthog.capture("service_card_clicked", { service });
  };

  const guidancePoints = [
    {
      title: "Choose by delivery model",
      body: "Some services are best for ongoing support, while others are built for one-time audits or focused implementation work.",
    },
    {
      title: "Start with the bottleneck",
      body: "If compliance, governance, maintenance, or delivery speed is creating risk, begin with the service closest to that problem.",
    },
    {
      title: "Scope can stay practical",
      body: "Most engagements can start small and expand only when the business case is clear.",
    },
  ];

  const proofPoints = [
    { value: `${services.length}`, label: "Service areas" },
    { value: "Ongoing", label: "Support and care options" },
    { value: "Fixed-scope", label: "Audit and project options" },
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
        <ServiceBreadcrumbs
          currentLabel="Services"
          includeServicesLink={false}
        />

        <ServiceHeroPanel
          eyebrow="Services"
          title="Technical website services for compliance, delivery, and growth."
          description="Choose the engagement model that fits your priorities, from recurring support to enterprise consulting and fixed-scope implementation audits."
          proofPoints={proofPoints}
          sideTitle="How to choose"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Pick the service that matches your current priority"
          description="Some teams need ongoing maintenance and governance. Others need a focused audit, a privacy implementation project, or technical consulting during a high-risk delivery window."
          callout="If you are not sure where to start, choose the option closest to your biggest operational risk. Scope can stay narrow and expand only when needed."
        />

        <Box
          sx={{
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          {services.map((service) => (
            <Card key={service.href}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h2">{service.title}</Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </Typography>
                <CardActions sx={{ px: 0, pt: 2 }}>
                  <Button
                    component={NextLink}
                    href={service.href}
                    variant="outlined"
                    onClick={() => handleServiceCardClick(service.title)}
                  >
                    View service details
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
