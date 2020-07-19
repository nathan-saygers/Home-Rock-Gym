// Dependencies
import React from "react";
import styles from "./WallGrid.module.scss";

// components
import WallGridItem from "./WallGridItem";

let gridShape = [
  [
    { coord: "1A" },
    { coord: "1B" },
    { coord: "1C" },
    { coord: "1D" },
    { coord: "1E" },
  ],
  [
    { coord: "2A" },
    { coord: "2B" },
    { coord: "2C" },
    { coord: "2D" },
    { coord: "2E" },
  ],
  [
    { coord: "3A" },
    { coord: "3B" },
    { coord: "3C" },
    { coord: "3D" },
    { coord: "3E" },
  ],
  [
    { coord: "4A" },
    { coord: "4B" },
    { coord: "4C" },
    { coord: "4D" },
    { coord: "4E" },
  ],
  [
    { coord: "5A" },
    { coord: "5B" },
    { coord: "5C" },
    { coord: "5D" },
    { coord: "5E" },
  ],
];

const WallGrid = (props) => {
  return gridShape.map((row) => (
    <div>
      {row.map((coord) => (
        <WallGridItem coord={coord} />
      ))}
    </div>
  ));
};

export default WallGrid;
