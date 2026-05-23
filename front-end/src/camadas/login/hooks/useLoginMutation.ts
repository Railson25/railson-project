import { useMutation } from "@tanstack/react-query";

import type { LoginFormValues } from "../schemas/login-schema";
import { api } from "@/lib/api";

export type LoginResponse = {
  access_token: string;
  user: {
    id: string;
    name: string | null;
    email: string | null;
  };
};

export const useLoginMutation = () => {
  return useMutation<LoginResponse, any, LoginFormValues>({
    mutationFn: async (values: LoginFormValues) => {
      const { data } = await api.post<LoginResponse>("/auth/login", values);
      return data;
    },
  });
};
