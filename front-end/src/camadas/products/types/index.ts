import type { icons } from "@/base-components/Lucide";

export type ProductListItem = (typeof import("@/utils/faker").default)[number];

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

export type ProductStatus = "Active" | "Inactive";
export type ProductCondition = "New" | "Used" | "Refurbished";
export type ProductSignalStatus = "Activated" | "Deactivated";

export type ProductMutationResponse = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: ProductStatus;
  condition: ProductCondition;
  signalStatus: ProductSignalStatus;
  sku: string;
  releaseDate: string;
  brand: string;
  description: string;
  images: string[];
};
