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

type EnterpriseWebConsultingContentProps = {
  faqs: FAQItem[];
};

export default function EnterpriseWebConsultingContent({
  faqs,
}: EnterpriseWebConsultingContentProps) {
  const handleConsultationClick = () => {
    posthog.capture("consultation_cta_clicked", {
      service: "enterprise-web-consulting",
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
            Enterprise Web Consulting
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
              Enterprise Web Consulting
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Senior web consulting for complex enterprise delivery
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Support high-priority initiatives with implementation leadership,
              practical technical direction, and delivery workflows that scale
              across brands and teams.
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
                Consulting areas
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>Website migration planning and implementation support</li>
                <li>Landing page build systems and release workflows</li>
                <li>Performance optimization strategy and execution</li>
                <li>Accessibility remediation and quality assurance</li>
                <li>Governance for multi-brand and multi-team environments</li>
                <li>CI/CD and modern frontend delivery support</li>
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
                Engagement options
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>Project-based advisory and implementation support</li>
                <li>Part-time embedded consulting</li>
                <li>Technical lead coverage for launch-critical periods</li>
                <li>
                  Cross-functional collaboration with legal and compliance teams
                </li>
              </Box>
              <Button
                component={NextLink}
                href="/#contact"
                variant="contained"
                onClick={handleConsultationClick}
                sx={{ mt: 3, borderRadius: "9999px", px: 2.5 }}
              >
                Discuss enterprise consulting support
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
              Engagement Models
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: "2rem" }}>
              Consulting options and typical pricing
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}
            >
              Typical ranges shown for planning. Final scope is based on team
              size, delivery risk, and implementation depth.
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
                    Advisory Sprint
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $1,500+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Focused architecture and implementation planning support.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Project Consulting
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    $4,000+
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    End-to-end support for migrations and launch initiatives.
                  </Typography>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Embedded Support
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "2rem" }}>
                    Custom
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    Part-time or ongoing enterprise consulting across teams.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>

        <ServiceFaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title="Enterprise consulting FAQs"
        />
      </Box>
    </Container>
  );
}
