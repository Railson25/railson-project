import Lucide from "@/base-components/Lucide";
import { Link } from "react-router-dom";
import { cn } from "../../../../UI/lib/utils";
import { EMAIL_FOLDER_ITEMS, EMAIL_LABEL_ITEMS } from "../constants";

type EmailSidebarProps = {
  activeFolder?: string;
};

function EmailSidebar({ activeFolder }: EmailSidebarProps) {
  return (
    <div className="col-span-12 p-5 border-b xl:col-span-4 2xl:col-span-2 xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 rounded-l-md">
      <div>
        {EMAIL_FOLDER_ITEMS.map((item, itemKey) => {
          const isActive = item.label === activeFolder;
          const className = cn(
            "flex items-center px-3 py-2 rounded-md",
            itemKey > 0 && "mt-2",
            isActive && "font-medium text-white bg-primary dark:bg-darkmode-800"
          );

          if (item.route) {
            return (
              <Link key={item.label} to={item.route} className={className}>
                <Lucide icon={item.icon} className="w-4 h-4 mr-2" />
                {item.label}
              </Link>
            );
          }

          return (
            <a
              key={item.label}
              href="#"
              onClick={(event) => event.preventDefault()}
              className={className}
            >
              <Lucide icon={item.icon} className="w-4 h-4 mr-2" />
              {item.label}
            </a>
          );
        })}
      </div>
      <div className="pt-4 mt-4 border-t border-slate-400/20 dark:border-darkmode-400">
        {EMAIL_LABEL_ITEMS.map((item, itemKey) => (
          <a
            key={item.label}
            href="#"
            onClick={(event) => event.preventDefault()}
            className={cn(
              "flex items-center px-3 py-2 truncate rounded-md",
              itemKey === 0 && "rounded-none",
              itemKey > 0 && "mt-2"
            )}
          >
            <div
              className={cn("w-2 h-2 mr-3 rounded-full", item.colorClassName)}
            />
            {item.label}
          </a>
        ))}
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="flex items-center px-3 py-2 mt-2 truncate rounded-md"
        >
          <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
        </a>
      </div>
    </div>
  );
}

export default EmailSidebar;
