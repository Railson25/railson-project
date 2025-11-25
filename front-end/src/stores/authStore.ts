import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isAuthReady: boolean;
  setAuth: (token: string, user?: User | null) => void;
  clearAuth: () => void;
  setAuthReady: (ready: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,
  isAuthReady: false,

  setAuth: (token, user = null) =>
    set({
      accessToken: token,
      user,
      isAuthenticated: !!token,
    }),

  clearAuth: () =>
    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    }),

  setAuthReady: (ready) => set({ isAuthReady: ready }),
}));
