import { Menu } from "@/base-components/Headless";
import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";
import {
  EMAIL_DETAIL_DATE,
  EMAIL_RECIPIENT_ACTIONS,
  EMAIL_REPLY_ACTIONS,
} from "../constants";
import EmailActionMenu from "./EmailActionMenu";
import EmailAttachments from "./EmailAttachments";

function EmailDetailContent() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-y-5">
        <h2 className="mr-auto text-2xl font-medium">
          {fakerData[0].news[0].title}
        </h2>
        <div className="flex items-center">
          <div className="">{EMAIL_DETAIL_DATE}</div>
          <a
            href="#"
            className="flex items-center justify-center w-5 h-5 ml-5"
          >
            <Lucide icon="Settings" className="w-4 h-4" />
          </a>
          <Menu>
            <Menu.Button className="flex items-center justify-center w-5 h-5 ml-5">
              <Lucide icon="CornerUpRight" className="w-4 h-4" />
            </Menu.Button>
            <EmailActionMenu actions={EMAIL_REPLY_ACTIONS} />
          </Menu>
          <a
            href="#"
            className="flex items-center justify-center w-5 h-5 ml-5"
          >
            <Lucide icon="ChevronLeft" className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-5 h-5 ml-5"
          >
            <Lucide icon="ChevronRight" className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="flex items-center mt-5">
        <div className="relative flex-none w-9 h-9 image-fit">
          <img
            alt="Rocketman - HTML Admin Template"
            className="rounded-full"
            src={fakerData[0].photos[0]}
          />
        </div>
        <div className="ml-3 mr-auto">
          <div className="flex flex-wrap items-center gap-y-1">
            <div className="mr-2 font-medium">{fakerData[0].users[0].name}</div>
            <div className="text-xs text-slate-500">
              {fakerData[0].users[0].email}
            </div>
          </div>
          <Menu placement="bottom-start">
            <Menu.Button className="flex items-center text-xs text-slate-500 mt-0.5">
              to me <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
            </Menu.Button>
            <EmailActionMenu actions={EMAIL_RECIPIENT_ACTIONS} />
          </Menu>
        </div>
      </div>
      <div className="mt-10">
        <p className="mt-5">Hi {fakerData[0].users[1].name},</p>
        <p className="mt-5">{fakerData[1].news[0].content}</p>
        <p className="mt-5">{fakerData[2].news[0].content}</p>
        <p className="mt-5">{fakerData[3].news[0].content}</p>
        <p className="mt-5">{fakerData[4].news[0].content}</p>
        <p className="mt-5">
          Regards, <br />
          {fakerData[0].users[0].name}
        </p>
      </div>
      <EmailAttachments />
    </>
  );
}

export default EmailDetailContent;
