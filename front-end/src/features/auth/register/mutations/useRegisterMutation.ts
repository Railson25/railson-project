import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../lib/api";
import type { RegisterFormValues } from "../register-schema";

export type RegisterResponse = {
  access_token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export const useRegisterMutation = () =>
  useMutation<RegisterResponse, any, RegisterFormValues>({
    mutationFn: async (values: RegisterFormValues) => {
      const payload = {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        password: values.password,
      };

      const { data } = await api.post<RegisterResponse>(
        "/auth/register",
        payload
      );

      return data;
    },
  });
