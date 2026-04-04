import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { authStorage } from "../utils/userLocalStorage";

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cep: string;
  number: string;
  password?: string;
}
interface AuthContextType {
  user: User | null;
  login: (userData: any, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(authStorage.getUser());
  }, []);

  const login = (data: any, token: string) => {
    // Se o backend mandou { user: { id... } }, nós pegamos o que está dentro de 'user'
    const rawUser = data.user ? data.user : data;

    const userData = { ...rawUser, id: rawUser.id || rawUser._id };
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
