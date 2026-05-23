import { TabButton } from "./tab-button";
import { TabGroup } from "./group";
import { TabList } from "./list";
import { TabPanel } from "./panel";
import { TabPanels } from "./panels";
import { TabRoot } from "./tab";
import type { TabComponent } from "./types";

const Tab = Object.assign(TabRoot, {
  Group: TabGroup,
  List: TabList,
  Button: TabButton,
  Panels: TabPanels,
  Panel: TabPanel,
}) as TabComponent;

export default Tab;
export type {
  TabButtonProps,
  TabGroupProps,
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TabRootProps,
  TabVariant,
} from "./types";
