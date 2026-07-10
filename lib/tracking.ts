/**
 * LY Corporation Tracking Utilities
 */

declare global {
  interface Window {
    lytag?: (args: any) => void;
  }
}

export const trackPurchase = () => {
  if (typeof window !== "undefined" && window.lytag) {
    window.lytag({
      type: "event",
      eventType: "purchase",
      tagId: "e112fbca-6451-4dff-a992-e5ef1388c8cd",
    });
    console.log("LY Tracking: purchase event triggered");
  }
};
