import * as React from "react";
import { createTabStore, TabStoreProvider, useTabStore } from "./store";
import type { TabGroupProps } from "./types";

export function TabGroup({
  children,
  defaultIndex = 0,
  selectedIndex,
  onChange,
  ...props
}: TabGroupProps) {
  const buttonRefs = React.useRef<Array<HTMLElement | null>>([]);
  const reactId = React.useId();
  const storeRef = React.useRef<ReturnType<typeof createTabStore>>();

  if (!storeRef.current) {
    storeRef.current = createTabStore({
      defaultIndex,
      selectedIndex,
      onChange,
      groupId: reactId,
      buttonRefs,
    });
  }

  return (
    <TabStoreProvider store={storeRef.current}>
      <TabGroupContent selectedIndex={selectedIndex} onChange={onChange} {...props}>
        {children}
      </TabGroupContent>
    </TabStoreProvider>
  );
}

function TabGroupContent({
  children,
  selectedIndex,
  onChange,
  ...props
}: TabGroupProps) {
  const syncGroup = useTabStore("Tab.Group", (state) => state.syncGroup);

  React.useEffect(() => {
    syncGroup({ selectedIndex, onChange });
  }, [onChange, selectedIndex, syncGroup]);

  return <div {...props}>{children}</div>;
}
