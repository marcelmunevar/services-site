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

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Website Privacy Compliance
            </Typography>
            <Typography variant="h1" sx={{ mt: 1.5 }}>
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
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">Included services</Typography>
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

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">Ideal for</Typography>
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
                sx={{ mt: 3 }}
              >
                Request a privacy compliance consultation
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Packages
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
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
              <Card>
                <CardContent>
                  <Typography variant="h4">Audit Sprint</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $750+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Consent and tag audit with prioritized implementation plan.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Implementation Project</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $2,000+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Consent tooling, CMP configuration, and GTM consent fixes.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Monthly Monitoring</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
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
