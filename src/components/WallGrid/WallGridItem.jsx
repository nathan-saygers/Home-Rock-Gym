// Dependencies
import React, { useState } from "react";
import AddHoldModal from "./AddHoldModal";
import styles from "./WallGridItem.module.scss";
import { UpCircleOutlined } from "@ant-design/icons";

const WallGridItem = ({ holds, coord }) => {
  const [displayAddHoldModal, setDisplayAddHoldModal] = useState(false);
  const [selectedHold, setSelectedHold] = useState(false);

  return (
    <div
      className={styles.gridItem}
      onClick={() => setDisplayAddHoldModal(true)}
    >
      {selectedHold ? <UpCircleOutlined /> : <p>{coord.xyAxes}</p>}
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
