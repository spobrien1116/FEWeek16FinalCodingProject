import React from "react";
import { NewFeatureForm } from "./NewFeatureForm";
import TRex from "../images/sad-dino.jpg";

export const Dinosaur = (props) => {
  const { dinosaur, updateDinosaur, deleteDinosaur } = props;

  const deleteFeature = (index) => {
    console.log("A feature is being deleted!");
    const updatedDinosaur = {
      ...dinosaur,
      features: dinosaur.features.filter(
        (x) => dinosaur.features.indexOf(x) !== index
      ),
    };
    updateDinosaur(updatedDinosaur);
  };

  const deleteDinosaurByID = (dinosaurID) => {
    deleteDinosaur(dinosaurID);
  };

  const addNewFeature = (feature) =>
    updateDinosaur({ ...dinosaur, features: [...dinosaur.features, feature] });

  const features = () => (
    <ul className="list-group list-group-flush dinoFeatures">
      {dinosaur.features.map((feature, index) => (
        <li key={index} className="list-group-item">
          <b>Body Part: </b>
          {`${feature.part}`} <b>Color: </b>
          {`${feature.color}`}
          <button
            className="btn btn-danger featureDeleteButton"
            onClick={(e) => deleteFeature(index)}
          >
            Delete Feature
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="card p-4 m-2" key={dinosaur._id}>
      <div className="card-header">
        <h3 className="cardDinoName">{dinosaur.name}</h3>
        <button
          className="btn btn-danger deleteDinosaurButton"
          onClick={(e) => deleteDinosaurByID(dinosaur._id)}
        >
          Delete Dinosaur
        </button>
      </div>
      <ul className="list-group list-group-flush dinoInfo">
        <li className="list-group-item">
          <b>Size: </b>
          {`${dinosaur.size}`}
        </li>
        <li className="list-group-item">
          <b>Diet: </b>
          {`${dinosaur.diet}`}
        </li>
        <li className="list-group-item">
          <b>Environment: </b>
          {`${dinosaur.environment}`}
        </li>
      </ul>
      {features({ features, dinosaurID: dinosaur._id, deleteFeature })}
      <NewFeatureForm addNewFeature={addNewFeature} />
      <img src={dinosaur.image} alt="This is the dinosaur." />
    </div>
  );
};
