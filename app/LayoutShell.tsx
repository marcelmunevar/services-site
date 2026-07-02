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
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          bgcolor: "background.paper",
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
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                fontWeight: 700,
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
                sx={{ fontSize: "0.9rem" }}
              >
                Home
              </Button>
              <Button
                component={NextLink}
                href="/services"
                color="inherit"
                sx={{ fontSize: "0.9rem" }}
              >
                Services
              </Button>
              <Button
                component={NextLink}
                href="/contact-us"
                variant="contained"
                sx={{ fontSize: "0.9rem" }}
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
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
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
                sx={{ fontWeight: 500 }}
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
