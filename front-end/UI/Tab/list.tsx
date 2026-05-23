import * as React from "react";
import { cn } from "../lib/utils";
import { useTabStore } from "./store";
import type { TabListProps, TabRootProps } from "./types";

export function TabList({
  children,
  className,
  variant = "tabs",
  ...props
}: TabListProps) {
  const childrenArray = React.Children.toArray(children);
  const setList = useTabStore("Tab.List", (state) => state.setList);

  React.useEffect(() => {
    setList({ variant, count: childrenArray.length });
  }, [childrenArray.length, setList, variant]);

  return (
    <ul
      role="tablist"
      className={cn(
        variant === "tabs" &&
          "border-b border-slate-200 dark:border-darkmode-400",
        variant === "boxed-tabs" &&
          "p-1 border border-slate-200 rounded-lg dark:border-darkmode-400",
        "w-full flex",
        className
      )}
      {...props}
    >
      {childrenArray.map((child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { __index: index } as Partial<TabRootProps>)
          : child
      )}
    </ul>
  );
}
