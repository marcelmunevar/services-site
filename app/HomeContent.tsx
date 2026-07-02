"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
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
                I help businesses with privacy, maintenance, consulting, and
                audits.
              </Typography>

              <Typography sx={{ maxWidth: 720, color: "text.secondary" }}>
                I am a professional web partner focused on measurable outcomes:
                compliant tracking, healthier websites, faster delivery, and
                clear implementation standards.
              </Typography>

              <Chip
                label="7+ years supporting enterprise web programs across multi-subsidiary organizations"
                variant="outlined"
                sx={{ width: "fit-content" }}
              />

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
                  Book a Discovery Call
                </Button>
              </Box>
            </Box>

            <Card>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="overline" color="text.secondary">
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
                    <Card key={item.title}>
                      <CardContent sx={{ p: 2 }}>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
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
            <Typography variant="overline" color="text.secondary">
              Services
            </Typography>
            <Typography variant="h2">
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
                  <Button
                    component={NextLink}
                    href={track.href}
                    variant="outlined"
                    onClick={() =>
                      trackEvent("service_card_cta_clicked", {
                        service: track.title,
                      })
                    }
                    sx={{ mt: 2.5 }}
                  >
                    {track.cta}
                  </Button>
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
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              I focus on implementation: consent tooling, GTM fixes,
              accessibility execution, and reliable delivery systems. When legal
              interpretation is required, I coordinate with legal teams while
              staying focused on technical outcomes.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
              Every engagement is built around clear deliverables, timelines,
              and reporting. Clients get confidence, not just code.
            </Typography>
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
              >
                Email for Inquiries
              </Button>
              <Button component={NextLink} href="#services" variant="outlined">
                Review Services Again
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
