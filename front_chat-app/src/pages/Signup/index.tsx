// Imports
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    axios
      .post("http://localhost:3310/users/auth/create", {
        username: name,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then(() => {
        login();
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col select-none ">
      <div className="flex flex-col justify-center items-center h-full">
        <form
          method="POST"
          className="flex flex-col justify-center items-center p-4 w-96 rounded-md shadow-lg bg-white"
          onSubmit={handleSignup}
        >
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <h1 className="text-2xl font-bold text-gray-800">Signup</h1>
          <Link to="/login" className="text-blue-500">
            <p className="mt-2">Déjà un compte ? Connectez-vous.</p>
          </Link>
          <input
            type="text"
            placeholder="Votre nom d'utilisateur"
            name="username"
            className="mt-6 p-2 w-full h-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            name="password"
            className="mt-6 p-2 w-full h-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmez votre mot de passe"
            name="confirmPassword"
            className="mt-6 p-2 w-full h-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md transition-colors duration-200 ease-in-out hover:bg-indigo-700 focus:outline-none">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

// Exports
export default Signup;
