import type { icons } from "@/base-components/Lucide";

export type LucideIcon = keyof typeof icons;
export type MessageDirection = "incoming" | "outgoing";

export interface MenuAction {
  label: string;
  icon: LucideIcon;
}

export interface MessageItem {
  id: string;
  direction: MessageDirection;
  body: string;
  time?: string;
  avatarIndex: number;
  typing?: boolean;
}

export interface MessageDayGroup {
  date?: string;
  messages: MessageItem[];
}

export interface EmojiCategory {
  label: string;
  icon: LucideIcon;
  emojis: string[];
}
