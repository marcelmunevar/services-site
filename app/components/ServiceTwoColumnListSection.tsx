import type { MouseEventHandler, ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { bulletListSx } from "./muiListStyles";

type ServiceTwoColumnCard = {
  title: string;
  items?: ReactNode[];
  body?: ReactNode;
  cta?: {
    label: string;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  };
};

type ServiceTwoColumnListSectionProps = {
  left: ServiceTwoColumnCard;
  right: ServiceTwoColumnCard;
};

function ServiceTwoColumnCardBlock({
  title,
  items,
  body,
  cta,
}: ServiceTwoColumnCard) {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h2">{title}</Typography>
        {items ? (
          <Box component="ul" sx={{ mt: 2, pl: 3, ...bulletListSx }}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Box>
        ) : null}
        {body ? (
          <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}>
            {body}
          </Typography>
        ) : null}
        {cta ? (
          <CardActions sx={{ px: 0, pt: 2 }}>
            <Button
              component={NextLink}
              href={cta.href}
              variant="contained"
              onClick={cta.onClick}
            >
              {cta.label}
            </Button>
          </CardActions>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function ServiceTwoColumnListSection({
  left,
  right,
}: ServiceTwoColumnListSectionProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2.5,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      }}
    >
      <ServiceTwoColumnCardBlock {...left} />
      <ServiceTwoColumnCardBlock {...right} />
    </Box>
  );
}
