// Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3310");

function Room() {
  const { room_id } = useParams();
  const [messages, setMessages] = useState<
    { user_id: string; message: string; username: string }[]
  >([]);

  const user_id = localStorage.getItem("user_id") || "";
  const username = localStorage.getItem("username") || "";

  useEffect(() => {
    socket.emit("join_room", room_id);

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3310/messages/get/${room_id}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des messages :", error);
      }
    };
    fetchMessages();

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [room_id]);

  const sendMessage = async (event: any) => {
    event.preventDefault();
    if (!user_id) {
      console.error("User ID non défini");
      return;
    }
    const message = event.target.elements.message.value;
    if (!message) return;

    const messageData = {
      message,
      room_id,
      user_id,
    };

    try {
      await axios.post("http://localhost:3310/messages/create", messageData);
      socket.emit("send_message", { ...messageData, username });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
    event.target.message.value = "";
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="flex justify-center items-center h-16 w-full bg-red-700">
        <h1 className="text-3xl font-bold">Salle {room_id}</h1>
      </div>
      <div className="w-full h-full overflow-y-auto bg-green-400 p-4">
        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`flex ${
                message.user_id === user_id ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.user_id === user_id
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200 text-black text-left"
                }`}
              >
                <p className="text-sm font-semibold mb-1">{message.username}</p>
                <p>{message.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-24 bg-blue-400">
        <form
          className="flex justify-between items-center w-full"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            name="message"
            placeholder="Type a message..."
            className="mr-8 w-full border-2 border-gray-300 p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

// Exports
export default Room;
