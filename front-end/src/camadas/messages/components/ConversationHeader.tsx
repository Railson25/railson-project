import fakerData from "@/utils/faker";
import Lucide from "@/base-components/Lucide";
import { CONVERSATION_ACTIONS } from "../constants";
import MessageActionMenu from "./MessageActionMenu";

function ConversationHeader() {
  return (
    <div className="flex flex-col px-5 py-4 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
      <div className="flex items-center">
        <div className="relative flex-none w-10 h-10 sm:w-12 sm:h-12 image-fit">
          <img
            alt="Rocketman - HTML Admin Template"
            className="rounded-full"
            src={fakerData[0].photos[0]}
          />
        </div>
        <div className="ml-3 mr-auto">
          <div className="flex items-center">
            <div className="text-base font-medium">
              {fakerData[0].users[0].name}
            </div>
            <div className="flex items-center px-2 py-0.5 text-xs ml-2 bg-success/20 border border-success/20 text-success rounded-md">
              <div className="w-1.5 h-1.5 bg-success rounded-full mr-1.5" />
              Online
            </div>
          </div>
          <div className="mt-0.5 text-slate-500 text-xs sm:text-sm">
            Project Manager
          </div>
        </div>
      </div>
      <div className="flex items-center px-5 pt-3 mt-5 -mx-5 border-t sm:ml-auto sm:mt-0 sm:border-0 border-slate-200/60 sm:pt-0 sm:mx-0 sm:px-0">
        <a href="#" className="w-5 h-5 text-slate-500">
          <Lucide icon="Search" className="w-5 h-5" />
        </a>
        <a href="#" className="w-5 h-5 ml-5 text-slate-500">
          <Lucide icon="UserPlus" className="w-5 h-5" />
        </a>
        <MessageActionMenu
          className="ml-auto sm:ml-3"
          buttonClassName="w-5 h-5 text-slate-500"
          actions={CONVERSATION_ACTIONS}
        />
      </div>
    </div>
  );
}

export default ConversationHeader;
