import ActiveConversation from "../components/ActiveConversation";
import ConversationSidebar from "../components/ConversationSidebar";
import MessagesHeader from "../components/MessagesHeader";

function Main() {
  return (
    <>
      <MessagesHeader />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <ConversationSidebar />
        <ActiveConversation />
      </div>
    </>
  );
}

export default Main;
