import logoUrl from "@/assets/images/logo.svg";
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import MainColorSwitcher from "@/components/MainColorSwitcher";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, type LoginFormValues } from "../schemas/login-schema";
import { FormCheck, FormInput } from "@/base-components/Form";
import Button from "@/base-components/Button";
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
    <div className="relative flex w-screen h-screen overflow-hidden">
      <DarkModeSwitcher />
      <MainColorSwitcher />

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/images/lisa2.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/70 via-blue-600/60 to-indigo-700/70 theme-1:from-pink-400/70 theme-1:via-pink-500/60 theme-1:to-rose-600/70 theme-2:from-slate-400/70 theme-2:via-slate-500/60 theme-2:to-slate-600/70 dark:from-darkmode-900/90 dark:via-darkmode-800/80 dark:to-darkmode-900/95" />

      <div className="relative z-10 flex items-center justify-center flex-1 p-6">
        <div className="w-full max-w-md">
          <img
            src={logoUrl}
            alt="Logo"
            className="w-20 mx-auto mb-10 drop-shadow-2xl"
          />

          <h1 className="mb-3 text-5xl font-bold text-center text-white font-display">
            Design with us
          </h1>
          <p className="mb-12 text-xl text-center text-white/90 font-body">
            Explore with us
          </p>

          <div className="p-8 border shadow-2xl rounded-3xl bg-white/15 backdrop-blur-xl border-white/25 theme-1:bg-pink-50/15 theme-1:border-pink-200/30 theme-2:bg-slate-50/15 theme-2:border-slate-200/30 dark:bg-darkmode-800/40 dark:border-darkmode-700/50 dark:theme-1:bg-rose-900/40 dark:theme-1:border-rose-800/50 dark:theme-2:bg-slate-800/40 dark:theme-2:border-slate-700/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              <div>
                <FormInput
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg text-white transition-all duration-200 border-0 rounded-2xl bg-white/20 placeholder-white/70 focus:ring-4 focus:ring-white/40 theme-1:bg-pink-100/20 theme-1:placeholder-pink-100/70 theme-1:focus:ring-pink-200/40 theme-2:bg-slate-100/20 theme-2:placeholder-slate-100/70 theme-2:focus:ring-slate-200/40 dark:bg-darkmode-700/50 dark:placeholder-darkmode-300/70 dark:focus:ring-darkmode-600/40"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-300 theme-1:text-rose-200 theme-2:text-red-200">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <FormInput
                  type="password"
                  placeholder="Password"
                  className="w-full px-6 py-4 text-lg text-white transition-all duration-200 border-0 rounded-2xl bg-white/20 placeholder-white/70 focus:ring-4 focus:ring-white/40 theme-1:bg-pink-100/20 theme-1:placeholder-pink-100/70 theme-1:focus:ring-pink-200/40 theme-2:bg-slate-100/20 theme-2:placeholder-slate-100/70 theme-2:focus:ring-slate-200/40 dark:bg-darkmode-700/50 dark:placeholder-darkmode-300/70 dark:focus:ring-darkmode-600/40"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-300 theme-1:text-rose-200 theme-2:text-red-200">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-white theme-1:text-pink-100 theme-2:text-slate-100 dark:text-darkmode-200 dark:theme-1:text-rose-200 dark:theme-2:text-slate-300">
                <label className="flex items-center text-sm transition-colors cursor-pointer hover:text-opacity-80">
                  <FormCheck.Input
                    id="remember"
                    type="checkbox"
                    className="mr-3 text-primary theme-1:text-pink-400 theme-2:text-slate-400 dark:text-primary dark:theme-1:text-pink-400 dark:theme-2:text-slate-400"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm transition-colors hover:underline hover:text-opacity-80"
                >
                  Forgot Password?
                </a>
              </div>

              {serverError && (
                <p className="text-sm text-center text-red-300 theme-1:text-rose-200 theme-2:text-red-200 dark:text-red-400 dark:theme-1:text-rose-300 dark:theme-2:text-red-300">
                  {serverError}
                </p>
              )}

              <div className="pt-4 space-y-4">
                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 shadow-xl rounded-2xl bg-primary hover:bg-primary/90 hover:shadow-2xl hover:scale-105 theme-1:bg-pink-500 theme-1:hover:bg-pink-600 theme-2:bg-slate-500 theme-2:hover:bg-slate-600 dark:bg-primary dark:hover:bg-primary/80 dark:theme-1:bg-pink-600 dark:theme-1:hover:bg-pink-700 dark:theme-2:bg-slate-600 dark:theme-2:hover:bg-slate-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Entrando...
                    </span>
                  ) : (
                    "Sign up"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline-secondary"
                  onClick={() => navigate("/register")}
                  className="w-full py-4 text-lg text-white transition-all duration-300 border rounded-2xl border-white/40 bg-white/10 backdrop-blur hover:bg-white/20 hover:border-white/60 theme-1:text-pink-100 theme-1:border-pink-200/40 theme-1:bg-pink-500/10 theme-1:hover:bg-pink-500/20 theme-1:hover:border-pink-200/60 theme-2:text-slate-100 theme-2:border-slate-200/40 theme-2:bg-slate-500/10 theme-2:hover:bg-slate-500/20 theme-2:hover:border-slate-200/60 dark:text-darkmode-200 dark:border-darkmode-600 dark:bg-darkmode-700/30 dark:hover:bg-darkmode-600/40 dark:hover:border-darkmode-500 dark:theme-1:text-rose-200 dark:theme-1:border-rose-700 dark:theme-1:bg-rose-900/30 dark:theme-1:hover:bg-rose-800/40 dark:theme-1:hover:border-rose-600 dark:theme-2:text-slate-300 dark:theme-2:border-slate-700 dark:theme-2:bg-slate-800/30 dark:theme-2:hover:bg-slate-700/40 dark:theme-2:hover:border-slate-600"
                >
                  Login instead
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-white/80 theme-1:text-pink-100/80 theme-2:text-slate-100/80 dark:text-darkmode-300 dark:theme-1:text-rose-200/80 dark:theme-2:text-slate-300/80">
              © 2024 Design with us. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
