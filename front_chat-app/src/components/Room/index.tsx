// Imports
import { useParams } from "react-router-dom";
import axios from "axios";

function Room() {
  const { room_id } = useParams();

  const sendMessage = async (event: any) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    if (!message) {
      return;
    }
    try {
      await axios.post("http://localhost:3310/messages/create", {
        message,
        room_id,
      });
    } catch (error) {
      console.error(error);
    }
    event.target.message.value = "";
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">{room_id}</h1>
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
