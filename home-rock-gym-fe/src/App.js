import React from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid";

const wallDimensions = [3, 7];

function App() {
  return (
    <div>
      <div className="pageContainer">
        <WallGrid wallDimensions={wallDimensions} />
        <Login />
      </div>
    </div>
  );
}

export default App;
