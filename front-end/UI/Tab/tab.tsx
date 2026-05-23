import * as React from "react";
import { cn } from "../lib/utils";
import { CurrentTabProvider, useTabStore } from "./store";
import type { TabRootProps } from "./types";

export function TabRoot({
  children,
  className,
  fullWidth = true,
  __index = 0,
  ...props
}: TabRootProps) {
  const selectedIndex = useTabStore("Tab", (state) => state.selectedIndex);
  const variant = useTabStore("Tab", (state) => state.variant);
  const selected = selectedIndex === __index;

  return (
    <li
      className={cn(
        "focus-visible:outline-none",
        fullWidth && "flex-1",
        variant === "tabs" && "-mb-px",
        className
      )}
      {...props}
    >
      <CurrentTabProvider value={{ selected, index: __index }}>
        {typeof children === "function" ? children({ selected }) : children}
      </CurrentTabProvider>
    </li>
  );
}
