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
  Typography,
} from "@mui/material";
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
        <Breadcrumbs aria-label="Breadcrumb" separator="/">
          <Link component={NextLink} href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link
            component={NextLink}
            href="/services"
            color="inherit"
            underline="hover"
          >
            Services
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 700 }}>
            Website Privacy Compliance
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
              Website Privacy Compliance
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Privacy implementation for modern marketing websites
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Get implementation support for consent tooling, tag governance,
              and privacy-compliant analytics setup without adding friction to
              your marketing operations.
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
          <Card
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
                Included services
              </Typography>
              <Box
                component="ul"
                sx={{
                  mt: 2,
                  pl: 3,
                  ...bulletListSx,
                }}
              >
                <li>Cookie consent audits and remediation planning</li>
                <li>Consent implementation and validation</li>
                <li>OneTrust or CookiePro setup and configuration</li>
                <li>Google Tag Manager consent fixes and governance</li>
                <li>Privacy policy implementation support</li>
                <li>Monthly compliance monitoring options</li>
              </Box>
            </CardContent>
          </Card>

          <Card
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
                Ideal for
              </Typography>
              <Box
                component="ul"
                sx={{
                  mt: 2,
                  pl: 3,
                  ...bulletListSx,
                }}
              >
                <li>Marketing teams running paid media across regions</li>
                <li>
                  Organizations using multiple consent tools or tag containers
                </li>
                <li>
                  Teams preparing for internal or external compliance reviews
                </li>
                <li>
                  Companies that need implementation help, not legal advice
                </li>
              </Box>

              <Button
                component={NextLink}
                href="/#contact"
                variant="contained"
                onClick={handleConsultationClick}
                sx={{ mt: 3, borderRadius: "9999px", px: 2.5 }}
              >
                Request a privacy compliance consultation
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Card
          variant="outlined"
          sx={{
            borderColor: "rgba(148, 163, 184, 0.35)",
            borderRadius: "1.8rem",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: "0 16px 55px rgba(2, 8, 20, 0.08)",
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
              Packages
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: "2rem" }}>
              Privacy compliance package options
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}
            >
              Typical ranges shown for planning. Final scope and pricing depend
              on your platform complexity, tags, and number of sites.
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "grid",
                gap: 2,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              }}
            >
              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Audit Sprint
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $750+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Consent and tag audit with prioritized implementation plan.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Implementation Project
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $2,000+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Consent tooling, CMP configuration, and GTM consent fixes.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Monthly Monitoring
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $300+/mo
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Ongoing checks, documentation updates, and change tracking.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Website privacy compliance FAQs"
        />
      </Box>
    </Container>
  );
}
