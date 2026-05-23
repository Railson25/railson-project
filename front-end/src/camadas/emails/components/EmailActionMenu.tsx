import { Menu } from "@/base-components/Headless";
import Lucide from "@/base-components/Lucide";
import { Fragment } from "react";
import type { EmailMenuAction } from "../types";

type EmailActionMenuProps = {
  actions: EmailMenuAction[];
};

function EmailActionMenu({ actions }: EmailActionMenuProps) {
  return (
    <Menu.Items className="w-40">
      {actions.map((action) => (
        <Fragment key={action.label}>
          {action.dividerBefore && <Menu.Divider />}
          <Menu.Item>
            <Lucide icon={action.icon} className="w-4 h-4 mr-2" />
            {action.label}
          </Menu.Item>
        </Fragment>
      ))}
    </Menu.Items>
  );
}

export default EmailActionMenu;
