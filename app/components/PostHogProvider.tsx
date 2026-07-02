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
    let initialized = false;

    function getCookie(name: string) {
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)"),
      );
      return match ? decodeURIComponent(match[2]) : null;
    }

    function hasAnalyticsConsent() {
      const cookie = getCookie("cookieyes-consent");
      if (!cookie) return false;

      return cookie.includes("analytics:yes");
    }

    function initIfAllowed() {
      if (initialized) return;

      if (hasAnalyticsConsent()) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
          api_host: "/ingest",
          ui_host: "https://us.posthog.com",
          defaults: "2026-01-30",
          capture_exceptions: true,
          debug: process.env.NODE_ENV === "development",
        });

        initialized = true;
      }
    }

    // initial attempt
    initIfAllowed();

    // watch for cookie changes (CookieYes updates cookie dynamically)
    const interval = setInterval(initIfAllowed, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
