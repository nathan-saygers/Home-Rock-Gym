// Dependencies
import React, { useState } from "react";
import AddHoldModal from "./AddHoldModal";
import styles from "./WallGridItem.module.scss";

const WallGridItem = ({ holds, coord }) => {
  const [displayAddHoldModal, setDisplayAddHoldModal] = useState(false);

  return (
    <div
      className={styles.gridItem}
      onClick={() => setDisplayAddHoldModal(!displayAddHoldModal)}
    >
      <p>{coord.xyAxes}</p>
      {displayAddHoldModal && <AddHoldModal holds={holds} />}
    </div>
  );
};

export default WallGridItem;
