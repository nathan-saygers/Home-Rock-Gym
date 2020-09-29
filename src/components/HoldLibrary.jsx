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
      <p>Hold Library</p>
      <div className={styles.holdContainer}>
        {holds.map((hold) => (
          <HoldLibraryItem holdDetails={hold} />
        ))}
      </div>
    </div>
  );
};

export default HoldLibrary;
