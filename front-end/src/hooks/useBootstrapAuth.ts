import { useEffect } from "react";
import { api } from "../lib/api";
import { useAuthStore } from "../stores/authStore";

export function useBootstrapAuth() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const setAuthReady = useAuthStore((s) => s.setAuthReady);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const { data } = await api.post("/auth/refresh");

        if (cancelled) return;

        const accessToken = (data as any).access_token;

        if (accessToken) {
          setAuth(accessToken);
        }
      } catch {
        if (cancelled) return;
        useAuthStore.getState().clearAuth();
      } finally {
        if (!cancelled) {
          setAuthReady(true);
        }
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [setAuth, setAuthReady]);
}
