import * as React from "react";
import { useStore } from "zustand";
import { createStore, type StoreApi } from "zustand/vanilla";
import type { TabContextValue, TabStoreValue, TabVariant } from "./types";

type CreateTabStoreProps = {
  defaultIndex: number;
  selectedIndex?: number;
  onChange?: (index: number) => void;
  groupId: string;
  buttonRefs: React.MutableRefObject<Array<HTMLElement | null>>;
};

type TabStore = StoreApi<TabStoreValue>;

const TabStoreContext = React.createContext<TabStore | null>(null);
const CurrentTabContext = React.createContext<TabContextValue | null>(null);

export function createTabStore({
  defaultIndex,
  selectedIndex,
  onChange,
  groupId,
  buttonRefs,
}: CreateTabStoreProps) {
  return createStore<TabStoreValue>((set, get) => ({
    selectedIndex: selectedIndex ?? defaultIndex,
    controlled: selectedIndex !== undefined,
    onChange,
    variant: "tabs" as TabVariant,
    count: 0,
    groupId,
    buttonRefs,
    setSelectedIndex: (index) => {
      const state = get();

      if (!state.controlled) {
        set({ selectedIndex: index });
      }

      state.onChange?.(index);
    },
    syncGroup: (props) => {
      set((state) => ({
        controlled: props.selectedIndex !== undefined,
        selectedIndex:
          props.selectedIndex !== undefined
            ? props.selectedIndex
            : state.selectedIndex,
        onChange: props.onChange,
      }));
    },
    setList: ({ variant, count }) => set({ variant, count }),
  }));
}

export function TabStoreProvider({
  children,
  store,
}: React.PropsWithChildren<{ store: TabStore }>) {
  return (
    <TabStoreContext.Provider value={store}>{children}</TabStoreContext.Provider>
  );
}

export function useTabStore<T>(
  component: string,
  selector: (state: TabStoreValue) => T
) {
  const store = React.useContext(TabStoreContext);

  if (!store) {
    throw new Error(`${component} must be used inside Tab.Group`);
  }

  return useStore(store, selector);
}

export function CurrentTabProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: TabContextValue }>) {
  return (
    <CurrentTabContext.Provider value={value}>
      {children}
    </CurrentTabContext.Provider>
  );
}

export function useCurrentTab(component: string) {
  const context = React.useContext(CurrentTabContext);

  if (!context) {
    throw new Error(`${component} must be used inside Tab`);
  }

  return context;
}
