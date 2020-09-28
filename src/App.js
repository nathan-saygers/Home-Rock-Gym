import React, { useState } from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid";
import WallGridInput from "./components/WallGridInput";

function App() {
  const [wallDimensions, setWallDimensions] = useState([11, 18]);

  return (
    <div>
      <div className="pageContainer">
        <WallGridInput setWallDimensions={setWallDimensions} />
        <WallGrid wallDimensions={wallDimensions} />
        <Login />
      </div>
    </div>
  );
}

export default App;
