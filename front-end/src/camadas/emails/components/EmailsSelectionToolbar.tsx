import { FormCheck } from "@/base-components/Form";
import { Menu } from "@/base-components/Headless";
import Lucide from "@/base-components/Lucide";
import { EMAIL_SELECTION_FILTERS } from "../constants";

function EmailsSelectionToolbar() {
  return (
    <div className="flex flex-col-reverse px-5 pb-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
      <div className="flex items-center px-5 pt-5 mt-3 -mx-5 border-t sm:mt-0 sm:border-0 border-slate-200/60 sm:pt-0 sm:mx-0 sm:px-0">
        <FormCheck.Input
          className="border-slate-400 checked:border-primary"
          type="checkbox"
        />
        <Menu className="ml-1" placement="bottom-start">
          <Menu.Button className="block w-5 h-5">
            <Lucide icon="ChevronDown" className="w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="w-40">
            {EMAIL_SELECTION_FILTERS.map((filter) => (
              <Menu.Item key={filter}>{filter}</Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <a
          href="#"
          className="flex items-center justify-center w-5 h-5 ml-5"
        >
          <Lucide icon="RefreshCw" className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-5 h-5 ml-5"
        >
          <Lucide icon="MoreHorizontal" className="w-4 h-4" />
        </a>
      </div>
      <div className="flex items-center sm:ml-auto">
        <div className="">1 - 50 of 5,238</div>
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
        <a
          href="#"
          className="flex items-center justify-center w-5 h-5 ml-5"
        >
          <Lucide icon="Settings" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default EmailsSelectionToolbar;
