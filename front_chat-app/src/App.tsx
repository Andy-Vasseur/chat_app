import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

// Context
import { AuthContext } from "./context/Auth";
import ProtectedRoute from "./context/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Room from "./components/Room";

function App() {
  const { isUserLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        {/* Route pour la homepage ou redirection vers Dashboard */}
        <Route
          path="/"
          element={
            isUserLoggedIn || localStorage.getItem("token") ? (
              <Navigate to="/dashboard" />
            ) : (
              <Homepage />
            )
          }
        />

        {/* Redirection vers dashboard si connecté, sinon login */}
        <Route
          path="/login"
          element={
            isUserLoggedIn || localStorage.getItem("token") ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* Redirection vers dashboard si connecté, sinon signup */}
        <Route
          path="/signup"
          element={
            isUserLoggedIn || localStorage.getItem("token") ? (
              <Navigate to="/dashboard" />
            ) : (
              <Signup />
            )
          }
        />

        {/* Route protégée pour Dashboard avec des routes imbriquées */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Route dynamique pour les rooms imbriquées dans le Dashboard */}
          <Route path="rooms/:roomName" element={<Room />} />
        </Route>

        {/* Redirige toutes les routes inconnues vers la homepage */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

// Exports
export default App;
