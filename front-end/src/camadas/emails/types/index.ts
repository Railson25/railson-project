import type { icons } from "@/base-components/Lucide";

export type EmailFolderItem = {
  icon: keyof typeof icons;
  label: string;
  route?: string;
};

export type EmailLabelItem = {
  label: string;
  colorClassName: string;
};

export type EmailAttachment = {
  fileName: string;
  size: string;
};

export type EmailMenuAction = {
  icon: keyof typeof icons;
  label: string;
  dividerBefore?: boolean;
};
