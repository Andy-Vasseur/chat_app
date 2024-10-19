// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Context
import { AuthProvider } from "./context/Auth";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App h-screen min-h-screen max-h-screen bg-[#f6f6f6]">
        <Routes>
          <Route
            index
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

// Exports
export default App;
