import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  // cookieless_mode: "on_reject",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});

// if (typeof window !== "undefined") {
//   window.addEventListener("cookieyes_accepted", () => {
//     posthog.set_config({ persistence: "localStorage+cookie" });
//     posthog.opt_in_capturing();
//   });
//
//   window.addEventListener("cookieyes_rejected", () => {
//     posthog.set_config({ persistence: "memory" });
//     posthog.opt_out_capturing();
//   });
// }
