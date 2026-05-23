import type { OrderDetailSection, TrackingStep } from "../types";

export const ORDER_DETAIL_ROUTE = "/orders/detail";

export const ORDER_STATUS_OPTIONS = [
  "Pending Payment",
  "Confirmed",
  "Packing",
  "Shipping",
  "Completed",
];

export const ORDER_PAGE_SIZE_OPTIONS = ["10", "25", "35", "50"];

export const ORDER_DETAIL_SECTIONS: OrderDetailSection[] = [
  {
    title: "Transaction Details",
    items: [
      {
        icon: "Clipboard",
        label: "Invoice",
        value: "INV/20220217/MPL/2053411933",
        href: "#",
      },
      {
        icon: "Calendar",
        label: "Purchase Date",
        value: "24 March 2022",
      },
      {
        icon: "Clock",
        label: "Transaction Status",
        value: "Completed",
        statusTone: "success",
      },
    ],
  },
  {
    title: "Buyer Details",
    actionLabel: "View Details",
    items: [
      {
        icon: "Clipboard",
        label: "Name",
        value: "",
        href: "#",
      },
      {
        icon: "Calendar",
        label: "Phone Number",
        value: "+71828273732",
      },
      {
        icon: "MapPin",
        label: "Address",
        value: "260 W. Storm Street New York, NY 10025.",
      },
    ],
  },
  {
    title: "Payment Details",
    items: [
      {
        icon: "Clipboard",
        label: "Payment Method",
        value: "Direct bank transfer",
        alignValueEnd: true,
      },
      {
        icon: "CreditCard",
        label: "Total Price (2 items)",
        value: "$12,500.00",
        alignValueEnd: true,
      },
      {
        icon: "CreditCard",
        label: "Total Shipping Cost (800 gr)",
        value: "$1,500.00",
        alignValueEnd: true,
      },
      {
        icon: "CreditCard",
        label: "Shipping Insurance",
        value: "$600.00",
        alignValueEnd: true,
      },
      {
        icon: "CreditCard",
        label: "Grand Total",
        value: "$15,000.00",
        alignValueEnd: true,
      },
    ],
  },
  {
    title: "Shipping Information",
    items: [
      {
        icon: "Clipboard",
        label: "Courier",
        value: "Left4code Express",
      },
      {
        icon: "Calendar",
        label: "Tracking Number",
        value: "003005580322",
        copyable: true,
      },
      {
        icon: "MapPin",
        label: "Address",
        value: "260 W. Storm Street New York, NY 10025.",
      },
    ],
  },
];

export const ORDER_TRACKING_STEPS: TrackingStep[] = [
  {
    date: "25 Mar 2022, 10:28 AM",
    title: "Transaction Completed.",
    description: "Funds will be forwarded to the seller.",
    active: true,
  },
  {
    date: "24 Mar 2022, 11:01 AM",
    title: "The order has arrived.",
    description: "Received by Angeline.",
  },
  {
    date: "23 Mar 2022, 12:21 AM",
    title: "The order has been sent.",
    description: "The order is being shipped by courier.",
  },
  {
    date: "23 Mar 2022, 08:28 AM",
    title: "Payment Verified.",
    description: "Payment has been received.",
  },
];
