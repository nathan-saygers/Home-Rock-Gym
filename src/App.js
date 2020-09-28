import React from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid";
import WallGridInput from "./components/WallGridInput";

const wallDimensions = [11, 18];

function App() {
  return (
    <div>
      <div className="pageContainer">
        <WallGridInput />
        <WallGrid wallDimensions={wallDimensions} />
        <Login />
      </div>
    </div>
  );
}

export default App;
