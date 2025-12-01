import { useLocation } from "react-router-dom";
import Breadcrumb from "../../base-components/Breadcrumb";
import { routeTitles } from "../../router/breadcrumb-map";

export function TopBarBreadcrumb() {
  const { pathname } = useLocation();

  const currentTitle = routeTitles[pathname] ?? "Dashboard";

  return (
    <Breadcrumb light className="hidden -intro-x xl:flex">
      <Breadcrumb.Link to="/">App</Breadcrumb.Link>
      <Breadcrumb.Link to="/">Administrator</Breadcrumb.Link>
      <Breadcrumb.Link to={pathname} active>
        {currentTitle}
      </Breadcrumb.Link>
    </Breadcrumb>
  );
}
