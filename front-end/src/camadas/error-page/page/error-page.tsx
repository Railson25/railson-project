import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { NotFoundView } from "@/camadas/error-page/components/not-found-view";

function ErrorPage() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const handleBack = () => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  return <NotFoundView onBack={handleBack} />;
}

export default ErrorPage;
