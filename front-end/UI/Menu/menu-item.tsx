import * as React from "react";
import { cn } from "../lib/utils";
import { useMenuStore } from "./store";
import type { MenuItemProps } from "./types";

export const MenuItem = React.forwardRef<HTMLElement, MenuItemProps>(
  (
    {
      as: Component = "a",
      children,
      className,
      disabled,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const close = useMenuStore("Menu.Item", (state) => state.close);

    return (
      <Component
        ref={ref}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        className={cn(
          "cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 focus-visible:outline-none focus-visible:bg-slate-200/60 dark:focus-visible:bg-darkmode-400",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);

          if (!event.defaultPrevented) {
            close(true);
          }
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);

          if (event.defaultPrevented || disabled) {
            return;
          }

          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
          }
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

MenuItem.displayName = "Menu.Item";
