import type { EmojiCategory, MenuAction, MessageDayGroup } from "../types";

export const CONVERSATION_LIST_LIMIT = 7;

export const CONVERSATION_ACTIONS: MenuAction[] = [
  { label: "Share Contact", icon: "Share2" },
  { label: "Settings", icon: "Settings" },
];

export const MESSAGE_ACTIONS: MenuAction[] = [
  { label: "Reply", icon: "CornerUpLeft" },
  { label: "Delete", icon: "Trash" },
];

export const MESSAGE_GROUPS: MessageDayGroup[] = [
  {
    messages: [
      {
        id: "m1",
        direction: "incoming",
        body: "Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor",
        time: "2 mins ago",
        avatarIndex: 0,
      },
      {
        id: "m2",
        direction: "outgoing",
        body: "Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor",
        time: "1 mins ago",
        avatarIndex: 1,
      },
      {
        id: "m3",
        direction: "outgoing",
        body: "Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor",
        time: "59 secs ago",
        avatarIndex: 1,
      },
    ],
  },
  {
    date: "12 June 2020",
    messages: [
      {
        id: "m4",
        direction: "incoming",
        body: "Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor",
        time: "10 secs ago",
        avatarIndex: 0,
      },
      {
        id: "m5",
        direction: "outgoing",
        body: "Lorem ipsum",
        time: "1 secs ago",
        avatarIndex: 1,
      },
      {
        id: "m6",
        direction: "incoming",
        body: "is typing",
        avatarIndex: 0,
        typing: true,
      },
    ],
  },
];

export const EMOJI_CATEGORIES: EmojiCategory[] = [
  {
    label: "Recent",
    icon: "Clock",
    emojis: ["😀", "😂", "😍", "😎", "😭", "😡", "👍", "🙏", "🎉", "🔥"],
  },
  {
    label: "People",
    icon: "Smile",
    emojis: ["😀", "😃", "😄", "😁", "😆", "😉", "😊", "😋", "😘", "😜"],
  },
  {
    label: "Nature",
    icon: "Leaf",
    emojis: ["🌱", "🌿", "🌲", "🌻", "🌙", "⭐", "☀️", "🌧️", "❄️", "🌈"],
  },
  {
    label: "Food",
    icon: "Coffee",
    emojis: ["🍎", "🍕", "🍔", "🍟", "🌮", "🍣", "🍩", "🍪", "☕", "🍰"],
  },
  {
    label: "Symbols",
    icon: "Hash",
    emojis: ["❤️", "💯", "✅", "❌", "⭐", "⚠️", "❓", "❗", "™️", "©️"],
  },
];
