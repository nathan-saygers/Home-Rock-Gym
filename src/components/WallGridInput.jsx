// Dependencies
import React, { useState } from "react";
import styles from "./WallGridInput.module.scss";

const WallGridInput = (props) => {
  const [dimensions, setDimensions] = useState({});
  const [wallName, setWallName] = useState("Default Wall");

  // On change handler
  const handleChanges = (event) => {
    if (event.target.name === "name") {
      setWallName(event.target.value);
      console.log(wallName);
    } else {
      console.log("weeeow", event.target.name, event.target.value);
      setDimensions({ ...dimensions, [event.target.name]: event.target.value });
      console.log("pahoyhoy", dimensions);
    }
  };

  return (
    <div className={styles.wallInputForm}>
      <p>Update Wall Details:</p>
      <form action="">
        <p>Height:</p>
        <input
          type="number"
          name="height"
          placeholder="Height"
          onChange={handleChanges}
          value={dimensions.height}
        />
        <p>Width:</p>
        <input
          type="number"
          name="width"
          placeholder="Width"
          onChange={handleChanges}
          value={dimensions.width}
        />
        <p>Wall Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Wall Name"
          onChange={handleChanges}
          value={wallName}
        />
      </form>
    </div>
  );
};

export default WallGridInput;
