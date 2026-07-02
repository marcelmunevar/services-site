import type { ReactNode } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { bulletListSx } from "./muiListStyles";

type LegalDocumentSection = {
  heading?: string;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
};

type LegalDocumentContentProps = {
  title: string;
  lastUpdated: string;
  sections: LegalDocumentSection[];
};

export default function LegalDocumentContent({
  title,
  lastUpdated,
  sections,
}: LegalDocumentContentProps) {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        flex: 1,
        py: { xs: 6, sm: 8 },
        px: { xs: 2.5, sm: 4, lg: 5 },
      }}
    >
      <Box sx={{ display: "grid", gap: 3.5 }}>
        <Box sx={{ display: "grid", gap: 1 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2.25rem", sm: "3rem" } }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Last updated: {lastUpdated}
          </Typography>
        </Box>

        {sections.map((section, index) => (
          <Box
            key={section.heading ?? `section-${index}`}
            sx={{ display: "grid", gap: 1.5 }}
          >
            {section.heading ? (
              <Typography variant="h2" sx={{ fontSize: "1.35rem" }}>
                {section.heading}
              </Typography>
            ) : null}

            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <Typography
                key={paragraphIndex}
                sx={{ color: "text.secondary", lineHeight: 1.75 }}
              >
                {paragraph}
              </Typography>
            ))}

            {section.bullets ? (
              <Box component="ul" sx={{ pl: 3, ...bulletListSx }}>
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export function LegalMailtoLink({ email }: { email: string }) {
  return (
    <Link href={`mailto:${email}`} sx={{ ml: 0.5, fontWeight: 600 }}>
      {email}
    </Link>
  );
}
