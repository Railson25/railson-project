import Lucide from "@/base-components/Lucide";
import Litepicker from "@/base-components/Litepicker";
import Tippy from "@/base-components/Tippy";
import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { useState } from "react";
import { cn } from "../../../../UI/lib/utils";
import {
  DATE_RANGE_PICKER_OPTIONS,
  GENERAL_REPORT_METRICS,
} from "../constants";
import type { GeneralReportMetric, SemanticTone, TrendTone } from "../types";

const CARD_FRAME_CLASS =
  "before:content-[''] before:w-[96%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60";

const METRIC_ITEM_DECORATION_CLASS = [
  "[&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:hidden [&:not(:last-child)]:xl:before:block [&:not(:last-child)]:before:w-[13px] [&:not(:last-child)]:before:h-[12px] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:rounded-full [&:not(:last-child)]:before:bg-slate-200 [&:not(:last-child)]:before:top-0 [&:not(:last-child)]:before:right-0 [&:not(:last-child)]:before:-mr-[7px] [&:not(:last-child)]:before:-mt-[25px] [&:not(:last-child)]:before:dark:bg-darkmode-500",
  "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:hidden [&:not(:last-child)]:xl:after:block [&:not(:last-child)]:after:w-[11px] [&:not(:last-child)]:after:h-[14px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:rounded-full [&:not(:last-child)]:after:bg-slate-100 [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:-mr-[6px] [&:not(:last-child)]:after:-mt-[28px] [&:not(:last-child)]:after:dark:bg-darkmode-700",
  "[&:not(:last-child)>[data-content]]:before:content-[''] [&:not(:last-child)>[data-content]]:before:hidden [&:not(:last-child)>[data-content]]:xl:before:block [&:not(:last-child)>[data-content]]:before:w-[13px] [&:not(:last-child)>[data-content]]:before:h-[12px] [&:not(:last-child)>[data-content]]:before:absolute [&:not(:last-child)>[data-content]]:before:rounded-full [&:not(:last-child)>[data-content]]:before:bg-slate-200 [&:not(:last-child)>[data-content]]:before:bottom-0 [&:not(:last-child)>[data-content]]:before:right-0 [&:not(:last-child)>[data-content]]:before:-mr-[7px] [&:not(:last-child)>[data-content]]:before:-mb-[25px] [&:not(:last-child)>[data-content]]:before:dark:bg-darkmode-700/60",
  "[&:not(:last-child)>[data-content]]:after:content-[''] [&:not(:last-child)>[data-content]]:after:hidden [&:not(:last-child)>[data-content]]:xl:after:block [&:not(:last-child)>[data-content]]:after:w-[11px] [&:not(:last-child)>[data-content]]:after:h-[14px] [&:not(:last-child)>[data-content]]:after:absolute [&:not(:last-child)>[data-content]]:after:rounded-full [&:not(:last-child)>[data-content]]:after:bg-slate-50 [&:not(:last-child)>[data-content]]:after:bottom-0 [&:not(:last-child)>[data-content]]:after:right-0 [&:not(:last-child)>[data-content]]:after:-mr-[6px] [&:not(:last-child)>[data-content]]:after:-mb-[28px] [&:not(:last-child)>[data-content]]:after:dark:bg-darkmode-600",
];

const TONE_CLASS: Record<SemanticTone, string> = {
  primary: "text-primary bg-primary/20 border-primary/20",
  pending: "text-pending bg-pending/20 border-pending/20",
  warning: "text-warning bg-warning/20 border-warning/20",
  success: "text-success bg-success/20 border-success/20",
};

const TREND_TONE_CLASS: Record<TrendTone, string> = {
  success: "text-success",
  danger: "text-danger",
};

function GeneralReportSection() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();

  return (
    <div className="col-span-12 mt-6">
      <DashboardSectionHeader
        title="General Report"
        contentClassName="relative text-slate-500"
        action={
          <>
            <Lucide
              icon="Calendar"
              className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3"
            />
            <Litepicker
              value={generalReportFilter}
              onChange={setGeneralReportFilter}
              options={DATE_RANGE_PICKER_OPTIONS}
              className="pl-10 sm:w-56 !box"
            />
          </>
        }
      />
      <div className={cn("relative mt-12 intro-y sm:mt-4", CARD_FRAME_CLASS)}>
        <div className="grid grid-cols-12 gap-0 py-0 divide-x divide-y box xl:py-5 xl:divide-y-0 divide-dashed divide-slate-200 dark:divide-white/5">
          {GENERAL_REPORT_METRICS.map((metric, index) => (
            <GeneralReportMetricCard
              key={metric.label}
              metric={metric}
              isSecondItem={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface GeneralReportMetricCardProps {
  metric: GeneralReportMetric;
  isSecondItem: boolean;
}

function GeneralReportMetricCard({
  metric,
  isSecondItem,
}: GeneralReportMetricCardProps) {
  return (
    <div
      className={cn(
        "relative col-span-12 px-5 py-5 xl:py-0 sm:col-span-6 xl:col-span-3",
        isSecondItem && "sm:!border-t-0",
        METRIC_ITEM_DECORATION_CLASS
      )}
    >
      <div data-content>
        <div className="flex">
          <div
            className={cn(
              "flex items-center justify-center border rounded-full w-[2.2rem] h-[2.2rem]",
              TONE_CLASS[metric.tone]
            )}
          >
            <Lucide className="w-[1.3rem] h-[1.3rem]" icon={metric.icon} />
          </div>
          <div className="ml-auto">
            <Tippy
              as="div"
              className={cn(
                "flex items-center pl-2 cursor-pointer",
                TREND_TONE_CLASS[metric.trend.tone]
              )}
              content={metric.trend.tooltip}
            >
              {metric.trend.label}
              <Lucide
                icon={metric.trend.direction === "up" ? "ArrowUp" : "ArrowDown"}
                className="w-4 h-4 ml-0.5"
              />
            </Tippy>
          </div>
        </div>
        <div className="mt-6 text-2xl font-medium leading-7">
          {metric.value}
        </div>
        <div className="mt-1 text-slate-500">{metric.label}</div>
      </div>
    </div>
  );
}

export default GeneralReportSection;
