import { cn } from "../../../../UI/lib/utils";
import { ORDER_TRACKING_STEPS } from "../constants";

function OrderTrackingPanel() {
  return (
    <div className="p-5 mt-5 box intro-y">
      <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="text-base font-medium truncate">
          Tracking Information
        </div>
      </div>
      <div className="pb-3">
        <div className="relative overflow-hidden -ml-4 md:-ml-8 before:content-[''] before:absolute before:w-px before:bg-slate-200/60 before:mx-auto before:left-0 before:right-0 before:top-[12%] before:bottom-[9%] before:dark:bg-darkmode-400">
          {ORDER_TRACKING_STEPS.map((step) => (
            <div
              key={step.title}
              className={cn(
                "mb-3 last:mb-0 relative",
                step.active
                  ? "before:content-[''] before:absolute before:w-6 before:h-6 before:bg-primary/20 before:rounded-full before:inset-0 before:m-auto before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:inset-0 after:m-auto after:border-4 after:border-white/60 after:dark:border-darkmode-300"
                  : "before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200"
              )}
            >
              <div className="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]">
                {step.date}
              </div>
              <div className="rounded-md px-4 py-3 text-left ml-[55%]">
                <div className="font-medium">{step.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-500">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderTrackingPanel;
