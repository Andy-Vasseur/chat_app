// Imports
import { createContext, useState, ReactNode } from "react";

// AuthContextType
interface AuthContextType {
  isUserLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// AuthContext
export const AuthContext = createContext<AuthContextType>({
  isUserLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// AuthProvider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  //  Functions
  const login = () => {
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
