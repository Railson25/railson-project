import type { icons } from "@/base-components/Lucide";

export type LucideIcon = keyof typeof icons;

export type FileIconVariant = "empty-directory" | "directory" | "file" | "image";

export type TrendDirection = "up" | "down";
export type TrendTone = "success" | "danger";
export type SemanticTone = "primary" | "pending" | "warning" | "success";

export interface DashboardAction {
  label: string;
  icon: LucideIcon;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface GeneralReportMetric {
  label: string;
  value: string;
  icon: LucideIcon;
  tone: SemanticTone;
  trend: {
    label: string;
    tooltip: string;
    direction: TrendDirection;
    tone: TrendTone;
  };
}

export interface CountryStat {
  name: string;
  value: string;
  flagUrl: string;
}

export interface SellerReportRow {
  label: string;
  today: string;
  yesterday: string;
  change: string;
  trend: TrendDirection;
  tone: TrendTone;
  chartIndex: number;
}

export interface SellerAudienceItem {
  label: string;
  value: string;
  dotClassName: string;
}

export interface SharedFile {
  name: string;
  description: string;
  variant: FileIconVariant;
}

export interface ImportantNote {
  title: string;
  description: string;
}

export interface BrowserVisitor {
  name: string;
  percentage: string;
  imageUrl: string;
}

export interface SalesPerformanceLegendItem {
  content: string;
  className: string;
}
