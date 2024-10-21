// Imports
import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isUserLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isUserLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const login = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
