import Lucide from "@/base-components/Lucide";
import Litepicker from "@/base-components/Litepicker";
import { FormSelect } from "@/base-components/Form";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import ReportLineChart1 from "@/components/ReportLineChart1";
import { useState } from "react";
import {
  DATE_RANGE_PICKER_OPTIONS,
  SALES_REPORT_FILTER_OPTIONS,
} from "../constants";

function SalesReportSection() {
  const [salesReportFilter, setSalesReportFilter] = useState<string>();

  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-6 mt-7">
      <DashboardSectionHeader
        title="Sales Report"
        contentClassName="relative text-slate-500"
        action={
          <>
            <Lucide
              icon="Calendar"
              className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
            />
            <Litepicker
              value={salesReportFilter}
              onChange={setSalesReportFilter}
              options={DATE_RANGE_PICKER_OPTIONS}
              className="pl-10 sm:w-56 !box"
            />
          </>
        }
      />
      <div className="p-5 mt-12 intro-y box sm:mt-4">
        <div className="items-center md:flex">
          <div className="mr-auto">
            <div className="flex items-center">
              <div className="text-2xl font-medium">$141,120.00</div>
              <div className="flex items-center ml-3 cursor-pointer text-success">
                +5.2% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
              </div>
            </div>
            <div className="mt-1 text-slate-500">Total Assets</div>
          </div>
          <FormSelect
            className="w-40 mt-3 md:ml-auto md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
            aria-label="General report filter"
          >
            {SALES_REPORT_FILTER_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </FormSelect>
        </div>
        <div className="mt-6">
          <ReportLineChart1 height={260} />
        </div>
      </div>
    </div>
  );
}

export default SalesReportSection;
