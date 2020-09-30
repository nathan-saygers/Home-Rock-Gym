// Dependencies
import React from "react";
import styles from "./HoldLibrary.module.scss";

// Components
import HoldLibraryItem from "./HoldLibraryItem";
import HoldSearchBar from "./HoldSearchBar";

const HoldLibrary = ({ holds, setHoldData }) => {
  console.log("should be holds", holds);
  return (
    <div className={styles.holdLibraryContainer}>
      <HoldSearchBar setHoldData={setHoldData} holdData={holds} />
      <p>Hold Library</p>
      <div className={styles.holdContainer}>
        <div className={styles.holdTableHeader}>
          <p>Name</p>
          <p>Size</p>
          <p>Type</p>
          <p>Color</p>
        </div>
        {holds.length > 0 &&
          holds.map((hold) => <HoldLibraryItem holdDetails={hold} />)}
      </div>
    </div>
  );
};

export default HoldLibrary;
