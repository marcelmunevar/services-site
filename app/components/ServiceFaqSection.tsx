"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

type ServiceFaqSectionProps = {
  faqs: ServiceFaqItem[];
  title: string;
  eyebrow?: string;
};

export default function ServiceFaqSection({
  faqs,
  title,
  eyebrow,
}: ServiceFaqSectionProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "rgba(148, 163, 184, 0.35)",
        borderRadius: "1.8rem",
        bgcolor: "rgba(255,255,255,0.9)",
        boxShadow: "0 16px 55px rgba(2, 8, 20, 0.08)",
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
        {eyebrow ? (
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "text.secondary",
            }}
          >
            {eyebrow}
          </Typography>
        ) : null}

        <Typography
          variant="h2"
          sx={{ mt: eyebrow ? 1.5 : 0, fontSize: "2rem", mb: 2 }}
        >
          {title}
        </Typography>

        <Stack spacing={1.25}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid rgba(148, 163, 184, 0.35)",
                borderRadius: "1rem",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
