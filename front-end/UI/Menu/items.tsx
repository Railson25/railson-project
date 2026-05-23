import * as React from "react";
import { cn } from "../lib/utils";
import { useMenuStore } from "./store";
import type { MenuItemsProps } from "./types";

export function MenuItems({
  children,
  className,
  placement = "bottom-end",
  onKeyDown,
  ...props
}: MenuItemsProps) {
  const open = useMenuStore("Menu.Items", (state) => state.open);
  const itemsRef = useMenuStore("Menu.Items", (state) => state.itemsRef);
  const itemsId = useMenuStore("Menu.Items", (state) => state.itemsId);
  const close = useMenuStore("Menu.Items", (state) => state.close);
  const focusItem = useMenuStore("Menu.Items", (state) => state.focusItem);
  const [rendered, setRendered] = React.useState(open);

  React.useEffect(() => {
    if (open) {
      setRendered(true);
      return;
    }

    const timeout = window.setTimeout(() => setRendered(false), 150);

    return () => window.clearTimeout(timeout);
  }, [open]);

  if (!rendered) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute z-30 transition-all ease-linear duration-150",
        placement === "top-start" && "left-0 bottom-[100%]",
        placement === "top" && "left-[50%] translate-x-[-50%] bottom-[100%]",
        placement === "top-end" && "right-0 bottom-[100%]",
        placement === "right-start" && "left-[100%] translate-y-[-50%]",
        placement === "right" && "left-[100%] top-[50%] translate-y-[-50%]",
        placement === "right-end" && "left-[100%] bottom-0",
        placement === "bottom-end" && "top-[100%] right-0",
        placement === "bottom" && "top-[100%] left-[50%] translate-x-[-50%]",
        placement === "bottom-start" && "top-[100%] left-0",
        placement === "left-start" && "right-[100%] translate-y-[-50%]",
        placement === "left" && "right-[100%] top-[50%] translate-y-[-50%]",
        placement === "left-end" && "right-[100%] bottom-0",
        open
          ? "mt-1 visible opacity-100 translate-y-0"
          : "mt-5 invisible opacity-0 translate-y-1"
      )}
    >
      <div
        ref={itemsRef}
        id={itemsId}
        role="menu"
        className={cn(
          "p-2 shadow-[0px_3px_5px_#0000000b] bg-white border border-slate-200 rounded-lg dark:bg-darkmode-600 dark:border-darkmode-500",
          className
        )}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (event.key === "Escape") {
            event.preventDefault();
            close(true);
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            focusItem("next");
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            focusItem("previous");
          }

          if (event.key === "Home") {
            event.preventDefault();
            focusItem("first");
          }

          if (event.key === "End") {
            event.preventDefault();
            focusItem("last");
          }
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
