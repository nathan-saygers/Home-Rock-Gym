// Dependencies
import React, { useEffect, useState } from "react";
import styles from "./AddHoldModal.module.scss";

const AddHoldModal = ({
  holds,
  setSelectedHold,
  selectedHold,
  setDisplayAddHoldModal,
}) => {
  const [holdOptions, setHoldOptions] = useState("");

  const handleChanges = (event) => {
    for (const hold of holds) {
      if (hold.name === event.target.value) {
        setSelectedHold(hold);
      }
    }
    setDisplayAddHoldModal(false);
  };

  useEffect(() => {
    setHoldOptions(holds);
  }, []);

  return (
    <div className={styles.addHoldModalContainer}>
      <form>
        <select name="hold" value={selectedHold} onChange={handleChanges}>
          <option value="">add a hold</option>
          {holdOptions &&
            holdOptions.map((hold, index) => (
              <option value={hold.name} key={index}>
                {hold.name}
              </option>
            ))}
        </select>
      </form>
    </div>
  );
};

export default AddHoldModal;
