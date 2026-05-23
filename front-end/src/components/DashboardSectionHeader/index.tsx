import { cn } from "../../../UI/lib/utils";
import type { ReactNode } from "react";

type DashboardSectionHeaderAnimation = "intro-x" | "intro-y";

interface DashboardSectionHeaderProps {
  title: string;
  action?: ReactNode;
  animation?: DashboardSectionHeaderAnimation;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  viewMoreHref?: string;
  viewMoreLabel?: string;
}

function DashboardSectionHeader({
  title,
  action,
  animation = "intro-y",
  className,
  contentClassName,
  titleClassName,
  viewMoreHref,
  viewMoreLabel = "View More",
}: DashboardSectionHeaderProps) {
  return (
    <div
      className={cn(
        "items-center h-10",
        animation,
        action ? "block sm:flex" : "flex",
        className
      )}
    >
      <h2 className={cn("mr-5 text-lg font-medium truncate", titleClassName)}>
        {title}
      </h2>
      {action ? (
        <div
          className={cn(
            "mt-3 sm:ml-auto sm:mt-0",
            contentClassName
          )}
        >
          {action}
        </div>
      ) : (
        viewMoreHref && (
          <a
            href={viewMoreHref}
            className={cn("ml-auto truncate text-slate-500", contentClassName)}
          >
            {viewMoreLabel}
          </a>
        )
      )}
    </div>
  );
}

export default DashboardSectionHeader;
