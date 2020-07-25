// Dependencies
import React from "react";
import styles from "./WallGrid.module.scss";

// components
import WallGridItem from "./WallGridItem";

let gridShape = [
  { name: "1A" },
  { name: "1B" },
  { name: "1C" },
  { name: "1D" },
  { name: "1E" },

  { name: "2A" },
  { name: "2B" },
  { name: "2C" },
  { name: "2D" },
  { name: "2E" },

  { name: "3A" },
  { name: "3B" },
  { name: "3C" },
  { name: "3D" },
  { name: "3E" },

  { name: "4A" },
  { name: "4B" },
  { name: "4C" },
  { name: "4D" },
  { name: "4E" },

  { name: "5A" },
];

const WallGrid = ({ wallDimensions }) => {
  const calculateWallDimensions = () => {
    const width = wallDimensions[0] * 200 + (wallDimensions[0] - 1) * 16 + 48;
    const height = wallDimensions[1] * 200 + (wallDimensions[1] - 1) * 16 + 48;

    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div style={calculateWallDimensions()} className={styles.wall}>
      {gridShape.map((coord) => (
        <WallGridItem coord={coord} />
      ))}
    </div>
  );
};

export default WallGrid;
