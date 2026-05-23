import type { icons } from "@/base-components/Lucide";

export type DetailInfoItem = {
  icon: keyof typeof icons;
  label: string;
  value: string;
  href?: string;
  tone?: "success";
};

export type DetailInfoSection = {
  title: string;
  items: DetailInfoItem[];
};
