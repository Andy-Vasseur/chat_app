// Imports
import React from "react";
import { useParams } from "react-router-dom";

const Room: React.FC = () => {
  const { room_id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Room: {room_id}</h1>
      <p>
        Vous êtes dans la {room_id}. Voici le contenu dynamique pour cette room.
      </p>
    </div>
  );
};

// Exports
export default Room;
