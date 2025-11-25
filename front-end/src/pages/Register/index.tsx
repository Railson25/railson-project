import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useRegisterMutation } from "../../features/auth/register/mutations/useRegisterMutation";
import { RegisterFormValues } from "../../features/auth/register/register-schema";
import { useAuthStore } from "../../stores/authStore";
import { RegisterForm } from "../../features/auth/register/components/register-form";

function RegisterPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [serverError, setServerError] = useState<string | null>(null);

  const { mutate, isPending } = useRegisterMutation();

  const handleSubmit = (values: RegisterFormValues) => {
    setServerError(null);

    mutate(values, {
      onSuccess: (data) => {
        setAuth(data.access_token, data.user);
        navigate("/", { replace: true });
      },
      onError: (err: any) => {
        const msg =
          err?.response?.data?.message || "Erro ao registrar. Tente novamente.";
        setServerError(msg);
      },
    });
  };

  return (
    <RegisterForm
      onSubmit={handleSubmit}
      isSubmitting={isPending}
      serverError={serverError}
      onGoToLogin={() => navigate("/login")}
    />
  );
}

export default RegisterPage;
