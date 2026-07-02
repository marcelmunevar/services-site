"use client";

import Alert from "@mui/material/Alert";
import { useSearchParams } from "next/navigation";

export default function ContactStatus() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (status === "success") {
    return (
      <Alert
        severity="success"
        variant="outlined"
        role="status"
        aria-live="polite"
        sx={{ mb: 2 }}
      >
        Thanks, your message was sent successfully. We will reach out soon.
      </Alert>
    );
  }

  if (status === "error") {
    return (
      <Alert
        severity="error"
        variant="outlined"
        role="status"
        aria-live="polite"
        sx={{ mb: 2 }}
      >
        We could not send your message right now. Please try again in a moment.
      </Alert>
    );
  }

  return null;
}
