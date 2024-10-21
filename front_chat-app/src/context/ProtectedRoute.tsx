// ProtectedRoute.tsx
import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

// ProtectedRouteProps
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isUserLoggedIn } = useContext(AuthContext);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsChecking(false); // Si token présent, permettre l'accès
    } else {
      setIsChecking(false); // Si pas de token, fin de vérification
    }
  }, []);

  if (isChecking) {
    return <div>Chargement...</div>; // Un écran de chargement pendant la vérification
  }

  if (!isUserLoggedIn && !localStorage.getItem("token")) {
    // Redirige vers la page de login si pas de token et pas connecté
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est connecté ou si un token est présent, afficher les enfants
  return <>{children}</>;
}

export default ProtectedRoute;
