// Dependencies
import React, { useState } from "react";
import styles from "./HoldLibrary.module.scss";

// Components
import HoldLibraryItem from "./HoldLibraryItem";
import HoldSearchBar from "./HoldSearchBar";

const HoldLibrary = ({ holds }) => {
  const [filteredHolds, setFilteredHolds] = useState();
  console.log("filteredHolds", filteredHolds);
  return (
    <div className={styles.holdLibraryContainer}>
      <HoldSearchBar
        setFilteredHolds={setFilteredHolds}
        filteredHolds={filteredHolds}
        holdData={holds}
      />
      <p>Hold Library</p>
      <div className={styles.holdContainer}>
        <div className={styles.holdTableHeader}>
          <p>Name</p>
          <p>Size</p>
          <p>Type</p>
          <p>Color</p>
        </div>
        {filteredHolds &&
          filteredHolds.map((hold) => <HoldLibraryItem holdDetails={hold} />)}
      </div>
    </div>
  );
};

export default HoldLibrary;
