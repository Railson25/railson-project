import BrowserVisitorsSection from "./BrowserVisitorsSection";
import ImportantNotesSection from "./ImportantNotesSection";
import SharedFilesSection from "./SharedFilesSection";
import TransactionsSection from "./TransactionsSection";

function HomeSidebar() {
  return (
    <div className="col-span-12 2xl:col-span-3">
      <div className="h-full pb-6 2xl:border-l border-slate-300/50 2xl:pt-6">
        <div className="grid grid-cols-12 2xl:pl-6 gap-x-6 gap-y-8">
          <SharedFilesSection />
          <ImportantNotesSection />
          <BrowserVisitorsSection />
          <TransactionsSection />
        </div>
      </div>
    </div>
  );
}

export default HomeSidebar;
