import logoUrl from "../../../../assets/images/logo.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema, type LoginFormValues } from "../login-schema";
import { FormCheck, FormInput } from "../../../../base-components/Form";
import Button from "../../../../base-components/Button";
import { useNavigate } from "react-router-dom";

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
  isSubmitting: boolean;
  serverError?: string | null;
};

export function LoginForm({
  onSubmit,
  isSubmitting,
  serverError,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  return (
    <div className="flex h-screen max-h-screen">
      {/* <DarkModeSwitcher />
      <MainColorSwitcher /> */}
      <section className="relative bg-transparent my-auto flex-1 overflow-y-auto px-[5%] md:px-[2%] w-full md:max-w-1/2">
        <div className="flex flex-col w-full py-10 size-full ">
          <img
            className="w-16 mx-auto"
            alt="Rocketman - Tailwind HTML Admin Template"
            src={logoUrl}
          />
          <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
            Login to Your Account!
          </div>
          <div className="box px-5 py-8 mt-10 w-full relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </div>
              )}

              <FormInput
                type="password"
                className="block px-4 py-3 mt-4"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </div>
              )}

              <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                <div className="flex items-center mr-auto">
                  <FormCheck.Input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2 border"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <a href="">Forgot Password?</a>
              </div>

              {serverError && (
                <div className="mt-4 text-sm text-red-500">{serverError}</div>
              )}

              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button
                  variant="primary"
                  className="w-full xl:mr-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Entrando..." : "Login"}
                </Button>
                <Button
                  variant="outline-secondary"
                  className="w-full mt-3"
                  type="button"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <img
        src="/images/lisa2.jpg"
        alt="Lisa"
        width={1000}
        height={1000}
        className="hidden object-cover h-full md:block max-w-[50%]"
      />
    </div>
  );
}
