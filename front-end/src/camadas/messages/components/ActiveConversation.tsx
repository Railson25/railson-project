import ConversationHeader from "./ConversationHeader";
import MessageComposer from "./MessageComposer";
import MessageThread from "./MessageThread";

function ActiveConversation() {
  return (
    <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
      <div className="box intro-y">
        <div className="h-[768px] flex flex-col">
          <ConversationHeader />
          <MessageThread />
          <MessageComposer />
        </div>
      </div>
    </div>
  );
}

export default ActiveConversation;
