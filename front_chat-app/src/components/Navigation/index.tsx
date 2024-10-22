// Imports
import { Link } from "react-router-dom";

// Assets
import Logo from "/img/logo.png";

function Navigation() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className=" relative p-4 w-1/6 text-white bg-[#1c1c1c]">
      <Link
        to="/"
        className="flex justify-center items-center mb-4 pb-2 h-14 border-b-2 border-gray-700"
      >
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Logo" className="w-36" />
        </div>
      </Link>
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/chat">Chat</a>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 right-0 my-4 px-4 w-full">
        <button
          className="mt-4 w-full h-12 rounded-lg bg-[#991b1b] transition-colors duration-200 ease-in-out hover:bg-[#b91c1c]"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    </nav>
  );
}

// Exports
export default Navigation;
