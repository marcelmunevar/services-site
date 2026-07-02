"use client";

import { useSearchParams } from "next/navigation";

export default function ContactStatus() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (status === "success") {
    return (
      <p
        className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800"
        role="status"
        aria-live="polite"
      >
        Thanks, your message was sent successfully. We will reach out soon.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p
        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
        role="status"
        aria-live="polite"
      >
        We could not send your message right now. Please try again in a moment.
      </p>
    );
  }

  return null;
}
