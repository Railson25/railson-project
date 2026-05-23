import * as React from "react";
import { cn } from "../lib/utils";
import { createMenuStore, MenuStoreProvider, useMenuStore } from "./store";
import type { MenuRootProps } from "./types";

export function MenuRoot({ children, className, ...props }: MenuRootProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLElement | null>(null);
  const itemsRef = React.useRef<HTMLDivElement | null>(null);
  const reactId = React.useId();
  const itemsId = `menu-items-${reactId}`;
  const storeRef = React.useRef<ReturnType<typeof createMenuStore>>();

  if (!storeRef.current) {
    storeRef.current = createMenuStore({
      buttonRef,
      itemsRef,
      itemsId,
    });
  }

  return (
    <MenuStoreProvider store={storeRef.current}>
      <MenuRootContent rootRef={rootRef} className={className} {...props}>
        {children}
      </MenuRootContent>
    </MenuStoreProvider>
  );
}

function MenuRootContent({
  children,
  className,
  rootRef,
  ...props
}: MenuRootProps & {
  rootRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const open = useMenuStore("Menu", (state) => state.open);
  const close = useMenuStore("Menu", (state) => state.close);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        close(true);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, open]);

  return (
    <div ref={rootRef} className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}
