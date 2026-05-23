import * as React from "react";
import type { TabPanelProps, TabPanelsProps } from "./types";

export function TabPanels({ children, className, ...props }: TabPanelsProps) {
  return (
    <div className={className} {...props}>
      {React.Children.toArray(children).map((child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { __index: index } as Partial<TabPanelProps>)
          : child
      )}
    </div>
  );
}
