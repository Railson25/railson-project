import { MESSAGE_GROUPS } from "../constants";
import MessageBubble from "./MessageBubble";

function MessageThread() {
  return (
    <div className="flex-1 px-5 pt-5 overflow-y-scroll scrollbar-hidden">
      {MESSAGE_GROUPS.map((group, groupIndex) => (
        <div key={group.date ?? groupIndex}>
          {group.date && (
            <div className="mt-5 mb-10 text-xs text-center text-slate-400 dark:text-slate-500">
              {group.date}
            </div>
          )}
          {group.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MessageThread;
