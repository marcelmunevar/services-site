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
    <Card>
      <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
        {eyebrow ? (
          <Typography variant="overline" color="text.secondary">
            {eyebrow}
          </Typography>
        ) : null}

        <Typography variant="h2" sx={{ mt: eyebrow ? 1 : 0, mb: 2 }}>
          {title}
        </Typography>

        <Stack spacing={1.25}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              sx={{
                border: "1px solid",
                borderColor: "divider",
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
                <Typography variant="h4">{faq.question}</Typography>
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
