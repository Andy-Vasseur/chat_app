// Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Modal from "../Modal";

// Assets
import Logo from "/img/logo.png";

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  const fetchRoomsFromAPI = async () => {
    try {
      const response = await axios.get("http://localhost:3310/rooms/get", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRooms(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoomsFromAPI();
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    try {
      const response = await axios.post(
        "http://localhost:3310/rooms/create",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Room créée avec succès !");
        handleModalClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <nav className="relative p-4 w-1/6 text-white bg-[#1c1c1c]">
      <Link
        to="/"
        className="flex justify-center items-center mb-4 pb-2 h-14 border-b-2 border-gray-700"
      >
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Logo" className="w-36" />
        </div>
      </Link>
      <button
        onClick={handleModalOpen}
        className="flex justify-center-start items-center mb-4 p-2 w-full rounded-lg hover:underline hover:underline-offset-8"
      >
        Créer une room
      </button>
      <ul className="flex flex-col space-y-4">
        {rooms.map((room: any) => (
          <Link
            to={`/room/${room.room_id}`}
            key={room.room_id}
            className="flex justify-items-start items-center p-2 w-full rounded-lg transition-colors duration-200 ease-in-out hover:bg-[#2c2c2c]"
          >
            {room.name}
          </Link>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 my-4 px-4 w-full">
        <button
          className="mt-4 w-full h-12 rounded-lg bg-[#991b1b] transition-colors duration-200 ease-in-out hover:bg-[#b91c1c]"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Créer une room"
      >
        <form method="post" onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="text-black">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom de la room"
              className="w-full p-2 border border-gray-400 rounded-lg"
            />
            <button className="mt-4 w-full h-12 text-white rounded-lg bg-indigo-600 transition-colors duration-200 ease-in-out hover:bg-indigo-700">
              Créer
            </button>
          </label>
        </form>
      </Modal>
    </nav>
  );
}

// Exports
export default Navigation;
