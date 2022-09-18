import React, { useState } from "react";
import Anky from "../images/ankylosaurus.jpg";
import Basilo from "../images/basilosaurus.jpg";
import Brachi from "../images/brachiosaurus.jpg";
import Giga from "../images/giganotosaurus.jpg";
import Ptero from "../images/pterodactyl.jpg";
import Spino from "../images/spinosaurus.jpg";
import Stego from "../images/stegosaurus.jpg";
import Trike from "../images/triceratops.jpg";
import TRex from "../images/tyrannosaurus-rex.jpg";
import Unknown from "../images/unknown-dino.jpg";
import Velo from "../images/velociraptor.jpg";

export const NewDinosaurForm = (props) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [diet, setDiet] = useState("");
  const [environment, setEnvironment] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && size && diet && environment && image) {
      props.addNewDinosaur({ name, size, diet, environment, image });
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
            <option value="">--Please select an option--</option>
            <option value={Anky}>Ankylosaurus</option>
            <option value={Basilo}>Basilosaurus</option>
            <option value={Brachi}>Brachiosaurus</option>
            <option value={Giga}>Giganotosaurus</option>
            <option value={Ptero}>Pterodactyl</option>
            <option value={Spino}>Spinosaurus</option>
            <option value={Stego}>Stegosaurus</option>
            <option value={Trike}>Triceratops</option>
            <option value={TRex}>Tyrannosaurus Rex</option>
            <option value={Unknown}>Unknown (picture not in database)</option>
            <option value={Velo}>Velociraptor</option>
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
