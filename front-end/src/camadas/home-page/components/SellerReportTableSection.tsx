import Lucide from "@/base-components/Lucide";
import { FormSelect } from "@/base-components/Form";
import Table from "@/base-components/Table";
import Button from "@/base-components/Button";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import ReportLineChart2 from "@/components/ReportLineChart2";
import { cn } from "../../../../UI/lib/utils";
import { Tab } from "../../../../UI";
import {
  SELLER_REPORT_ROWS,
  SELLER_REPORT_TABS,
  YEAR_OPTIONS,
} from "../constants";
import type { TrendTone } from "../types";

const TREND_TONE_CLASS: Record<TrendTone, string> = {
  success: "text-success",
  danger: "text-danger",
};

function SellerReportTableSection() {
  return (
    <div className="col-span-12 mt-4 lg:col-span-9">
      <DashboardSectionHeader
        title="Seller Report"
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
              Export to Excel
            </Button>
          </>
        }
      />
      <Tab.Group className="p-5 mt-12 intro-y box sm:mt-4">
        <div className="items-center sm:flex">
          <div className="mr-auto">
            <div className="flex items-center">
              <div className="text-2xl font-medium">24.112</div>
              <div className="flex items-center ml-3 cursor-pointer text-danger">
                -2.5% <Lucide icon="ArrowUp" className="w-4 h-4 ml-0.5" />
              </div>
            </div>
            <div className="mt-1 text-slate-500">New Transactions</div>
          </div>
          <Tab.List
            variant="boxed-tabs"
            className="mt-3 rounded-lg sm:w-64 sm:mt-0"
          >
            {SELLER_REPORT_TABS.map((tab) => (
              <Tab key={tab}>
                <Tab.Button className="w-full px-2" as="button">
                  {tab}
                </Tab.Button>
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <div className="overflow-x-auto overflow-y-hidden rounded-lg">
              <Table striped className="-mb-1 table-striped">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className="!font-normal text-slate-500">
                      #
                    </Table.Th>
                    <Table.Th className="!font-normal text-slate-500 text-right">
                      TODAY
                    </Table.Th>
                    <Table.Th className="!font-normal text-slate-500 text-right">
                      YESTERDAY
                    </Table.Th>
                    <Table.Th className="!font-normal text-slate-500 text-right">
                      %CHANGE
                    </Table.Th>
                    <Table.Th className="!font-normal text-slate-500 text-center">
                      YTD TREND
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {SELLER_REPORT_ROWS.map((row) => (
                    <Table.Tr key={row.label}>
                      <Table.Td className="text-slate-500 whitespace-nowrap">
                        {row.label}
                      </Table.Td>
                      <Table.Td
                        className={cn("text-right", TREND_TONE_CLASS[row.tone])}
                      >
                        {row.today}
                      </Table.Td>
                      <Table.Td className="text-right">{row.yesterday}</Table.Td>
                      <Table.Td className={TREND_TONE_CLASS[row.tone]}>
                        <div className="flex items-center justify-end">
                          {row.change}
                          <Lucide
                            icon={row.trend === "up" ? "ArrowUp" : "ArrowDown"}
                            className="w-4 h-4 ml-0.5"
                          />
                        </div>
                      </Table.Td>
                      <Table.Td className="flex justify-center">
                        <div className="w-48 -mr-4 -my-2.5">
                          <ReportLineChart2
                            height={49}
                            index={row.chartIndex}
                          />
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default SellerReportTableSection;
