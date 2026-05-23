import { Menu } from "@/base-components/Headless";
import Lucide from "@/base-components/Lucide";
import fakerData from "@/utils/faker";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { useLogoutMutation } from "@/shared/auth/hooks/useLogoutMutation";

export function TopBarAccountMenu() {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const { mutate: logout, isPending } = useLogoutMutation();

  function handleLogout() {
    logout(undefined, {
      onSettled: () => {
        clearAuth();
        navigate("/login", { replace: true });
      },
    });
  }

  return (
    <Menu className="h-10 intro-x">
      <Menu.Button className="flex items-center h-full dropdown-toggle">
        <div className="w-10 h-10 image-fit">
          <img
            src={fakerData[9].photos[0]}
            alt=""
            className="border-2 border-white rounded-full shadow-lg border-opacity-10"
          />
        </div>
        <div className="hidden ml-3 md:block text-slate-200">
          <div className="max-w-[7rem] truncate font-medium">
            {fakerData[0].users[0].name}
          </div>
          <div className="text-xs text-slate-400">{fakerData[0].jobs[0]}</div>
        </div>
      </Menu.Button>

      <Menu.Items className="w-56 mt-px">
        <Menu.Item onClick={() => navigate("/profile")}>
          <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
        </Menu.Item>

        <Menu.Item>
          <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Add Account
        </Menu.Item>

        <Menu.Item>
          <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
        </Menu.Item>

        <Menu.Item onClick={() => navigate("/faq")}>
          <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item as="button" onClick={handleLogout} disabled={isPending}>
          <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" />
          {isPending ? "Saindo..." : "Logout"}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
