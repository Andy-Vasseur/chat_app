// Imports
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

// ProtectedRouteProps
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isUserLoggedIn } = useContext(AuthContext);

  if (!isUserLoggedIn) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the children
  return <>{children}</>;
}

// Exports
export default ProtectedRoute;
