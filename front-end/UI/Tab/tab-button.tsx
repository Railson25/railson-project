import * as React from "react";
import { cn } from "../lib/utils";
import { useCurrentTab, useTabStore } from "./store";
import type { TabButtonProps } from "./types";

export const TabButton = React.forwardRef<HTMLElement, TabButtonProps>(
  (
    { as: Component = "a", children, className, onClick, onKeyDown, ...props },
    ref
  ) => {
    const tab = useCurrentTab("Tab.Button");
    const selectedIndex = useTabStore(
      "Tab.Button",
      (state) => state.selectedIndex
    );
    const setSelectedIndex = useTabStore(
      "Tab.Button",
      (state) => state.setSelectedIndex
    );
    const groupId = useTabStore("Tab.Button", (state) => state.groupId);
    const buttonRefs = useTabStore("Tab.Button", (state) => state.buttonRefs);
    const variant = useTabStore("Tab.Button", (state) => state.variant);
    const count = useTabStore("Tab.Button", (state) => state.count);
    const isButton = Component === "button";
    const tabId = `${groupId}-tab-${tab.index}`;
    const panelId = `${groupId}-panel-${tab.index}`;

    const moveFocus = (nextIndex: number) => {
      const normalizedIndex = (nextIndex + count) % count;
      setSelectedIndex(normalizedIndex);
      window.setTimeout(() => buttonRefs.current[normalizedIndex]?.focus(), 0);
    };

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          buttonRefs.current[tab.index] = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        id={tabId}
        role="tab"
        aria-selected={tab.selected}
        aria-controls={panelId}
        tabIndex={tab.selected ? 0 : -1}
        type={isButton ? "button" : undefined}
        className={cn(
          "cursor-pointer block appearance-none px-5 py-2.5 border border-transparent text-slate-700 dark:text-slate-400 focus-visible:outline-none",
          tab.selected && "text-slate-800 dark:text-white",
          variant === "tabs" &&
            "block border-transparent rounded-t-md dark:border-transparent",
          variant === "tabs" &&
            tab.selected &&
            "bg-white border-slate-200 border-b-transparent font-medium dark:bg-transparent dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:border-x-darkmode-400",
          variant === "tabs" &&
            !tab.selected &&
            "hover:bg-slate-100 dark:hover:bg-darkmode-400 dark:hover:border-transparent",
          variant === "pills" && "rounded-md border-0",
          variant === "pills" &&
            tab.selected &&
            "bg-primary text-white font-medium",
          variant === "boxed-tabs" && "rounded-md py-1 dark:border-transparent",
          variant === "boxed-tabs" &&
            tab.selected &&
            "text-slate-700 border font-medium border-slate-200 bg-slate-50 dark:text-slate-300 dark:bg-darkmode-400 dark:border-darkmode-400",
          variant === "link-tabs" &&
            "border-b-2 border-transparent dark:border-transparent",
          variant === "link-tabs" &&
            tab.selected &&
            "border-b-primary font-medium dark:border-b-primary",
          className
        )}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            setSelectedIndex(tab.index);
          }
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            moveFocus(selectedIndex + 1);
          }

          if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            moveFocus(selectedIndex - 1);
          }

          if (event.key === "Home") {
            event.preventDefault();
            moveFocus(0);
          }

          if (event.key === "End") {
            event.preventDefault();
            moveFocus(count - 1);
          }
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

TabButton.displayName = "Tab.Button";
