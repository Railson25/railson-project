import * as React from "react";
import { cn } from "../lib/utils";
import { useMenuStore } from "./store";
import type { MenuButtonProps } from "./types";
import { setElementRef } from "./utils";

export const MenuButton = React.forwardRef<HTMLElement, MenuButtonProps>(
  (
    { as: Component = "button", children, className, onClick, onKeyDown, ...props },
    ref
  ) => {
    const open = useMenuStore("Menu.Button", (state) => state.open);
    const buttonRef = useMenuStore("Menu.Button", (state) => state.buttonRef);
    const itemsId = useMenuStore("Menu.Button", (state) => state.itemsId);
    const toggleOpen = useMenuStore("Menu.Button", (state) => state.toggleOpen);
    const openMenu = useMenuStore("Menu.Button", (state) => state.openMenu);
    const focusItem = useMenuStore("Menu.Button", (state) => state.focusItem);
    const isButton = Component === "button";

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          buttonRef.current = node;
          setElementRef(ref, node);
        }}
        className={cn("cursor-pointer", className)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={itemsId}
        type={isButton ? "button" : undefined}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            toggleOpen();
          }
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (
            event.key === "ArrowDown" ||
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openMenu();
            window.setTimeout(() => focusItem("first"), 0);
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            openMenu();
            window.setTimeout(() => focusItem("last"), 0);
          }
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

MenuButton.displayName = "Menu.Button";
