"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";

type LayoutShellProps = {
  children: ReactNode;
  year: number;
};

export default function LayoutShell({ children, year }: LayoutShellProps) {
  return (
    <Box
      className="page-wrap"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          borderBottom: "1px solid rgba(148, 163, 184, 0.35)",
          bgcolor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: "unset" }}>
          <Container
            maxWidth="lg"
            sx={{
              py: 1.8,
              px: { xs: 2.5, sm: 4, lg: 5 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <MuiLink
              component={NextLink}
              href="/"
              underline="none"
              color="text.primary"
              sx={{
                fontFamily: "var(--font-display), 'Trebuchet MS', sans-serif",
                letterSpacing: "-0.03em",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                lineHeight: 1.1,
              }}
            >
              Web Growth Studio
            </MuiLink>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1.25 },
              }}
            >
              <Button
                component={NextLink}
                href="/"
                color="inherit"
                sx={{
                  borderRadius: "9999px",
                  px: { xs: 1.5, sm: 2 },
                  py: 0.75,
                  fontSize: "0.86rem",
                  fontWeight: 700,
                }}
              >
                Home
              </Button>
              <Button
                component={NextLink}
                href="/services"
                color="inherit"
                sx={{
                  borderRadius: "9999px",
                  px: { xs: 1.5, sm: 2 },
                  py: 0.75,
                  fontSize: "0.86rem",
                  fontWeight: 700,
                }}
              >
                Services
              </Button>
              <Button
                component={NextLink}
                href="/contact-us"
                variant="contained"
                sx={{
                  borderRadius: "9999px",
                  px: { xs: 1.75, sm: 2.25 },
                  py: 0.8,
                  fontSize: "0.86rem",
                  fontWeight: 700,
                }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {children}

      <Box
        component="footer"
        sx={{
          mt: 7,
          borderTop: "1px solid rgba(148, 163, 184, 0.4)",
          bgcolor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(4px)",
          py: 4,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, lg: 5 } }}>
          <Box sx={{ display: "grid", gap: 2.5 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2.5,
              }}
            >
              <MuiLink
                component={NextLink}
                href="/privacy-policy"
                underline="hover"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component={NextLink}
                href="/terms"
                underline="hover"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                Terms
              </MuiLink>
              <MuiLink
                component={NextLink}
                href="/contact-us"
                underline="hover"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                Contact Us
              </MuiLink>
              <MuiLink
                href="#"
                className="cky-banner-element"
                underline="hover"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                Cookie Settings
              </MuiLink>
            </Box>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {year} Web Growth Studio. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
