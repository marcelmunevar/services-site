import NextLink from "next/link";
import { Breadcrumbs, Link, Typography } from "@mui/material";

type ServiceBreadcrumbsProps = {
  currentLabel: string;
  includeServicesLink?: boolean;
};

export default function ServiceBreadcrumbs({
  currentLabel,
  includeServicesLink = true,
}: ServiceBreadcrumbsProps) {
  return (
    <Breadcrumbs aria-label="Breadcrumb" separator="/">
      <Link component={NextLink} href="/" color="inherit" underline="hover">
        Home
      </Link>
      {includeServicesLink ? (
        <Link
          component={NextLink}
          href="/services"
          color="inherit"
          underline="hover"
        >
          Services
        </Link>
      ) : null}
      <Typography color="text.primary" sx={{ fontWeight: 700 }}>
        {currentLabel}
      </Typography>
    </Breadcrumbs>
  );
}
