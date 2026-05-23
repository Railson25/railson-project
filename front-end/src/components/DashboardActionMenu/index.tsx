import Lucide from "@/base-components/Lucide";
import { Menu } from "../../../UI";
import { cn } from "../../../UI/lib/utils";
import type { DashboardAction } from "@/camadas/home-page/types";

interface DashboardActionMenuProps {
  actions: DashboardAction[];
  className?: string;
  itemsClassName?: string;
}

function DashboardActionMenu({
  actions,
  className,
  itemsClassName,
}: DashboardActionMenuProps) {
  return (
    <Menu className={className}>
      <Menu.Button className="w-5 h-5 text-slate-500">
        <Lucide icon="MoreVertical" className="w-4 h-4" />
      </Menu.Button>
      <Menu.Items className={cn("w-40", itemsClassName)}>
        {actions.map((action) => (
          <Menu.Item key={action.label}>
            <Lucide icon={action.icon} className="w-4 h-4 mr-2" />
            {action.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default DashboardActionMenu;
