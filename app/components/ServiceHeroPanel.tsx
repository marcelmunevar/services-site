import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

type ProofPoint = {
  value: string;
  label: string;
};

type GuidancePoint = {
  title: string;
  body: string;
};

type ServiceHeroPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  proofPoints: ProofPoint[];
  sideTitle: string;
  guidancePoints: GuidancePoint[];
};

export default function ServiceHeroPanel({
  eyebrow,
  title,
  description,
  proofPoints,
  sideTitle,
  guidancePoints,
}: ServiceHeroPanelProps) {
  return (
    <Card>
      <CardContent
        sx={{
          p: { xs: 3, sm: 5 },
          display: "grid",
          gap: 5,
          gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
          alignItems: "start",
        }}
      >
        <Box sx={{ display: "grid", gap: 3 }}>
          <Typography variant="overline" color="text.secondary">
            {eyebrow}
          </Typography>
          <Typography variant="h1" sx={{ mt: 1.5, maxWidth: 760 }}>
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: 820,
              color: "text.secondary",
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            }}
          >
            {proofPoints.map((item) => (
              <Box
                key={item.label}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  p: 2,
                }}
              >
                <Typography variant="h3">{item.value}</Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 0.5, color: "text.secondary" }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="overline" color="text.secondary">
              {sideTitle}
            </Typography>
            <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
              {guidancePoints.map((item, index) => (
                <Box key={item.title}>
                  <Box
                    sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "primary.main",
                        fontSize: "0.9rem",
                      }}
                    >
                      {index + 1}
                    </Avatar>
                    <Box sx={{ display: "grid", gap: 0.5 }}>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                  {index < guidancePoints.length - 1 ? (
                    <Divider sx={{ mt: 2 }} />
                  ) : null}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
