import type { DetailInfoSection } from "../types";

export const PRODUCT_DETAIL_ROUTE = "/products/detail";

export const INITIAL_PRODUCT_CATEGORIES = [
  "Photography",
  "christianbale@left4code.com",
  "angelinajolie@left4code.com",
  "brucewillis@left4code.com",
  "nicolascage@left4code.com",
];

export const PRODUCT_STATUS_OPTIONS = ["Active", "Inactive"];
export const PRODUCT_PAGE_SIZE_OPTIONS = ["10", "25", "35", "50"];

export const PRODUCT_TRANSACTION_TABS = [
  {
    icon: "FileText",
    label: "Active Transactions",
  },
  {
    icon: "Inbox",
    label: "Transaction History",
  },
  {
    icon: "HardDrive",
    label: "Stock Management",
  },
] as const;

export const PRODUCT_TRANSACTION_FILTER_STATUS_OPTIONS = [
  "Active",
  "Inactive",
];

export const PRODUCT_DETAIL_INFO: DetailInfoSection[] = [
  {
    title: "Product Details",
    items: [
      {
        icon: "Clipboard",
        label: "Stock-Keeping Unit",
        value: "INV-33807556",
      },
      {
        icon: "Calendar",
        label: "Release Date",
        value: "24 March 2022",
      },
      {
        icon: "Clock",
        label: "Condition",
        value: "New",
        tone: "success",
      },
    ],
  },
  {
    title: "Spesification",
    items: [
      {
        icon: "Calendar",
        label: "Brand",
        value: "Apple",
        href: "#",
      },
      {
        icon: "Clock",
        label: "Signal Status",
        value: "Activated",
      },
    ],
  },
];
