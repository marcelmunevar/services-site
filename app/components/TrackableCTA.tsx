"use client";

import posthog from "posthog-js";

interface TrackableCTAProps {
  href: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
  className?: string;
  children: React.ReactNode;
}

export default function TrackableCTA({
  href,
  eventName,
  eventProperties,
  className,
  children,
}: TrackableCTAProps) {
  const handleClick = () => {
    posthog.capture(eventName, eventProperties);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
