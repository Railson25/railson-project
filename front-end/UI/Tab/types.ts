import * as React from "react";

export type TabVariant = "tabs" | "pills" | "boxed-tabs" | "link-tabs";

export type TabStoreValue = {
  selectedIndex: number;
  controlled: boolean;
  onChange?: (index: number) => void;
  variant: TabVariant;
  count: number;
  setSelectedIndex: (index: number) => void;
  syncGroup: (props: {
    selectedIndex?: number;
    onChange?: (index: number) => void;
  }) => void;
  setList: (props: { variant: TabVariant; count: number }) => void;
  groupId: string;
  buttonRefs: React.MutableRefObject<Array<HTMLElement | null>>;
};

export type TabContextValue = {
  selected: boolean;
  index: number;
};

export type TabGroupProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div"> & {
    defaultIndex?: number;
    selectedIndex?: number;
    onChange?: (index: number) => void;
  }
>;

export type TabListProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"ul"> & {
    variant?: TabVariant;
  }
>;

export type TabRootProps = Omit<
  React.ComponentPropsWithoutRef<"li">,
  "children"
> & {
  fullWidth?: boolean;
  __index?: number;
  children?:
    | React.ReactNode
    | ((props: { selected: boolean }) => React.ReactNode);
};

export type TabButtonProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: string;
    target?: string;
    rel?: string;
  }
>;

export type TabPanelsProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div">
>;

export type TabPanelProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  __index?: number;
  children?:
    | React.ReactNode
    | ((props: { selected: boolean }) => React.ReactNode);
};

export type TabComponent = ((props: TabRootProps) => React.ReactElement) & {
  Group: (props: TabGroupProps) => React.ReactElement;
  List: (props: TabListProps) => React.ReactElement;
  Button: React.ForwardRefExoticComponent<
    TabButtonProps & React.RefAttributes<HTMLElement>
  >;
  Panels: (props: TabPanelsProps) => React.ReactElement;
  Panel: (props: TabPanelProps) => React.ReactElement | null;
};
