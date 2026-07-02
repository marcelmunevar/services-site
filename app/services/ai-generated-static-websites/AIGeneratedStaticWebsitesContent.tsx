"use client";

import posthog from "posthog-js";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import ServiceBreadcrumbs from "../../components/ServiceBreadcrumbs";
import ServiceFitSection from "../../components/ServiceFitSection";
import ServiceFaqSection from "../../components/ServiceFaqSection";
import ServiceHeroPanel from "../../components/ServiceHeroPanel";
import ServiceTwoColumnListSection from "../../components/ServiceTwoColumnListSection";
import { bulletListSx } from "../../components/muiListStyles";

type FAQItem = {
  question: string;
  answer: string;
};

type AIGeneratedStaticWebsitesContentProps = {
  faqs: FAQItem[];
};

export default function AIGeneratedStaticWebsitesContent({
  faqs,
}: AIGeneratedStaticWebsitesContentProps) {
  const trackConsultation = (source?: string) => {
    posthog.capture("consultation_cta_clicked", {
      service: "ai-generated-static-websites",
      ...(source ? { source } : {}),
    });
  };

  const guidancePoints = [
    {
      title: "Use it when speed matters most",
      body: "This service fits teams that need a credible web presence quickly without committing to a full traditional build process.",
    },
    {
      title: "Start lean and iterate later",
      body: "It works well when the initial priority is launch speed, clear content, and low hosting overhead rather than custom application complexity.",
    },
    {
      title: "Keep ownership and costs simple",
      body: "The model is designed around straightforward deployment, low platform overhead, and a path to scale only if needed.",
    },
  ];

  const proofPoints = [
    { value: "Static", label: "Fast, SEO-friendly delivery" },
    { value: "Vercel", label: "Low-friction deployment" },
    { value: "AI-assisted", label: "Faster content production" },
  ];

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ flex: 1, py: { xs: 6, sm: 8 } }}
    >
      <Box sx={{ display: "grid", gap: 4 }}>
        <ServiceBreadcrumbs currentLabel="AI-Generated Static Websites" />

        <ServiceHeroPanel
          eyebrow="AI-Generated Static Websites"
          title="A professional web presence, built with AI and deployed for free"
          description="Get a fast, fully responsive static website without the cost of traditional web development. AI drafts the content, Next.js powers the build, and Vercel hosts it on a global CDN, often at zero hosting cost."
          proofPoints={proofPoints}
          sideTitle="When this is a fit"
          guidancePoints={guidancePoints}
        />

        <ServiceFitSection
          eyebrow="Engagement fit"
          title="Best for teams that need a fast launch without a heavy build process"
          description="This service is designed for businesses, creators, and internal teams that need a polished website quickly and do not need a complex web application on day one."
          callout="It is a strong fit when launch speed, simplicity, and low ongoing platform cost matter more than deep customization."
        />

        <ServiceTwoColumnListSection
          left={{
            title: "What you get",
            items: [
              "AI-powered content generation from your brief",
              "Next.js static site generation (fast, SEO-friendly)",
              "Vercel account creation and project setup",
              "Free tier Vercel deployment with global CDN",
              "Fully responsive, mobile-first design",
              "SEO-optimized markup and metadata",
              "Custom domain configuration (you provide the domain)",
              "Automatic HTTPS and deployment automation",
              "No monthly hosting cost for initial deployment",
            ],
          }}
          right={{
            title: "Best for",
            items: [
              "Personal and professional portfolios",
              "Product or service landing pages",
              "Documentation and knowledge base sites",
              "Small business brochure websites",
              "Event or campaign pages",
              "Anyone who wants a fast, professional site without ongoing hosting bills",
            ],
            cta: {
              label: "Book a discovery call",
              href: "/contact-us",
              onClick: () => trackConsultation(),
            },
          }}
        />

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Process
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              From brief to live site in days
            </Typography>
            <Typography
              sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}
            >
              A straightforward process designed to move quickly without
              sacrificing quality.
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
                  <Typography variant="overline" color="text.secondary">
                    Step 1
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    AI Generation
                  </Typography>
                  <Typography
                    sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}
                  >
                    You share a brief about your goals, audience, and brand. AI
                    drafts the copy and structure. You review and approve before
                    anything is built.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    Step 2
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    Build and Review
                  </Typography>
                  <Typography
                    sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}
                  >
                    Next.js compiles your approved content into a static site.
                    You review a preview link and request any final adjustments
                    before going live.
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    Step 3
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    Deploy to Vercel
                  </Typography>
                  <Typography
                    sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}
                  >
                    We create your Vercel account, connect your domain, and
                    deploy. Your site is live on a global CDN with automatic
                    HTTPS and continuous deployment.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Hosting and Costs
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Vercel free tier: what is included and what to know
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: "grid",
                gap: 3,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              <Box>
                <Typography variant="h4">Free tier includes</Typography>
                <Box component="ul" sx={{ mt: 1.5, pl: 3, ...bulletListSx }}>
                  <li>Global CDN hosting (100GB bandwidth/month)</li>
                  <li>Automatic HTTPS and SSL certificates</li>
                  <li>Custom domain support</li>
                  <li>Continuous deployment from Git</li>
                  <li>Preview deployments for every push</li>
                  <li>Serverless functions (limited invocations)</li>
                </Box>
              </Box>

              <Box>
                <Typography variant="h4">
                  Free tier limitations to note
                </Typography>
                <Box component="ul" sx={{ mt: 1.5, pl: 3, ...bulletListSx }}>
                  <li>100GB bandwidth cap per month</li>
                  <li>Hobby plan is for personal, non-commercial use</li>
                  <li>Limited build minutes per month</li>
                  <li>No team collaboration on free plan</li>
                  <li>Commercial projects require a Pro plan (paid upgrade)</li>
                </Box>
              </Box>
            </Box>

            <Typography
              sx={{ mt: 2.5, color: "text.secondary", lineHeight: 1.7 }}
            >
              For most portfolios and small business landing pages, the free
              tier is more than enough. If your site grows, upgrading to Vercel
              Pro is straightforward and reasonably priced. Your only required
              ongoing cost is your domain name (typically $10-$20/year).
            </Typography>
          </CardContent>
        </Card>

        <ServiceFaqSection faqs={faqs} eyebrow="FAQ" title="Common questions" />

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              Get started
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5 }}>
              Ready to launch your site?
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                maxWidth: 820,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Book a short discovery call to share your goals. I will confirm
              whether a static site is the right fit, outline the timeline, and
              explain the cost breakdown (usually just your domain).
            </Typography>
            <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              <Button
                component={NextLink}
                href="/contact-us"
                variant="contained"
                onClick={() => trackConsultation("bottom_cta")}
              >
                Book a discovery call
              </Button>
              <Button component={NextLink} href="/services" variant="outlined">
                View all services
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
