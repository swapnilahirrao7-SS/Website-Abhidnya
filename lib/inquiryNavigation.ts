export type InquiryType = "bulk" | "franchise";

export const INQUIRY_TYPE_KEY = "inquiryType";
export const INQUIRY_PRODUCT_KEY = "inquiryProduct";
export const INQUIRY_NAV_EVENT = "inquiry-navigate";

export interface InquiryNavigateDetail {
  type: InquiryType;
  product?: string;
}

/** Blocks product infinite-scroll while navigating to Contact (All list expands mid-scroll). */
let productLoadPausedUntil = 0;

export function pauseProductInfiniteScroll(ms = 1600): void {
  productLoadPausedUntil = Date.now() + ms;
}

export function isProductInfiniteScrollPaused(): boolean {
  return Date.now() < productLoadPausedUntil;
}

const NAV_OFFSET_PX = 80;

export function scrollToContactSection(): void {
  pauseProductInfiniteScroll(1800);

  const el = document.getElementById("contact");
  if (!el) return;

  const scrollToTarget = (behavior: ScrollBehavior) => {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  scrollToTarget("smooth");

  // Re-align if product-grid growth shifted #contact during smooth scroll
  window.setTimeout(() => {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    if (Math.abs(window.scrollY - top) > 56) {
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    }
  }, 450);

  window.setTimeout(() => {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    if (Math.abs(window.scrollY - top) > 56) {
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    }
  }, 900);
}

export function navigateToInquiry(
  type: InquiryType,
  options?: { product?: string },
): void {
  sessionStorage.setItem(INQUIRY_TYPE_KEY, type);

  if (options?.product) {
    sessionStorage.setItem(INQUIRY_PRODUCT_KEY, options.product);
  } else {
    sessionStorage.removeItem(INQUIRY_PRODUCT_KEY);
  }

  window.dispatchEvent(
    new CustomEvent<InquiryNavigateDetail>(INQUIRY_NAV_EVENT, {
      detail: { type, product: options?.product },
    }),
  );

  scrollToContactSection();
}

export function readInquiryNavigation(): InquiryNavigateDetail | null {
  const type = sessionStorage.getItem(INQUIRY_TYPE_KEY);

  if (type !== "bulk" && type !== "franchise") {
    return null;
  }

  const product = sessionStorage.getItem(INQUIRY_PRODUCT_KEY) ?? undefined;

  return {
    type,
    product: product || undefined,
  };
}

export function clearInquiryNavigation(): void {
  sessionStorage.removeItem(INQUIRY_TYPE_KEY);
  sessionStorage.removeItem(INQUIRY_PRODUCT_KEY);
}
