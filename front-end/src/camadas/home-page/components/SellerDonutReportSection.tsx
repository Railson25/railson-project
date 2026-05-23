import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import { cn } from "../../../../UI/lib/utils";
import { SELLER_AUDIENCE } from "../constants";

function SellerDonutReportSection() {
  return (
    <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto">
      <DashboardSectionHeader title="Seller Report" viewMoreHref="" />
      <div className="p-5 mt-4 intro-y box">
        <div className="relative px-3">
          <div className="w-40 mx-auto lg:w-auto">
            <ReportDonutChart1 className="relative z-10 mt-2" height={210} />
          </div>
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
            <div className="text-2xl font-medium leading-7">1.215</div>
            <div className="mt-1 text-slate-500">Total Sellers</div>
          </div>
        </div>
        <div className="mx-auto mt-6 w-52 lg:w-auto">
          {SELLER_AUDIENCE.map((item, index) => (
            <div
              key={item.label}
              className={cn("flex items-center", index > 0 && "mt-4")}
            >
              <div
                className={cn(
                  "w-2 h-2 mr-3 border rounded-full",
                  item.dotClassName
                )}
              />
              <span className="truncate">{item.label}</span>
              <span className="ml-auto">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerDonutReportSection;
