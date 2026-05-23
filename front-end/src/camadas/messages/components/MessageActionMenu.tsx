import Lucide from "@/base-components/Lucide";
import { Menu } from "@/base-components/Headless";
import type { MenuAction } from "../types";

interface MessageActionMenuProps {
  actions: MenuAction[];
  className?: string;
  buttonClassName?: string;
  placement?: "top-end" | "bottom-end";
}

function MessageActionMenu({
  actions,
  className,
  buttonClassName = "w-4 h-4 text-slate-500",
  placement = "bottom-end",
}: MessageActionMenuProps) {
  return (
    <Menu className={className}>
      <Menu.Button as="a" className={buttonClassName} href="#">
        <Lucide icon="MoreVertical" className="w-full h-full" />
      </Menu.Button>
      <Menu.Items className="w-40" placement={placement}>
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

export default MessageActionMenu;
