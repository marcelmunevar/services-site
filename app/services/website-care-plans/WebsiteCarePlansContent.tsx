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

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Website Care Plans
            </Typography>
            <Typography variant="h1" sx={{ mt: 1.5 }}>
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
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">What is covered</Typography>
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

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">Why teams choose care plans</Typography>
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
                sx={{ mt: 3 }}
              >
                Ask about monthly website care plans
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Plans
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
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
              <Card>
                <CardContent>
                  <Typography variant="h4">Essential Care</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $150/mo+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Core updates, monitoring, and backup checks.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Growth Care</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $300/mo+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Includes content support, compliance checks, and reporting.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Enterprise Care</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
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
