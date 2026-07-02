import { Box, Card, CardContent, Typography } from "@mui/material";

type PricingPlan = {
  title: string;
  price: string;
  description: string;
};

type ServicePricingSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  plans: PricingPlan[];
};

export default function ServicePricingSection({
  eyebrow,
  title,
  description,
  plans,
}: ServicePricingSectionProps) {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
        <Typography variant="overline" color="text.secondary">
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1.5 }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 820, color: "text.secondary" }}>
          {description}
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          }}
        >
          {plans.map((plan) => (
            <Card key={plan.title}>
              <CardContent>
                <Typography variant="h4">{plan.title}</Typography>
                <Typography variant="h3" sx={{ mt: 1 }}>
                  {plan.price}
                </Typography>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>
                  {plan.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
