import { createContext, useContext, useMemo, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

export interface AuthContextType {
  login: (data: string) => Promise<void>;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<{ [key: string]: string } | undefined>(
    Cookies.get()
  );

  // call this function when you want to authenticate the user
  // const login = async (user: string | null) => {
  //   setValue(user);
  // };

  // call this function to sign out logged in user
  const logout = () => {
    setToken(undefined);
    Cookies.remove("access_token", { path: "/" });
  };

  const value = useMemo(
    () => ({
      user: token?.access_token ?? null,
      login: async () => console.log(""),
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
