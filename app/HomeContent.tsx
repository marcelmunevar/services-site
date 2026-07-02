"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { bulletListSx } from "./components/muiListStyles";

type ServiceTrack = {
  title: string;
  value: string;
  points: string[];
  cta: string;
  href: string;
};

type HomeContentProps = {
  serviceTracks: ServiceTrack[];
};

export default function HomeContent({ serviceTracks }: HomeContentProps) {
  const trackEvent = (
    eventName: string,
    eventProperties?: Record<string, string>,
  ) => {
    posthog.capture(eventName, eventProperties);
  };

  const clientBenefits = [
    {
      title: "Clear technical leadership",
      body: "Direct recommendations, defined scope, and no vague handoffs.",
    },
    {
      title: "Audit-ready implementation",
      body: "Privacy, accessibility, and tracking updates are documented and easy to maintain.",
    },
    {
      title: "Reliable communication",
      body: "Consistent updates, realistic timelines, and predictable delivery.",
    },
  ];

  const proofPoints = [
    { value: "7+", label: "Years in enterprise web delivery" },
    { value: `${serviceTracks.length}`, label: "Core service tracks" },
    { value: "End-to-end", label: "Audit through implementation" },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 6 }}>
        <Card>
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 5,
              gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" },
              alignItems: "end",
            }}
          >
            <Box sx={{ display: "grid", gap: 3 }}>
              <Typography variant="overline" color="text.secondary">
                Professional Web Services
              </Typography>

              <Typography variant="h1" sx={{ maxWidth: 760 }}>
                Privacy, maintenance, consulting, and audits for business
                websites.
              </Typography>

              <Typography sx={{ maxWidth: 720, color: "text.secondary" }}>
                I help teams improve compliance, site health, delivery speed,
                and implementation quality with practical technical support.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label="Enterprise implementation experience"
                  variant="outlined"
                />
                <Chip
                  label="Privacy and compliance support"
                  variant="outlined"
                />
                <Chip
                  label="Technical consulting and maintenance"
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component={NextLink}
                  href="#services"
                  variant="contained"
                  onClick={() => trackEvent("explore_services_clicked")}
                >
                  Explore Services
                </Button>
                <Button
                  component={NextLink}
                  href="#contact"
                  variant="outlined"
                  onClick={() => trackEvent("book_discovery_call_clicked")}
                >
                  Start a Conversation
                </Button>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
                }}
              >
                {proofPoints.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 1,
                      p: 2,
                    }}
                  >
                    <Typography variant="h3">{item.value}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 0.5, color: "text.secondary" }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="overline" color="text.secondary">
                  Why clients work with me
                </Typography>

                <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
                  {clientBenefits.map((item, index) => (
                    <Box key={item.title}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "flex-start",
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "primary.main",
                            fontSize: "0.9rem",
                          }}
                        >
                          {index + 1}
                        </Avatar>
                        <Box sx={{ display: "grid", gap: 0.5 }}>
                          <Typography variant="h4">{item.title}</Typography>
                          <Typography sx={{ color: "text.secondary" }}>
                            {item.body}
                          </Typography>
                        </Box>
                      </Box>
                      {index < clientBenefits.length - 1 ? (
                        <Divider sx={{ mt: 2 }} />
                      ) : null}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
            }}
          >
            <Box>
              <Typography variant="overline" color="text.secondary">
                Enterprise Experience
              </Typography>
              <Typography variant="h2" sx={{ mt: 1.5 }}>
                Enterprise experience across complex web programs
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 2.5 }}>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                For more than 7 years, I have supported implementation work for
                a large enterprise with many subsidiaries. That includes rolling
                out compliance products and standards across brands, teams, and
                site stacks while keeping execution practical and consistent.
              </Typography>
              <Box component="ul" sx={{ pl: 3, ...bulletListSx }}>
                <li>Multi-site and multi-team rollout planning</li>
                <li>Consent and tag governance across subsidiaries</li>
                <li>Clear documentation and handoff for internal teams</li>
                <li>Implementation aligned to enterprise constraints</li>
              </Box>
              <Box sx={{ borderLeft: 3, borderColor: "primary.main", pl: 2.5 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Best for organizations that need implementation guidance,
                  governance support, and dependable execution across teams.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box id="services" sx={{ display: "grid", gap: 2.5 }}>
          <Box sx={{ display: "grid", gap: 1 }}>
            <Typography variant="overline" color="text.secondary">
              Services
            </Typography>
            <Typography variant="h2">
              {serviceTracks.length} core service areas
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {serviceTracks.map((track) => (
              <Card key={track.title}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="overline" color="text.secondary">
                    {track.value}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    {track.title}
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                    {track.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </Box>
                  <CardActions sx={{ px: 0, pt: 2 }}>
                    <Button
                      component={NextLink}
                      href={track.href}
                      variant="outlined"
                      onClick={() =>
                        trackEvent("service_card_cta_clicked", {
                          service: track.title,
                        })
                      }
                    >
                      {track.cta}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Card>
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
            }}
          >
            <Box>
              <Typography variant="overline" color="text.secondary">
                Approach
              </Typography>
              <Typography variant="h3" sx={{ mt: 1.5 }}>
                Technical execution with business clarity.
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gap: 1 }}>
              <Typography variant="h4">Implementation-first support</Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                I focus on consent tooling, GTM fixes, accessibility work, and
                reliable delivery systems. When legal interpretation is needed,
                I coordinate with legal teams while staying focused on the
                technical outcome.
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gap: 1 }}>
              <Typography variant="h4">
                Clear scope and accountability
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Every engagement is built around clear deliverables, timelines,
                and reporting so clients get confidence, not just code.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card id="contact">
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Next step
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Let&apos;s talk about your website goals.
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 780, color: "text.secondary" }}
            >
              Share your current setup and priorities. I&apos;ll recommend the
              right engagement model, whether that&apos;s ongoing support,
              consulting, or a fixed-scope audit.
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                component={Link}
                href="mailto:hello@example.com"
                variant="contained"
                onClick={() =>
                  trackEvent("contact_email_clicked", {
                    source: "home_contact_section",
                  })
                }
              >
                Email Your Project Details
              </Button>
              <Button component={NextLink} href="#services" variant="outlined">
                Review Services
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
