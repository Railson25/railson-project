import type { icons } from "@/base-components/Lucide";

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
