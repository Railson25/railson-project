import { FormCheck } from "@/base-components/Form";
import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";
import type { KeyboardEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../../UI/lib/utils";
import { EMAIL_DETAIL_ROUTE } from "../constants";

type EmailListItemProps = {
  email: (typeof fakerData)[number];
};

function EmailListItem({ email }: EmailListItemProps) {
  const navigate = useNavigate();

  const handleOpenEmail = () => {
    navigate(EMAIL_DETAIL_ROUTE);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpenEmail();
    }
  };

  const stopRowNavigation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const stopLinkNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="intro-y">
      <div
        role="button"
        tabIndex={0}
        onClick={handleOpenEmail}
        onKeyDown={handleKeyDown}
        className={cn(
          "transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60 dark:border-darkmode-400",
          "hover:scale-[1.02] hover:relative hover:z-20 hover:shadow-md hover:border-0 hover:rounded",
          !email.trueFalse[0] &&
            "bg-slate-100 text-slate-600 dark:text-slate-500 dark:bg-darkmode-400/70",
          email.trueFalse[0] &&
            "bg-white text-slate-800 dark:text-slate-300 dark:bg-darkmode-600"
        )}
      >
        <div className="flex px-5 py-3">
          <div className="flex items-center flex-none mr-5 w-72">
            <FormCheck.Input
              className="flex-none border-slate-400 checked:border-primary"
              type="checkbox"
              checked={!email.trueFalse[0]}
              onClick={stopRowNavigation}
              onChange={() => {}}
            />
            <a
              href="#"
              onClick={stopLinkNavigation}
              className="flex items-center justify-center flex-none w-5 h-5 ml-4 text-slate-400"
            >
              <Lucide icon="Star" className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={stopLinkNavigation}
              className="flex items-center justify-center flex-none w-5 h-5 ml-2 text-slate-400"
            >
              <Lucide icon="Bookmark" className="w-4 h-4" />
            </a>
            <div className="relative flex-none w-6 h-6 ml-5 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src={email.photos[0]}
              />
            </div>
            <div className={cn("ml-3 truncate", email.trueFalse[0] && "font-medium")}>
              {email.users[0].name}
            </div>
          </div>
          <div className="w-64 truncate sm:w-auto">
            <span className={cn("ml-3 truncate", email.trueFalse[0] && "font-medium")}>
              {email.news[0].superShortContent}
            </span>
            {email.news[0].shortContent}
          </div>
          <div
            className={cn(
              "pl-10 ml-auto whitespace-nowrap",
              email.trueFalse[0] && "font-medium"
            )}
          >
            {email.times[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailListItem;
