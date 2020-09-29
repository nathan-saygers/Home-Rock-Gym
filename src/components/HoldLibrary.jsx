// Dependencies
import React from "react";
import styles from "./HoldLibrary.module.scss";

// Dummy data
import holds from "../dummyData/holds";

const HoldLibrary = (props) => {
  console.log("should be holds", holds);
  return (
    <div className={styles.holdLibraryContainer}>
      <p>Holds below this:</p>
      <div>
        {holds.map((hold) => (
          <div>
            <div>{hold.name}</div>
            <div>{hold.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldLibrary;
