// Dependencies
import React from "react";
import styles from "./WallGrid.module.scss";

// components
import WallGridItem from "./WallGridItem";

const WallGrid = ({ wallDimensions }) => {
  const wallX = wallDimensions[0];
  const wallY = wallDimensions[1];

  const generateCoords = () => {
    let coordArr = [];

    for (let i = 0; i < wallX * wallY; i++) {
      const y = parseInt(i / wallX) + 1;
      const xInt = (i % wallX) + 1;
      const x = String.fromCharCode(64 + xInt);

      coordArr.push({ name: `${x}${y}` });
    }

    return coordArr;
  };

  const calculateWallDimensions = () => {
    const width = wallX * 100 + (wallX - 1) * 16 + 48;
    const height = wallY * 100 + (wallY - 1) * 16 + 48;

    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div style={calculateWallDimensions()} className={styles.wall}>
      {generateCoords().map((coord) => (
        <WallGridItem coord={coord} />
      ))}
    </div>
  );
};

export default WallGrid;
