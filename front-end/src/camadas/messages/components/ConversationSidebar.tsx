import fakerData from "@/utils/faker";
import { FormInput } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import _ from "lodash";
import { CONVERSATION_LIST_LIMIT } from "../constants";
import ConversationListItem from "./ConversationListItem";

function ConversationSidebar() {
  return (
    <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
      <div className="box intro-y">
        <div className="flex items-center px-5 pt-5">
          <div className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white rounded-full bg-primary">
            7
          </div>
          <div className="ml-2 font-medium">Unread Messages</div>
          <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
        </div>
        <div className="px-5 pb-5 mt-5">
          <div className="relative">
            <FormInput
              type="text"
              className="px-4 py-3 pl-10"
              placeholder="Search for messages or users..."
            />
            <Lucide
              icon="Search"
              className="absolute inset-y-0 left-0 w-5 h-5 my-auto ml-3 text-slate-400"
            />
          </div>
        </div>
        <div className="h-[642px] overflow-y-auto scrollbar-hidden">
          {_.take(fakerData, CONVERSATION_LIST_LIMIT).map((faker, fakerKey) => (
            <ConversationListItem
              key={fakerKey}
              faker={faker}
              active={fakerKey === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConversationSidebar;
