import React, { useState } from "react";
import TRex from "../images/sad-dino.jpg";

export const NewDinosaurForm = (props) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [diet, setDiet] = useState("");
  const [environment, setEnvironment] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && size && diet && environment) {
      props.addNewDinosaur({ name, size, diet, environment });
      setName("");
      setSize("");
      setDiet("");
      setEnvironment("");
      setImage("");
      console.log("A new dinosaur is being created!");
    } else {
      console.log(
        "Do not submit a blank value. Please enter a string for the dinosaur's name, size, diet, and environment."
      );
    }
  };

  return (
    <div>
      <form
        className="container border border-success p-4"
        id="dinoForm"
        onSubmit={onSubmit}
      >
        <div className="form-group mb-3">
          <label htmlFor="place" className="form-control dinoFormLabel">
            Enter your new dinosaur name.
          </label>
          <input
            type="text"
            className="form-control dinoFormInput"
            id="dinoName"
            placeholder="Dinosaur's Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="place" className="form-control dinoFormLabel">
            Enter your new dinosaur's size.
          </label>
          <input
            type="text"
            className="form-control dinoFormInput"
            id="dinoSize"
            placeholder="Dinosaur's Size"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="place" className="form-control dinoFormLabel">
            Enter your new dinosaur's diet.
          </label>
          <input
            type="text"
            className="form-control dinoFormInput"
            id="dinoDiet"
            placeholder="Dinosaur's Diet"
            onChange={(e) => setDiet(e.target.value)}
            value={diet}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="place" className="form-control dinoFormLabel">
            Enter your new dinosaur's environment.
          </label>
          <input
            type="text"
            className="form-control dinoFormInput"
            id="dinoEnvironment"
            placeholder="Dinosaur's Environment"
            onChange={(e) => setEnvironment(e.target.value)}
            value={environment}
          ></input>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="place" className="form-control dinoFormLabel">
            Choose your new dinosaur's image.
          </label>
          <select
            className="form-control dinoFormInput"
            id="dinoImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          >
            <option value={TRex}>Tyrannosaurus Rex</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-primary form-control"
            id="addDino"
            type="submit"
          >
            Add Dinosaur
          </button>
        </div>
      </form>
    </div>
  );
};
