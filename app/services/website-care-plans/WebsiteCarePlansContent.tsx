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
import ServiceFaqSection from "../../components/ServiceFaqSection";
import { bulletListSx } from "../../components/muiListStyles";

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

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
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
            Website Care Plans
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
              Website Care Plans
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Ongoing website support with predictable monthly coverage
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Keep your website healthy, secure, and up-to-date with recurring
              care plans tailored to your platform, content workflow, and growth
              goals.
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
                What is covered
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>WordPress core, plugin, and theme updates</li>
                <li>Security monitoring and incident response support</li>
                <li>Automated backups and restore checks</li>
                <li>Accessibility checks on key templates</li>
                <li>Cookie scan checks and consent maintenance</li>
                <li>Small content and publishing updates</li>
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
                Why teams choose care plans
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>Reduce risk of security and uptime issues</li>
                <li>Avoid delayed updates and technical debt</li>
                <li>Get predictable support without hiring in-house</li>
                <li>Maintain compliance and accessibility standards</li>
              </Box>
              <Button
                component={NextLink}
                href="/#contact"
                variant="contained"
                onClick={handleConsultationClick}
                sx={{ mt: 3, borderRadius: "9999px", px: 2.5 }}
              >
                Ask about monthly website care plans
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
              Plans
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: "2rem" }}>
              Monthly website care plan options
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}
            >
              Typical ranges shown to help budget planning. Final pricing
              depends on site size, platform complexity, and response
              requirements.
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
                    Essential Care
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $150/mo+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Core updates, monitoring, and backup checks.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Growth Care
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $300/mo+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Includes content support, compliance checks, and reporting.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Enterprise Care
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    Custom
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Multi-site governance, team workflows, and priority support.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Website care plan FAQs"
        />
      </Box>
    </Container>
  );
}
