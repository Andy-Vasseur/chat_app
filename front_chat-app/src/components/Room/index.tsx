// Imports
import { useParams } from "react-router-dom";

function Room() {
  const { roomName } = useParams();
  console.log(useParams());

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">{roomName}</h1>
      </div>
    </div>
  );
}

// Exports
export default Room;
