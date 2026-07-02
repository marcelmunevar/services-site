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

        <Card
          variant="outlined"
          sx={{
            borderColor: "rgba(255,255,255,0.7)",
            borderRadius: "1.8rem",
            bgcolor: "rgba(255,255,255,0.85)",
            boxShadow: "0 20px 70px rgba(15, 23, 42, 0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "text.secondary",
              }}
            >
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
            <Card
              key={service.href}
              variant="outlined"
              sx={{
                borderColor: "rgba(148, 163, 184, 0.35)",
                borderRadius: "1.5rem",
                bgcolor: "rgba(255,255,255,0.9)",
                boxShadow: "0 16px 55px rgba(2, 8, 20, 0.08)",
              }}
            >
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
                  sx={{ mt: 2.5, borderRadius: "9999px", px: 2 }}
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
