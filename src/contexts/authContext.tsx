
import { createContext, useState, useEffect} from "react";
import { authStorage } from "../utils/userLocalStorage";
import type {ReactNode } from "react"

interface User {
  name: string;
  email: string;
  cpf: string;
  cep:string;
  number:string;
  password:string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Ao carregar o app, busca o usuário que já estava logado no localStorage
  useEffect(() => {
    const savedUser = authStorage.getUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (userData: User, token: string) => {
    localStorage.setItem("token", token);
    authStorage.saveUser(userData);
    setUser(userData); 
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}