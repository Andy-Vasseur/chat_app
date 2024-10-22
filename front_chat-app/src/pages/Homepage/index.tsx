// Imports
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gray-100">
      <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Bienvenue sur Chat&apos;App
          </h1>
          <p className="text-lg text-white">
            Discutez en temps réel avec vos amis et collègues, n'importe où,
            n'importe quand.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="mr-4 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Se connecter
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Fonctionnalités principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://img.icons8.com/dusk/64/000000/chat.png"
              alt="Messaging"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-medium text-gray-800 text-center mb-2">
              Messages Instantanés
            </h3>
            <p className="text-gray-600 text-center">
              Envoyez des messages en temps réel à vos contacts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://img.icons8.com/?size=100&id=SXZ7TUxf3t6v&format=png&color=000000"
              alt="Group Chat"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-medium text-gray-800 text-center mb-2">
              Discussions de Groupe
            </h3>
            <p className="text-gray-600 text-center">
              Créez des groupes et discutez avec plusieurs personnes en même
              temps.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://img.icons8.com/dusk/64/000000/cloud.png"
              alt="Cloud"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-medium text-gray-800 text-center mb-2">
              Accès sur le Cloud
            </h3>
            <p className="text-gray-600 text-center">
              Accédez à vos discussions de partout et sur tous les appareils.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 w-full bg-[#1c1c1c]">
        <div className="container mx-auto text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Chat'App. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}

// Exports
export default Homepage;
