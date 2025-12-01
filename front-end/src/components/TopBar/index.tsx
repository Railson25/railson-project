import { useEffect, useState } from "react";
import Lucide from "../../base-components/Lucide";
import { TopBarBreadcrumb } from "./top-bar-breadcrumb";
import { TopBarSearch } from "./top-bar-search";
import { TopBarSearchModal } from "./top-bar-search-modal";
import { TopBarNotifications } from "./top-bar-notifications";
import { TopBarInbox } from "./top-bar-inbox";
import { TopBarAccountMenu } from "./top-bar-account-menu";

type Props = { toggleMobileMenu: (event: React.MouseEvent) => void };

export default function TopBar({ toggleMobileMenu }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.body.addEventListener("keydown", handler);
    return () => document.body.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div className="h-[63px] z-[51] flex items-center relative xl:px-5">
        <TopBarBreadcrumb />

        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            onClick={toggleMobileMenu}
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center"
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 text-white rotate-90 dark:text-slate-500"
            />
          </div>
        </div>

        <TopBarSearch onOpen={() => setSearchOpen(true)} />

        <TopBarNotifications />

        <TopBarInbox />

        <TopBarAccountMenu />
      </div>

      <TopBarSearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
