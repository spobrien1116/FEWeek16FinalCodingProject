import React from "react";

export const MinimalDinosaur = (props) => {
  const { dinosaur, readyForBattle } = props;

  const chooseDinoAttack = (index) => {
    console.log("A dinosaur and attack is being chosen!");
    const chosenDinosaurAndAttack = {
      ...dinosaur,
      attack: dinosaur.features[index].part,
    };
    readyForBattle(chosenDinosaurAndAttack);
  };

  const defaultAttack = () => {
    console.log("A dinosaur with a default attack is being chosen!");
    const chosenDinosaurDefaultAttack = {
      ...dinosaur,
      attack: "Charge!",
    };
    readyForBattle(chosenDinosaurDefaultAttack);
  };

  return (
    <div className="card p-4 m-2" key={dinosaur._id}>
      <div className="card-header">
        <h3 className="cardDinoName">{dinosaur.name}</h3>
      </div>
      <ul className="list-group list-group-flush dinoFeatures">
        {dinosaur.features.map((feature, index) => (
          <li key={index} className="list-group-item">
            <b>Body Part: </b> {`${feature.part}`}
            <b>Color: </b> {`${feature.color}   `}
            <button
              className="btn btn-success selectAttackButton"
              onClick={(e) => chooseDinoAttack(index)}
            >
              Choose This Dino/Attack
            </button>
          </li>
        ))}
        <li key="default" className="list-group-item">
          <b>Default Attack: </b> {`Charge!   `}
          <button
            className="btn btn-success selectAttackButton"
            onClick={(e) => defaultAttack()}
          >
            Choose This Dino/Attack
          </button>
        </li>
      </ul>
      <img
        src={dinosaur.image}
        alt="This is the dinosaur."
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
};
