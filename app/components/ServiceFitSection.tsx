import { Box, Card, CardContent, Typography } from "@mui/material";

type ServiceFitSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  callout: string;
};

export default function ServiceFitSection({
  eyebrow,
  title,
  description,
  callout,
}: ServiceFitSectionProps) {
  return (
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
            {eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1.5 }}>
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 2.5 }}>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
            {description}
          </Typography>
          <Box sx={{ borderLeft: 3, borderColor: "primary.main", pl: 2.5 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {callout}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
