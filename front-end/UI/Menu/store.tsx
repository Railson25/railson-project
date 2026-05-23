import * as React from "react";
import { useStore } from "zustand";
import { createStore, type StoreApi } from "zustand/vanilla";
import type { MenuContextValue, MenuFocusDirection } from "./types";
import { getMenuItems } from "./utils";

type CreateMenuStoreProps = {
  buttonRef: React.MutableRefObject<HTMLElement | null>;
  itemsRef: React.MutableRefObject<HTMLDivElement | null>;
  itemsId: string;
};

type MenuStore = StoreApi<MenuContextValue>;

const MenuStoreContext = React.createContext<MenuStore | null>(null);

export function createMenuStore({
  buttonRef,
  itemsRef,
  itemsId,
}: CreateMenuStoreProps) {
  return createStore<MenuContextValue>((set, get) => ({
    open: false,
    buttonRef,
    itemsRef,
    itemsId,
    setOpen: (open) => set({ open }),
    toggleOpen: () => set((state) => ({ open: !state.open })),
    openMenu: () => set({ open: true }),
    close: (restoreFocus = true) => {
      set({ open: false });

      if (restoreFocus) {
        window.setTimeout(() => get().buttonRef.current?.focus(), 0);
      }
    },
    focusItem: (direction: MenuFocusDirection) => {
      const items = getMenuItems(get().itemsRef.current);

      if (items.length === 0) {
        return;
      }

      const activeIndex = items.findIndex(
        (item) => item === document.activeElement
      );
      const nextIndex =
        direction === "first"
          ? 0
          : direction === "last"
          ? items.length - 1
          : direction === "next"
          ? (activeIndex + 1) % items.length
          : (activeIndex - 1 + items.length) % items.length;

      items[nextIndex]?.focus();
    },
  }));
}

export function MenuStoreProvider({
  children,
  store,
}: React.PropsWithChildren<{ store: MenuStore }>) {
  return (
    <MenuStoreContext.Provider value={store}>
      {children}
    </MenuStoreContext.Provider>
  );
}

export function useMenuStore<T>(
  component: string,
  selector: (state: MenuContextValue) => T
) {
  const store = React.useContext(MenuStoreContext);

  if (!store) {
    throw new Error(`${component} must be used inside Menu`);
  }

  return useStore(store, selector);
}
