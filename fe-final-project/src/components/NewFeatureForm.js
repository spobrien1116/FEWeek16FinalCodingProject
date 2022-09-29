import React, { useState } from "react";

export const NewFeatureForm = (props) => {
  const [part, setPart] = useState("");
  const [color, setColor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (part && color) {
      props.addNewFeature({ part, color });
      setPart("");
      setColor("");
      console.log("A new feature is being added!");
    } else {
      console.log("Both part and color must have a value.");
    }
  };

  return (
    <div className="featureFormInputDiv">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control featureInput"
          placeholder="Dinosaur's Body Part"
          onChange={(e) => setPart(e.target.value)}
          value={part}
        ></input>
        <input
          type="text"
          className="form-control featureInput"
          placeholder="Dinosaur's Body Part Color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        ></input>
        <button className="btn btn-primary form-control" type="submit">
          Add Feature
        </button>
      </form>
    </div>
  );
};
