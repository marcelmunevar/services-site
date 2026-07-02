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
            Website Compliance Audits and Checklists
          </Typography>
        </Breadcrumbs>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Website Compliance Audits and Checklists
            </Typography>
            <Typography variant="h1" sx={{ mt: 1.5 }}>
              Independent audits and reports for teams that want to
              self-remediate
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              You get a detailed audit report and implementation roadmap. Your
              team handles the fixes or uses it to scope internal work. Two-week
              turnaround, no ongoing commitment required.
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                maxWidth: 860,
                color: "text.secondary",
              }}
            >
              Best for companies with internal dev resources looking for a
              one-time assessment before hiring long-term support or directing
              internal teams.
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
              <Typography variant="h2">What you receive</Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>
                  Website compliance audit report (privacy, security,
                  accessibility)
                </li>
                <li>Detailed findings with remediation priorities</li>
                <li>Cookie and consent inventory report</li>
                <li>Privacy policy and legal checklist</li>
                <li>Accessibility conformance audit</li>
                <li>Implementation guide with templates</li>
                <li>2-week turnaround</li>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">Best for</Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>
                  Companies with internal dev resources that want a one-time
                  assessment before hiring long-term support
                </li>
                <li>
                  Teams that need a clear compliance baseline before directing
                  internal work
                </li>
                <li>
                  Organizations that need standardized compliance artifacts for
                  internal review
                </li>
                <li>
                  Leaders who want a credible third-party audit without an
                  ongoing engagement
                </li>
              </Box>
              <Button
                component={NextLink}
                href="/#contact"
                variant="contained"
                onClick={handleAuditClick}
                sx={{ mt: 3 }}
              >
                Request an audit package
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Pricing
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Audit package options
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}
            >
              Each package is designed for a fast decision and a clear outcome.
              Typical starting prices shown for planning.
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
                  <Typography variant="h4">Single Audit</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $600+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    One focused audit with prioritized recommendations.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Audit + Guide</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $1,200+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Adds implementation guide and team-ready documentation.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h4">Bundle Package</Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    $2,500+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Multiple audit deliverables with coordinated handoff
                    support.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>

        <ServiceFaqSection faqs={faqs} eyebrow="FAQ" title="Audit FAQs" />
      </Box>
    </Container>
  );
}
