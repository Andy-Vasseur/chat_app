// Imports
import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsUserLoggedIn(true);
        navigate("/");
      } else {
        setIsUserLoggedIn(false);
      }
    };

    checkToken();

    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, [navigate]);

  const login = () => {
    setIsUserLoggedIn(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
