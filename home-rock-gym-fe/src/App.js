import React from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid";

function App() {
  return (
    <div>
      <WallGrid />
      <Login />
    </div>
  );
}

export default App;
