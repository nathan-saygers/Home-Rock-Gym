// Dependencies
import React from "react";
import styles from "./HoldLibrary.module.scss";

// Dummy data
import holds from "../dummyData/holds";

// Components
import HoldLibraryItem from "./HoldLibraryItem";

const HoldLibrary = (props) => {
  console.log("should be holds", holds);
  return (
    <div className={styles.holdLibraryContainer}>
      <p>Holds below this:</p>
      <div>
        {holds.map((hold) => (
          <HoldLibraryItem holdDetails={hold} />
        ))}
      </div>
    </div>
  );
};

export default HoldLibrary;
