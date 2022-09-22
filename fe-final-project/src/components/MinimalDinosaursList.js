import React from "react";
import { MinimalDinosaur } from "../components/MinimalDinosaur";
import { dinosaurAPI } from "../rest/DinosaurAPI.js";

export class MinimalDinosaursList extends React.Component {
  state = {
    dinosaurs: [],
    battlingDinosaurs: [],
  };

  componentDidMount() {
    console.log("The DinosaursListReduced component did mount!");
    this.fetchDinosaurs();
  }

  fetchDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to fetch/READ (get) all dinosaurs!"
    );
    const dinosaurs = await dinosaurAPI.get();
    this.setState({ dinosaurs });
  };

  createBattleDinosaur = async (battleReadyDino) => {
    console.log(
      "An asynchronous API call has been made to the DinosaurBattles endpoint to update with a new battling dinosaur!"
    );
    await dinosaurBattlesAPI.post({ battleReadyDino });
    //Set the state of battlingDinosaurs after creating the dinosaur. See if statement below.
    this.setState({ battlingDinosaurs });
    //Create an if statement that checks if there are two battle ready dinosaurs. If so, launch into the battle function.
  };

  readyForBattle(chosenDinosaurAndAttack) {
    console.log("Inside the readyForBattle function!");
    if (this.battlingDinosaurs.length < 2) {
      console.log(
        "The dinosaur chosen for battle is",
        chosenDinosaurAndAttack.name
      );
      console.log(
        "The chosen attack is based on its",
        chosenDinosaurAndAttack.attack,
        "feature."
      );
      //Create the random health variable here.

      //Create the random attack variable here.

      //Create the new dinosaur object to pass into createBattleDinosaur here.
      const battleReadyDino = {
        name: this.chosenDinosaurAndAttack.name,
        attack: this.chosenDinosaurAndAttack.attack,
        image: this.chosenDinosaurAndAttack.image,
        health: this.randomHealth,
        power: this.randomPower,
      };
      this.createBattleDinosaur(battleReadyDino);
    } else {
      console.log("Only two dinosaurs can battle at a time!");
    }
  }

  render() {
    return (
      <div className="data-for-battles">
        <div className="minimal-dinosaurs-list">
          {this.state.dinosaurs.map((dinosaur) => (
            <MinimalDinosaur
              dinosaur={dinosaur}
              key={dinosaur._id}
              readyForBattle={this.readyForBattle}
            />
          ))}
        </div>
        <div className="battling-dinosaurs">
          <h1>Let the battle begin!</h1>
        </div>
      </div>
    );
  }
}
