// Dependencies
import React, { useState } from "react";
import AddHoldModal from "./AddHoldModal";
import styles from "./WallGridItem.module.scss";

const WallGridItem = ({ holds, coord }) => {
  const [displayAddHoldModal, setDisplayAddHoldModal] = useState(false);
  const [selectedHold, setSelectedHold] = useState();

  console.log(coord, "::", selectedHold);

  return (
    <div
      className={styles.gridItem}
      onClick={() => setDisplayAddHoldModal(true)}
    >
      <p>{coord.xyAxes}</p>
      {displayAddHoldModal && (
        <AddHoldModal
          holds={holds}
          setDisplayAddHoldModal={setDisplayAddHoldModal}
          selectedHold={selectedHold}
          setSelectedHold={setSelectedHold}
        />
      )}
    </div>
  );
};

export default WallGridItem;
