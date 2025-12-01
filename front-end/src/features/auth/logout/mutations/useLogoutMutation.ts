import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../lib/api";

type LogoutResponse = {
  message: string;
};

async function logoutRequest(): Promise<LogoutResponse> {
  const { data } = await api.post<LogoutResponse>("/auth/logout", null, {
    withCredentials: true,
  });

  return data;
}

export function useLogoutMutation() {
  return useMutation({
    mutationFn: logoutRequest,
  });
}
