"use client";

import NextLink from "next/link";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { bulletListSx } from "../../components/muiListStyles";
import ServiceFaqSection from "../../components/ServiceFaqSection";

type FAQItem = {
  question: string;
  answer: string;
};

type DNSManagementEdgeServicesContentProps = {
  faqs: FAQItem[];
};

export default function DNSManagementEdgeServicesContent({
  faqs,
}: DNSManagementEdgeServicesContentProps) {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        flex: 1,
        py: { xs: 6, sm: 8 },
      }}
    >
      <Stack spacing={4}>
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
            DNS Management and Edge Services
          </Typography>
        </Breadcrumbs>

        <Card>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="overline" color="text.secondary">
              DNS and Edge Operations
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 1.5, fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Client-owned Cloudflare setup and managed DNS operations
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 860,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              Reduce DNS and edge infrastructure risk with a setup model where
              your team owns the Cloudflare account and we provide
              implementation and operational support. This includes nameserver
              migration planning, record governance, SSL/TLS hardening, and edge
              performance/security tuning.
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
              <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
                Included deliverables
              </Typography>
              <Box
                component="ul"
                sx={{
                  mt: 2,
                  pl: 3,
                  ...bulletListSx,
                }}
              >
                <li>
                  Cloudflare account and zone onboarding in a client-owned
                  tenant
                </li>
                <li>DNS record migration, validation, and cutover support</li>
                <li>SSL/TLS setup, redirect strategy, and origin hardening</li>
                <li>CDN caching rules and basic performance tuning</li>
                <li>WAF baseline and managed edge security controls</li>
                <li>Change request workflow and operational documentation</li>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h2" sx={{ fontSize: "1.5rem" }}>
                Engagement model
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                Engagements can be delivered as one-time implementation projects
                or ongoing managed operations retainers. Response windows,
                change volumes, and incident support expectations are defined in
                the scope of work.
              </Typography>
              <Button
                component={NextLink}
                href="/contact-us"
                variant="contained"
                sx={{ mt: 2.5 }}
              >
                Request DNS and edge support
              </Button>
            </CardContent>
          </Card>
        </Box>

        <ServiceFaqSection faqs={faqs} title="Frequently asked questions" />
      </Stack>
    </Container>
  );
}
