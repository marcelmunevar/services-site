"use client";

import { Suspense } from "react";
import posthog from "posthog-js";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ContactStatus from "../components/ContactStatus";

export default function ContactUsContent() {
  const handleEmailClick = () => {
    posthog.capture("contact_email_clicked", { source: "contact_us_page" });
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        flex: 1,
        py: { xs: 6, sm: 8 },
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.25rem", sm: "3rem" },
            color: "text.primary",
          }}
        >
          Contact Us
        </Typography>

        <Typography sx={{ maxWidth: 760, color: "text.secondary" }}>
          Share your website goals and current setup. We will recommend the
          right engagement model and next steps.
        </Typography>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h2" sx={{ fontSize: "1.25rem", mb: 1 }}>
              Email
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Send inquiries to{" "}
              <Link
                href="mailto:hello@example.com"
                onClick={handleEmailClick}
                sx={{ color: "text.primary", fontWeight: 700 }}
              >
                hello@example.com
              </Link>
              .
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h2" sx={{ fontSize: "1.25rem", mb: 1 }}>
              Send a Message
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              Fill out the form below and we will get back to you shortly.
            </Typography>

            <Suspense>
              <ContactStatus />
            </Suspense>

            <Box
              component="form"
              action="/api/contact"
              method="post"
              sx={{ mt: 3 }}
            >
              <Stack spacing={2}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  required
                  fullWidth
                />

                <TextField
                  id="company"
                  name="company"
                  label="Company"
                  autoComplete="organization"
                  fullWidth
                />

                <TextField
                  id="website"
                  name="website"
                  label="Website URL"
                  placeholder="https://"
                  type="url"
                  fullWidth
                />

                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  type="email"
                  required
                  fullWidth
                />

                <TextField
                  id="service"
                  name="service"
                  label="Service Interest"
                  fullWidth
                />

                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  required
                  multiline
                  minRows={5}
                  fullWidth
                />

                <Box>
                  <Button type="submit" variant="contained" color="primary">
                    Send Message
                  </Button>
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
