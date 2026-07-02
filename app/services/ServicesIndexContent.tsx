"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";

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
        <Breadcrumbs aria-label="Breadcrumb" separator="/">
          <Link component={NextLink} href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 700 }}>
            Services
          </Typography>
        </Breadcrumbs>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Services
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2.1rem", sm: "3rem" } }}
            >
              Technical website services built for growth and compliance
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Choose the engagement model that matches your goals, from
              recurring support to enterprise consulting and fixed-scope
              implementation audits.
            </Typography>
          </CardContent>
        </Card>

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
                <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  component={NextLink}
                  href={service.href}
                  variant="outlined"
                  onClick={() => handleServiceCardClick(service.title)}
                  sx={{ mt: 2.5 }}
                >
                  View service details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
