// Imports
import { Outlet } from "react-router-dom";

function Panel() {
  return (
    <div className="p-4 w-5/6 bg-gray-200">
      <div className="pt-2">
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// Exports
export default Panel;
