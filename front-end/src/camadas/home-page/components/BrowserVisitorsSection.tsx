import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { cn } from "../../../../UI/lib/utils";
import { BROWSER_VISITORS } from "../constants";

function BrowserVisitorsSection() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
      <DashboardSectionHeader
        title="Browser Visitors"
        animation="intro-x"
        viewMoreHref=""
      />
      <div className="mt-4">
        <div className="p-5 intro-x box">
          {BROWSER_VISITORS.map((browser, index) => (
            <div
              key={browser.name}
              className={cn("flex items-center", index > 0 && "mt-5")}
            >
              <img
                className="w-7 h-7"
                alt="Rocketman Tailwind HTML Admin Template"
                src={browser.imageUrl}
              />
              <div className="ml-4">{browser.name}</div>
              <div className="ml-auto">{browser.percentage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowserVisitorsSection;
