import type { icons } from "@/base-components/Lucide";

export type OrderListItem = (typeof import("@/utils/faker").default)[number];

export type OrderStatus =
  | "Pending Payment"
  | "Confirmed"
  | "Packing"
  | "Shipping"
  | "Completed";

export type OrderResponse = {
  id: string;
  invoice: string;
  purchaseDate: string;
  status: OrderStatus;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  buyerCity: string;
  paymentMethod: string;
  paymentDate: string;
  totalPrice: number;
  shippingCost: number;
  shippingInsurance: number;
  grandTotal: number;
  courier: string;
  trackingNumber: string;
  shippingAddress: string;
};

export type OrderDetailItem = {
  icon: keyof typeof icons;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  statusTone?: "success";
  alignValueEnd?: boolean;
};

export type OrderDetailSection = {
  title: string;
  actionLabel?: string;
  items: OrderDetailItem[];
};

export type TrackingStep = {
  date: string;
  title: string;
  description: string;
  active?: boolean;
};
