import React, { useState } from "react";
import "normalize.css";
import "./App.css";

// Components
import Login from "./components/Login";
import WallGrid from "./components/WallGrid/WallGrid";
import WallGridInput from "./components/WallGrid/WallGridInput";
import HoldLibrary from "./components/HoldLibrary/HoldLibrary";
import ProblemLibrary from "./components/ProblemLibrary/ProblemLibrary";

// Dummy data
import holdDummyData from "./dummyData/holds";
import problemDummyData from "./dummyData/problems";

function App() {
  const [wallDimensions, setWallDimensions] = useState([8, 8]);
  const [wallDisplayName, setWallDisplayName] = useState("Wall Name");
  const [holds, setHolds] = useState(holdDummyData);
  const [problems, setProblems] = useState(problemDummyData);

  return (
    <div>
      <div className="pageContainer">
        <HoldLibrary holds={holds} setHoldData={setHolds} />
        <ProblemLibrary problems={problems} setProblemData={setProblems} />
        <WallGridInput
          setWallDimensions={setWallDimensions}
          setWallDisplayName={setWallDisplayName}
        />
        <WallGrid
          holds={holds}
          wallDimensions={wallDimensions}
          wallDisplayName={wallDisplayName}
        />
        <Login />
      </div>
    </div>
  );
}

export default App;
