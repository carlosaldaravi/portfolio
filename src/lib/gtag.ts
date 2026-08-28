/**
 * Thin typed wrapper over the gtag.js queue injected by `components/analytics.tsx`.
 *
 * `window.gtag` only exists once the visitor has accepted analytics cookies and
 * the script has loaded, so every call is optional by design: with consent
 * refused there is simply nothing to send to.
 */

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: "event" | "config" | "js", target: string, params?: GtagParams) => void;
  }
}

/**
 * GA4 event names accept only letters, digits and underscores, must start with
 * a letter and are capped at 40 characters. `TRACKING_TYPES` keeps the readable
 * labels; this turns them into valid names ("Download CV" -> "download_cv").
 */
export function toEventName(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

export function sendEvent(label: string, params: GtagParams = {}): void {
  window.gtag?.("event", toEventName(label), params);
}
