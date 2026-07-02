"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
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

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 6 }}>
        <Card
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "2rem",
            border: "1px solid rgba(255,255,255,0.65)",
            bgcolor: "rgba(255,255,255,0.8)",
            boxShadow: "0 26px 90px rgba(13,26,38,0.18)",
            backdropFilter: "blur(16px)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: -64,
              top: -64,
              width: 176,
              height: 176,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,95,45,0.45), rgba(255,95,45,0))",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: -48,
              bottom: -80,
              width: 208,
              height: 208,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(5,141,110,0.35), rgba(5,141,110,0))",
            }}
          />

          <CardContent
            sx={{
              position: "relative",
              zIndex: 1,
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 5,
              gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" },
              alignItems: "end",
            }}
          >
            <Box sx={{ display: "grid", gap: 3 }}>
              <Typography
                sx={{
                  display: "inline-block",
                  width: "fit-content",
                  borderRadius: "9999px",
                  border: "1px solid rgba(148,163,184,0.7)",
                  bgcolor: "rgba(255,255,255,0.7)",
                  px: 2,
                  py: 0.5,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#334155",
                  textTransform: "uppercase",
                }}
              >
                Professional Web Services
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  maxWidth: 760,
                  fontSize: { xs: "2.25rem", sm: "3rem", lg: "3.75rem" },
                  lineHeight: 1.04,
                }}
              >
                I help businesses with privacy, maintenance, consulting, and
                audits.
              </Typography>

              <Typography
                sx={{
                  maxWidth: 720,
                  fontSize: { xs: "1.05rem", sm: "1.2rem" },
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                I am a professional web partner focused on measurable outcomes:
                compliant tracking, healthier websites, faster delivery, and
                clear implementation standards.
              </Typography>

              <Typography
                sx={{
                  display: "inline-flex",
                  width: "fit-content",
                  alignItems: "center",
                  borderRadius: "9999px",
                  border: "1px solid rgba(148,163,184,0.8)",
                  bgcolor: "rgba(255,255,255,0.8)",
                  px: 2,
                  py: 1,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#334155",
                  textTransform: "uppercase",
                }}
              >
                7+ years supporting enterprise web programs across
                multi-subsidiary organizations
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component={NextLink}
                  href="#services"
                  variant="contained"
                  onClick={() => trackEvent("explore_services_clicked")}
                  sx={{ borderRadius: "9999px", px: 3, py: 1.2 }}
                >
                  Explore Services
                </Button>
                <Button
                  component={NextLink}
                  href="#contact"
                  variant="outlined"
                  onClick={() => trackEvent("book_discovery_call_clicked")}
                  sx={{ borderRadius: "9999px", px: 3, py: 1.2 }}
                >
                  Book a Discovery Call
                </Button>
              </Box>
            </Box>

            <Card
              variant="outlined"
              sx={{
                borderColor: "rgba(148,163,184,0.8)",
                bgcolor: "rgba(248,250,252,0.9)",
                borderRadius: "1.5rem",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "text.secondary",
                    textTransform: "uppercase",
                  }}
                >
                  Why clients work with me
                </Typography>

                <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
                  {[
                    {
                      title: "Clear technical leadership",
                      body: "You get practical recommendations, scoped execution, and no vague handoffs.",
                    },
                    {
                      title: "Implementation that is audit-ready",
                      body: "Privacy, accessibility, and tracking updates are documented and easy for teams to maintain.",
                    },
                    {
                      title: "Fast, reliable communication",
                      body: "Consistent progress updates, realistic timelines, and predictable delivery.",
                    },
                  ].map((item) => (
                    <Card
                      key={item.title}
                      variant="outlined"
                      sx={{ borderRadius: "1rem" }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Typography
                          sx={{ fontSize: "0.9rem", fontWeight: 700 }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.5,
                            fontSize: "0.88rem",
                            color: "text.secondary",
                          }}
                        >
                          {item.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card
          variant="outlined"
          sx={{
            borderRadius: "1.8rem",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: "0 16px 55px rgba(2,8,20,0.08)",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "text.secondary",
                  textTransform: "uppercase",
                }}
              >
                Enterprise Experience
              </Typography>
              <Typography
                variant="h2"
                sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "2.5rem" } }}
              >
                Proven compliance implementation across complex organizations
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 2 }}>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                I have spent over 7 years delivering implementation work for a
                large enterprise with many subsidiaries. I am experienced in
                rolling out compliance products and standards across different
                brands, teams, and site stacks while keeping execution practical
                and consistent.
              </Typography>
              <Box component="ul" sx={{ pl: 3, ...bulletListSx }}>
                <li>Multi-site and multi-team rollout planning</li>
                <li>Consent and tag governance across subsidiaries</li>
                <li>Clear documentation and handoff for internal teams</li>
                <li>Implementation aligned to enterprise constraints</li>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Box id="services" sx={{ display: "grid", gap: 2.5 }}>
          <Box sx={{ display: "grid", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "text.secondary",
                textTransform: "uppercase",
              }}
            >
              Services
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem" } }}
            >
              {serviceTracks.length} core services I offer
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
              <Card
                key={track.title}
                variant="outlined"
                sx={{
                  borderRadius: "1.5rem",
                  bgcolor: "rgba(255,255,255,0.85)",
                  boxShadow: "0 20px 70px rgba(15,23,42,0.09)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#c2410c",
                      textTransform: "uppercase",
                    }}
                  >
                    {track.value}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, fontSize: "1.5rem" }}>
                    {track.title}
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                    {track.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </Box>
                  <Button
                    component={NextLink}
                    href={track.href}
                    variant="outlined"
                    onClick={() =>
                      trackEvent("service_card_cta_clicked", {
                        service: track.title,
                      })
                    }
                    sx={{ mt: 2.5, borderRadius: "9999px", px: 2.5 }}
                  >
                    {track.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Card
          variant="outlined"
          sx={{
            borderRadius: "1.8rem",
            bgcolor: "#0f172a",
            color: "#f1f5f9",
            boxShadow: "0 16px 55px rgba(2,8,20,0.2)",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
              display: "grid",
              gap: 2.5,
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: "#cbd5e1",
                  textTransform: "uppercase",
                }}
              >
                Approach
              </Typography>
              <Typography
                variant="h3"
                sx={{ mt: 1.5, fontSize: "2rem", color: "#f8fafc" }}
              >
                Technical execution with business clarity.
              </Typography>
            </Box>
            <Typography sx={{ color: "#cbd5e1", lineHeight: 1.7 }}>
              I focus on implementation: consent tooling, GTM fixes,
              accessibility execution, and reliable delivery systems. When legal
              interpretation is required, I coordinate with legal teams while
              staying focused on technical outcomes.
            </Typography>
            <Typography sx={{ color: "#cbd5e1", lineHeight: 1.7 }}>
              Every engagement is built around clear deliverables, timelines,
              and reporting. Clients get confidence, not just code.
            </Typography>
          </CardContent>
        </Card>

        <Card
          id="contact"
          variant="outlined"
          sx={{
            borderRadius: "1.7rem",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: "0 16px 55px rgba(2,8,20,0.08)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "text.secondary",
                textTransform: "uppercase",
              }}
            >
              Next step
            </Typography>
            <Typography
              variant="h2"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "2.5rem" } }}
            >
              Let&apos;s talk about your website goals.
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 780, color: "text.secondary" }}
            >
              Share your current setup and priorities. I&apos;ll recommend the
              right engagement model, from monthly support to consulting or
              fixed-scope audits.
            </Typography>
            <Box sx={{ mt: 2.5, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                component={Link}
                href="mailto:hello@example.com"
                variant="contained"
                onClick={() =>
                  trackEvent("contact_email_clicked", {
                    source: "home_contact_section",
                  })
                }
                sx={{
                  borderRadius: "9999px",
                  px: 3,
                  bgcolor: "#f97316",
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                Email for Inquiries
              </Button>
              <Button
                component={NextLink}
                href="#services"
                variant="outlined"
                sx={{ borderRadius: "9999px", px: 3 }}
              >
                Review Services Again
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
