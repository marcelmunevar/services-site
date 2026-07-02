"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

let initialized = false;

function initPostHog() {
  if (initialized) return;
  if (typeof window === "undefined") return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });

  initialized = true;
}

export default function PostHogProvider() {
  useEffect(() => {
    const tryInit = () => {
      const consent = (window as any).CY_CONSENT_STATUS;

      const analyticsAllowed =
        consent?.analytics === true || consent?.advertisement === true;

      if (analyticsAllowed) {
        initPostHog();
      }
    };

    // initial check
    tryInit();

    // CookieYes updates consent dynamically
    window.addEventListener("cookieyes_consent_update", tryInit);

    return () => {
      window.removeEventListener("cookieyes_consent_update", tryInit);
    };
  }, []);

  return null;
}
