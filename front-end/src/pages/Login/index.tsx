import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { type LoginFormValues } from "../../features/auth/login/login-schema";
import { useLoginMutation } from "../../features/auth/login/mutations/useLoginMutation";
import { useAuthStore } from "../../stores/authStore";
import { LoginForm } from "../../features/auth/login/components/login-form";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from || "/";

  const setAuth = useAuthStore((s) => s.setAuth);

  const [serverError, setServerError] = useState<string | null>(null);

  const { mutate, isPending } = useLoginMutation();

  const handleSubmit = (values: LoginFormValues) => {
    setServerError(null);

    mutate(values, {
      onSuccess: (data) => {
        setAuth(data.access_token, data.user);
        navigate(from, { replace: true });
      },
      onError: (error: any) => {
        const msg =
          error?.response?.data?.message ||
          "Não foi possível fazer login. Verifique suas credenciais.";
        setServerError(msg);
      },
    });
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      isSubmitting={isPending}
      serverError={serverError}
    />
  );
}

export default LoginPage;
