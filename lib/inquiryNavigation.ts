export type InquiryType = "bulk" | "franchise";

export const INQUIRY_TYPE_KEY = "inquiryType";
export const INQUIRY_PRODUCT_KEY = "inquiryProduct";
export const INQUIRY_NAV_EVENT = "inquiry-navigate";

export interface InquiryNavigateDetail {
  type: InquiryType;
  product?: string;
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

  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
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
