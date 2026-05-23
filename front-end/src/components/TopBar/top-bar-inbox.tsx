import Lucide from "@/base-components/Lucide";

export function TopBarInbox() {
  return (
    <div className="mr-auto intro-x sm:mr-6">
      <div className="relative cursor-pointer text-white/70">
        <Lucide icon="Inbox" className="w-5 h-5 dark:text-slate-500" />
      </div>
    </div>
  );
}
