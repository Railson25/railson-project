import logoUrl from "../../../../assets/images/logo.svg";
import Button from "../../../../base-components/Button";
import { FormInput, FormCheck } from "../../../../base-components/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema, RegisterFormValues } from "../register-schema";

type RegisterFormProps = {
  onSubmit: (values: RegisterFormValues) => void;
  isSubmitting: boolean;
  serverError?: string | null;
  onGoToLogin?: () => void;
};

export function RegisterForm({
  onSubmit,
  isSubmitting,
  serverError,
  onGoToLogin,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  return (
    <div className="container">
      {/* <DarkModeSwitcher />
      <MainColorSwitcher /> */}
      <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
        <div className="w-96 intro-y">
          <img
            className="w-16 mx-auto"
            alt="Rocketman - Tailwind HTML Admin Template"
            src={logoUrl}
          />

          <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
            Register a New Account
          </div>

          <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            {/* First Name */}
            <FormInput
              type="text"
              className="block px-4 py-3"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firstName.message}
              </p>
            )}

            {/* Last Name */}
            <FormInput
              type="text"
              className="block px-4 py-3 mt-4"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.lastName.message}
              </p>
            )}

            {/* Email */}
            <FormInput
              type="text"
              className="block px-4 py-3 mt-4"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}

            {/* Password */}
            <FormInput
              type="password"
              className="block px-4 py-3 mt-4"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}

            {/* Barrinha de força da senha (pura estética) */}
            <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
              <div className="h-full col-span-3 rounded bg-success"></div>
              <div className="h-full col-span-3 rounded bg-success"></div>
              <div className="h-full col-span-3 rounded bg-success"></div>
              <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
            </div>

            <a
              href="#"
              className="block mt-2 text-xs text-slate-500 sm:text-sm"
            >
              What is a secure password?
            </a>

            {/* Confirm Password */}
            <FormInput
              type="password"
              className="block px-4 py-3 mt-4"
              placeholder="Password Confirmation"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}

            <div className="flex items-center mt-4 text-xs text-slate-500 sm:text-sm">
              <FormCheck.Input
                id="remember-me"
                type="checkbox"
                className="mr-2 border"
                {...register("acceptPolicy")}
              />
              <label
                className="cursor-pointer select-none"
                htmlFor="remember-me"
              >
                I agree to the Envato
              </label>
              <a className="ml-1 text-primary dark:text-slate-200" href="#">
                Privacy Policy
              </a>
              .
            </div>
            {errors.acceptPolicy && (
              <p className="mt-1 text-xs text-red-500">
                {errors.acceptPolicy.message}
              </p>
            )}

            {serverError && (
              <p className="mt-4 text-sm text-red-500">{serverError}</p>
            )}

            <div className="mt-5 text-center xl:mt-8 xl:text-left">
              <Button
                variant="primary"
                className="w-full xl:mr-3"
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              >
                {isSubmitting ? "Registrando..." : "Register"}
              </Button>

              <Button
                variant="outline-secondary"
                className="w-full mt-3"
                type="button"
                onClick={onGoToLogin}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
