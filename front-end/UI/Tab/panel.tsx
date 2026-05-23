import * as React from "react";
import { cn } from "../lib/utils";
import { useTabStore } from "./store";
import type { TabPanelProps } from "./types";

export function TabPanel({
  children,
  className,
  __index = 0,
  ...props
}: TabPanelProps) {
  const selectedIndex = useTabStore("Tab.Panel", (state) => state.selectedIndex);
  const groupId = useTabStore("Tab.Panel", (state) => state.groupId);
  const selected = selectedIndex === __index;
  const [rendered, setRendered] = React.useState(selected);

  React.useEffect(() => {
    if (selected) {
      setRendered(true);
      return;
    }

    const timeout = window.setTimeout(() => setRendered(false), 300);

    return () => window.clearTimeout(timeout);
  }, [selected]);

  if (!rendered) {
    return null;
  }

  return (
    <div
      id={`${groupId}-panel-${__index}`}
      role="tabpanel"
      aria-labelledby={`${groupId}-tab-${__index}`}
      aria-hidden={!selected}
      className={cn(
        "transition-opacity duration-300",
        selected ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {typeof children === "function" ? children({ selected }) : children}
    </div>
  );
}
