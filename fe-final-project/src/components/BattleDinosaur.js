import React from "react";

export const BattleDinosaur = (props) => {
  const { dinosaur } = props;

  return (
    <div className="card p-4 m-2" key={dinosaur._id}>
      <div className="card-header cardHeaderBattle">
        <h3 className="cardBattleDinoName">{dinosaur.name}</h3>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item battleDinoAttack">
            <b>Attack: </b> {`${dinosaur.attack}`}
          </li>
          <li className="list-group-item battleDinoPower">
            <b>Power: </b> {`${dinosaur.power}`}
          </li>
          <li className="list-group-item battleDinoHealth">
            <b>Health: </b> {`${dinosaur.health}`}
          </li>
        </ul>
        <br></br>
        <img
          className="centerImage"
          src={dinosaur.image}
          alt="This is the dinosaur."
          style={{ width: "1000px", height: "500px" }}
        />
      </div>
    </div>
  );
};
