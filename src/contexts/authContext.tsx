import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { authStorage } from "../utils/userLocalStorage";
import type { AuthContextType, AuthLoginPayload, User } from "../types/auth";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(authStorage.getUser());
  }, []);

  const login = (data: AuthLoginPayload, token: string) => {
    const rawUser = "user" in data ? data.user : data;

    const userData: User = {
      id: rawUser.id ?? rawUser._id ?? "",
      name: rawUser.name,
      email: rawUser.email,
      cpf: rawUser.cpf,
      cep: rawUser.cep,
      number: rawUser.number,
      password: rawUser.password,
    };

    localStorage.setItem("token", token);
    authStorage.saveUser(userData);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    authStorage.removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
