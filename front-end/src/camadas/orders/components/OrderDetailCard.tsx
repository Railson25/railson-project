import Lucide from "@/base-components/Lucide";
import { cn } from "../../../../UI/lib/utils";
import type { OrderDetailSection } from "../types";

type OrderDetailCardProps = {
  section: OrderDetailSection;
};

function OrderDetailCard({ section }: OrderDetailCardProps) {
  return (
    <div className="p-5 box intro-y">
      <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="text-base font-medium truncate">{section.title}</div>
        {section.actionLabel && (
          <a href="#" className="flex items-center ml-auto text-slate-500">
            <Lucide icon="Edit" className="w-4 h-4 mr-2" /> {section.actionLabel}
          </a>
        )}
      </div>
      {section.items.map((item, itemKey) => {
        const isTotal = item.label === "Grand Total";

        return (
          <div
            key={`${item.label}-${item.value}`}
            className={cn(
              "flex items-center",
              itemKey > 0 && "mt-3",
              isTotal &&
                "pt-5 mt-5 font-medium border-t border-slate-200/60 dark:border-darkmode-400"
            )}
          >
            <Lucide icon={item.icon} className="w-4 h-4 mr-2 text-slate-500" />
            {item.label}:
            {item.href ? (
              <a href={item.href} className="ml-1 underline decoration-dotted">
                {item.value}
              </a>
            ) : item.statusTone === "success" ? (
              <span className="text-xs text-success bg-success/30 border border-success/20 rounded-md px-1.5 py-0.5 ml-1">
                {item.value}
              </span>
            ) : (
              <div className={item.alignValueEnd ? "ml-auto" : "ml-1"}>
                {item.value}
              </div>
            )}
            {item.copyable && (
              <Lucide icon="Copy" className="w-4 h-4 ml-2 text-slate-500" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default OrderDetailCard;
