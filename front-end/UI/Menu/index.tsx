import { MenuButton } from "./menu-button";
import { MenuItem } from "./menu-item";
import { MenuItems } from "./items";
import { MenuDivider, MenuFooter, MenuHeader } from "./parts";
import { MenuRoot } from "./root";
import type { MenuComponent } from "./types";

const Menu = Object.assign(MenuRoot, {
  Button: MenuButton,
  Items: MenuItems,
  Item: MenuItem,
  Divider: MenuDivider,
  Header: MenuHeader,
  Footer: MenuFooter,
}) as MenuComponent;

export default Menu;
export type {
  MenuButtonProps,
  MenuItemProps,
  MenuItemsProps,
  MenuRootProps,
  Placement,
} from "./types";
