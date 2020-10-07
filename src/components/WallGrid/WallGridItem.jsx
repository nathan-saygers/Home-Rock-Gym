// Dependencies
import React, { useState } from "react";
import AddHoldModal from "./AddHoldModal";
import styles from "./WallGridItem.module.scss";

const WallGridItem = ({ coord }) => {
  const [displayAddHoldModal, setDisplayAddHoldModal] = useState(false);

  console.log("Modal visible?", coord, displayAddHoldModal);

  return (
    <div
      className={styles.gridItem}
      onClick={() => setDisplayAddHoldModal(!displayAddHoldModal)}
    >
      <p>{coord.xyAxes}</p>
      {displayAddHoldModal && <AddHoldModal />}
    </div>
  );
};

export default WallGridItem;
