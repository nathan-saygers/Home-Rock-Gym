// Dependencies
import React, { useState } from "react";
import styles from "./WallGridItem.module.scss";

const WallGridItem = ({ coord }) => {
  const [displayAddHoldModal, setDisplayAddHoldModal] = useState(false);

  console.log("Modal visible?", displayAddHoldModal);

  return (
    <div
      className={styles.gridItem}
      onClick={() => setDisplayAddHoldModal(!displayAddHoldModal)}
    >
      {coord.name}
    </div>
  );
};

export default WallGridItem;
