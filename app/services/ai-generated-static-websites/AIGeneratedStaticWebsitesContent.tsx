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
            AI-Generated Static Websites
          </Typography>
        </Breadcrumbs>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              AI-Generated Static Websites
            </Typography>
            <Typography variant="h1" sx={{ mt: 1.5 }}>
              A professional web presence, built with AI and deployed for free
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Get a fast, fully responsive static website without the cost of
              traditional web development. AI drafts the content, Next.js powers
              the build, and Vercel hosts it on a global CDN, often at zero
              hosting cost.
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
              <Typography variant="h2">What you get</Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>AI-powered content generation from your brief</li>
                <li>Next.js static site generation (fast, SEO-friendly)</li>
                <li>Vercel account creation and project setup</li>
                <li>Free tier Vercel deployment with global CDN</li>
                <li>Fully responsive, mobile-first design</li>
                <li>SEO-optimized markup and metadata</li>
                <li>Custom domain configuration (you provide the domain)</li>
                <li>Automatic HTTPS and deployment automation</li>
                <li>No monthly hosting cost for initial deployment</li>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2">Best for</Typography>
              <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
                <li>Personal and professional portfolios</li>
                <li>Product or service landing pages</li>
                <li>Documentation and knowledge base sites</li>
                <li>Small business brochure websites</li>
                <li>Event or campaign pages</li>
                <li>
                  Anyone who wants a fast, professional site without ongoing
                  hosting bills
                </li>
              </Box>
              <Button
                component={NextLink}
                href="/#contact"
                variant="contained"
                onClick={() => trackConsultation()}
                sx={{ mt: 3 }}
              >
                Book a discovery call
              </Button>
            </CardContent>
          </Card>
        </Box>

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
                href="/#contact"
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
