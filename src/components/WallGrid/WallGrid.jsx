// Dependencies
import React from "react";
import styles from "./WallGrid.module.scss";

// components
import WallGridItem from "./WallGridItem";

const WallGrid = ({ holds, wallDimensions, wallDisplayName }) => {
  const wallX = wallDimensions[0];
  const wallY = wallDimensions[1];

  const generateCoords = () => {
    let coordArr = [];

    // Generates x and y coordinates for the wallGrid
    // (ex. A1, B1, A2, B2)
    for (let i = 0; i < wallX * wallY; i++) {
      // 'y' determines the numeric value on each point of
      // the wall grid. Cycles from 1 to wallX for each row
      const y = parseInt(i / wallX) + 1;

      // 'x' determines the alphabetical value on each point
      // of the wall grid.  Cycles from A to wallX
      const xInt = (i % wallX) + 1;
      const x = String.fromCharCode(64 + xInt);
      coordArr.push({ xyAxes: `${x}${y}` });
    }

    return coordArr;
  };

  const calculateWallDimensions = () => {
    // This function calculates the dimensions in pixels for
    // the div that contains the wallGrid
    // wallX * 100          +     (wallX - 1) * 16            +         48;
    // (100px for each point)     (px for gutters)     (px for padding around container)

    const width = wallX * 100 + (wallX - 1) * 16 + 48;
    const height = wallY * 100 + (wallY - 1) * 16 + 48;
    return { width: `${width}px`, height: `${height}px` };
  };

  return (
    <div className={styles.wallContainer}>
      <p className={styles.wallName}>{wallDisplayName}</p>
      <div style={calculateWallDimensions()} className={styles.wall}>
        {generateCoords().map((coord, index) => (
          <WallGridItem holds={holds} coord={coord} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WallGrid;
