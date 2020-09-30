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
        <div className={styles.holdTableHeader}>
          <p>Name</p>
          <p>Size</p>
          <p>Type</p>
          <p>Color</p>
        </div>
        {holds.map((hold) => (
          <HoldLibraryItem holdDetails={hold} />
        ))}
      </div>
    </div>
  );
};

export default HoldLibrary;
