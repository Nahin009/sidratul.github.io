export function trackEvent(
    eventName: string,
    parameters: Record<string, string> = {}
  ) {
    if (typeof window === "undefined") return;
  
    const gtag = (window as any).gtag;
  
    if (typeof gtag !== "function") return;
  
    gtag("event", eventName, parameters);
  }