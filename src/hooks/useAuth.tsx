import { createContext, useContext, useMemo } from "react";

import { useLocalStorage } from "./useLocalStorage";

export interface AuthContextType {
  login: (data: string) => Promise<void>;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { storedValue, setValue } = useLocalStorage("user", null);

  // call this function when you want to authenticate the user
  const login = async (user: string | null) => {
    setValue(user);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setValue(null);
  };

  const value = useMemo(
    () => ({
      user: storedValue,
      login,
      logout,
    }),
    [storedValue]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
