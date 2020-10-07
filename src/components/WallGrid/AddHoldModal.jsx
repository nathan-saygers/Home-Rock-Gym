// Dependencies
import React, { useEffect, useState } from "react";
import styles from "./AddHoldModal.module.scss";

const AddHoldModal = ({ holds }) => {
  const [holdOptions, setHoldOptions] = useState("");

  useEffect(() => {
    setHoldOptions(holds);
  }, []);

  return (
    <div className={styles.addHoldModalContainer}>
      <form action="">
        <select name="hold">
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
