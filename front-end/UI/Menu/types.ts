import * as React from "react";

export type Placement =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-start"
  | "left"
  | "left-end";

export type MenuFocusDirection = "first" | "last" | "next" | "previous";

export type MenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
  openMenu: () => void;
  buttonRef: React.MutableRefObject<HTMLElement | null>;
  itemsRef: React.MutableRefObject<HTMLDivElement | null>;
  itemsId: string;
  close: (restoreFocus?: boolean) => void;
  focusItem: (direction: MenuFocusDirection) => void;
};

export type MenuRootProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div">
>;

export type MenuButtonProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: string;
    target?: string;
    rel?: string;
  }
>;

export type MenuItemsProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div"> & {
    placement?: Placement;
  }
>;

export type MenuItemProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
    disabled?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  }
>;

export type MenuComponent = ((props: MenuRootProps) => React.ReactElement) & {
  Button: React.ForwardRefExoticComponent<
    MenuButtonProps & React.RefAttributes<HTMLElement>
  >;
  Items: (props: MenuItemsProps) => React.ReactElement | null;
  Item: React.ForwardRefExoticComponent<
    MenuItemProps & React.RefAttributes<HTMLElement>
  >;
  Divider: (props: React.ComponentPropsWithoutRef<"div">) => React.ReactElement;
  Header: (
    props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">
  ) => React.ReactElement;
  Footer: (
    props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">
  ) => React.ReactElement;
};
