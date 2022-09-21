import React from "react";
import { MinimalDinosaursList } from "../components/MinimalDinosaursList";

function DinosaurBattles() {
  return (
    <>
      <div className="page-intro">
        <h1>Dinosaur Battles</h1>
        <p>Pick a dinosaur from the database to battle another dinosaur!</p>
        <p>
          Choose a listed feature from the dinosaur that will be used for
          battle. If no other features are listed, the default attack of Charge!
          can be selected.
        </p>
      </div>
      <MinimalDinosaursList />
    </>
  );
}

export default DinosaurBattles;
