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
              Website Compliance Audits and Checklists
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "3rem" } }}
            >
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
                fontSize: "0.95rem",
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
                What you receive
              </Typography>
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
                Best for
              </Typography>
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
                sx={{ mt: 3, borderRadius: "9999px", px: 2.5 }}
              >
                Request an audit package
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
              Pricing
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: "2rem" }}>
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
              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Single Audit
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $600+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    One focused audit with prioritized recommendations.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Audit + Guide
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $1,200+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Adds implementation guide and team-ready documentation.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Bundle Package
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
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
