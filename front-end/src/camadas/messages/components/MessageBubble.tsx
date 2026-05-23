import fakerData from "@/utils/faker";
import { cn } from "../../../../UI/lib/utils";
import { MESSAGE_ACTIONS } from "../constants";
import type { MessageItem } from "../types";
import MessageActionMenu from "./MessageActionMenu";

interface MessageBubbleProps {
  message: MessageItem;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const outgoing = message.direction === "outgoing";
  const avatarMargin = outgoing ? "ml-5" : "mr-5";
  const menuMargin = outgoing ? "mr-3" : "ml-3";

  return (
    <>
      <div
        className={cn(
          "flex items-end mb-10",
          outgoing ? "float-right" : "float-left"
        )}
      >
        {!outgoing && <Avatar index={message.avatarIndex} className={avatarMargin} />}
        {outgoing && (
          <MessageActionMenu
            actions={MESSAGE_ACTIONS}
            className={cn("hidden my-auto sm:block", menuMargin)}
          />
        )}
        <div className="-mb-6">
          <div
            className={cn(
              "px-4 py-3 rounded-md",
              outgoing
                ? "text-white bg-primary"
                : "bg-slate-100 dark:bg-darkmode-400 text-slate-500",
              !outgoing && message.id === "m1" && "border border-slate-200/60"
            )}
          >
            {message.typing ? (
              <>
                {fakerData[0].users[0].name} {message.body}
                <span className="ml-1 typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </>
            ) : (
              message.body
            )}
          </div>
          {message.time && (
            <div className="mt-2 text-xs text-slate-500">{message.time}</div>
          )}
        </div>
        {!outgoing && !message.typing && (
          <MessageActionMenu
            actions={MESSAGE_ACTIONS}
            className={cn("hidden my-auto sm:block", menuMargin)}
          />
        )}
        {outgoing && <Avatar index={message.avatarIndex} className={avatarMargin} />}
      </div>
      <div className="clear-both" />
    </>
  );
}

interface AvatarProps {
  index: number;
  className: string;
}

function Avatar({ index, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex-none hidden w-10 h-10 sm:block image-fit",
        className
      )}
    >
      <img
        alt="Rocketman - HTML Admin Template"
        className="rounded-full"
        src={fakerData[index].photos[0]}
      />
    </div>
  );
}

export default MessageBubble;
