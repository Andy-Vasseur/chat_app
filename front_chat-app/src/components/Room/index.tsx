// Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3310");

function Room() {
  const { room_id } = useParams();
  const [messages, setMessages] = useState<
    { user_id: string; message: string }[]
  >([]);
  const user_id = localStorage.getItem("user_id") || "";

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
      socket.emit("send_message", messageData);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
    event.target.message.value = "";
  };

  return (
    <div>
      <div>
        <h1 className="mb-4 text-2xl font-bold">{room_id}</h1>
      </div>
      <div>
        <ul>
          {messages.map((message, index) => {
            return (
              <li key={index}>
                <p>
                  {message.user_id.toString() === user_id ? "You" : "Other"}:{" "}
                  {message.message}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            name="message"
            placeholder="Type a message..."
            className="border-2 border-gray-300 p-2 w-full"
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
