import Lucide from "@/base-components/Lucide";
import { cn } from "../../../../UI/lib/utils";
import type { DetailInfoSection } from "../types";

type ProductInfoCardProps = {
  section: DetailInfoSection;
};

function ProductInfoCard({ section }: ProductInfoCardProps) {
  return (
    <div className="p-5 box intro-y">
      <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
        <div className="text-base font-medium truncate">{section.title}</div>
        <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
      </div>
      {section.items.map((item, itemKey) => (
        <div key={`${item.label}-${item.value}`} className={cn("flex items-center", itemKey > 0 && "mt-3")}>
          <Lucide icon={item.icon} className="w-4 h-4 mr-2 text-slate-500" />
          {item.label}:
          {item.href ? (
            <a href={item.href} className="ml-1 underline decoration-dotted">
              {item.value}
            </a>
          ) : item.tone === "success" ? (
            <span className="text-xs text-success bg-success/20 border border-success/20 rounded-md px-1.5 py-0.5 ml-1">
              {item.value}
            </span>
          ) : (
            <span className="ml-1">{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductInfoCard;
