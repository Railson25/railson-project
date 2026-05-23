import type { ReactNode } from "react";
import { cn } from "../../../../UI/lib/utils";
import EmailPageHeader from "./EmailPageHeader";
import EmailSidebar from "./EmailSidebar";

type EmailLayoutProps = {
  activeFolder?: string;
  children: ReactNode;
  contentClassName?: string;
};

function EmailLayout({
  activeFolder,
  children,
  contentClassName,
}: EmailLayoutProps) {
  return (
    <>
      <EmailPageHeader />
      <div className="grid grid-cols-12 mt-5 box">
        <EmailSidebar activeFolder={activeFolder} />
        <div
          className={cn(
            "col-span-12 xl:col-span-8 2xl:col-span-10",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default EmailLayout;
