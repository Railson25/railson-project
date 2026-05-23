import Lucide from "@/base-components/Lucide";
import Tippy from "@/base-components/Tippy";
import { FormSelect } from "@/base-components/Form";
import Button from "@/base-components/Button";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { cn } from "../../../../UI/lib/utils";
import {
  SALES_PERFORMANCE_DAYS,
  SALES_PERFORMANCE_LEGEND,
  SALES_PERFORMANCE_MONTHS,
  SALES_PERFORMANCE_WEEKS,
  YEAR_OPTIONS,
} from "../constants";
import { getSalesPerformanceClass } from "../utils";

function SalesPerformanceSection() {
  return (
    <div className="col-span-12 mt-4">
      <DashboardSectionHeader
        title="Sales Performance"
        contentClassName="flex items-center"
        action={
          <>
            <FormSelect className="w-32 !box" aria-label="General report filter">
              {YEAR_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </FormSelect>
            <Button className="flex items-center ml-3 !box text-slate-600 dark:text-slate-300">
              <Lucide icon="FileText" className="hidden w-4 h-4 mr-2 sm:block" />
              Export to PDF
            </Button>
          </>
        }
      />
      <div className="p-5 mt-12 intro-y box sm:mt-4">
        <div className="overflow-x-auto overflow-y-hidden">
          <div className="min-w-[1000px] xl:min-w-0">
            <div className="flex gap-[0.6rem]">
              <div className="w-full -mr-12">
                <div className="h-5 text-xs text-slate-500"></div>
                <div className="grid grid-cols-4 mt-2 gap-[0.4rem] text-slate-500">
                  <div>
                    <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                    {SALES_PERFORMANCE_DAYS.slice(0, 3).map((day) => (
                      <div key={day}>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-2 relative">
                          <div className="absolute inset-y-0 my-auto text-xs -mt-0.5 text-slate-500">
                            {day}
                          </div>
                        </div>
                        <div className="rounded-[0.17rem] w-full pt-[100%] mb-2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {SALES_PERFORMANCE_MONTHS.map((month) => (
                <div key={month} className="w-full">
                  <div className="h-5 text-xs text-slate-500">{month}</div>
                  <div className="grid grid-cols-4 mt-2 gap-[0.4rem]">
                    {SALES_PERFORMANCE_WEEKS.map((week) => (
                      <div key={week}>
                        {SALES_PERFORMANCE_DAYS.map((day) => (
                          <Tippy
                            as="div"
                            key={day}
                            content={`${Math.floor(
                              Math.random() * 50 + 1
                            )} sales on 2 Sep, 2021`}
                            className={cn(
                              "rounded-[0.17rem] w-full pt-[100%] mb-2 cursor-pointer zoom-in bg-primary",
                              getSalesPerformanceClass()
                            )}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center w-full mt-3 xl:justify-end">
              <div className="mr-2 text-xs text-slate-500">Less</div>
              {SALES_PERFORMANCE_LEGEND.map((item) => (
                <Tippy
                  as="div"
                  key={item.content}
                  content={item.content}
                  className={cn(
                    "rounded-[0.17rem] mr-2 w-3.5 h-3.5 -mt-0.5",
                    item.className
                  )}
                />
              ))}
              <div className="mr-2 text-xs text-slate-500">More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPerformanceSection;
