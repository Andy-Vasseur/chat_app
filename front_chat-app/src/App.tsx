// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

// Exports
export default App;
