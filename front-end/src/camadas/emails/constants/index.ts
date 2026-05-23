import type {
  EmailAttachment,
  EmailFolderItem,
  EmailLabelItem,
  EmailMenuAction,
} from "../types";

export const EMAILS_ROUTE = "/emails";
export const EMAIL_DETAIL_ROUTE = "/emails/detail";
export const EMAIL_COMPOSE_ROUTE = "/emails/compose";

export const EMAIL_FOLDER_ITEMS: EmailFolderItem[] = [
  {
    icon: "Mail",
    label: "Inbox",
    route: EMAILS_ROUTE,
  },
  {
    icon: "Star",
    label: "Marked",
  },
  {
    icon: "Inbox",
    label: "Draft",
  },
  {
    icon: "Send",
    label: "Sent",
  },
  {
    icon: "Trash",
    label: "Trash",
  },
];

export const EMAIL_LABEL_ITEMS: EmailLabelItem[] = [
  {
    label: "Custom Work",
    colorClassName: "bg-pending",
  },
  {
    label: "Important Meetings",
    colorClassName: "bg-success",
  },
  {
    label: "Work",
    colorClassName: "bg-warning",
  },
  {
    label: "Design",
    colorClassName: "bg-pending",
  },
  {
    label: "Next Week",
    colorClassName: "bg-danger",
  },
];

export const EMAIL_SELECTION_FILTERS = [
  "All",
  "None",
  "Read",
  "Unread",
  "Starred",
  "Unstarred",
];

export const EMAIL_DETAIL_DATE = "March 25, 09:29";
export const EMAIL_ATTACHMENTS_SUMMARY = "Attachments (2 files, 200,05 MB)";

export const EMAIL_ATTACHMENTS: EmailAttachment[] = [
  {
    fileName: "annual-report-2022.pdf",
    size: "180.05 MB",
  },
  {
    fileName: "weekly-report-2022.pdf",
    size: "20 MB",
  },
];

export const EMAIL_REPLY_ACTIONS: EmailMenuAction[] = [
  {
    icon: "Mail",
    label: "Reply to all",
  },
  {
    icon: "Mail",
    label: "Forward",
  },
  {
    icon: "Archive",
    label: "Report spam",
    dividerBefore: true,
  },
];

export const EMAIL_RECIPIENT_ACTIONS: EmailMenuAction[] = [
  {
    icon: "Mail",
    label: "Mark as read",
  },
  {
    icon: "Mail",
    label: "Mark as unread",
  },
  {
    icon: "Archive",
    label: "Move to spam",
  },
  {
    icon: "Trash",
    label: "Move to trash",
    dividerBefore: true,
  },
];

export const COMPOSE_INITIAL_RECIPIENTS = [
  "johnnydepp@left4code.com",
  "christianbale@left4code.com",
  "angelinajolie@left4code.com",
  "brucewillis@left4code.com",
  "nicolascage@left4code.com",
];

export const COMPOSE_INITIAL_CC: string[] = [];
export const COMPOSE_INITIAL_EDITOR_DATA = "<p>Content of the editor.</p>";

export const COMPOSE_EDITOR_CONFIG = {
  toolbar: {
    items: ["bold", "italic", "link"],
  },
};
