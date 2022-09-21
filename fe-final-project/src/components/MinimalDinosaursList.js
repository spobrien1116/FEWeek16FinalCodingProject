import React from "react";
import { MinimalDinosaur } from "../components/MinimalDinosaur";
import { dinosaurAPI } from "../rest/DinosaurAPI.js";

export class MinimalDinosaursList extends React.Component {
  state = {
    dinosaurs: [],
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

  readyForBattle(chosenDinosaurAndAttack) {
    console.log("Inside the readyForBattle function!");
    console.log(
      "The dinosaur chosen for battle is",
      chosenDinosaurAndAttack.name
    );
    console.log(
      "The chosen attack is based on its",
      chosenDinosaurAndAttack.attack,
      "feature."
    );
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
      </div>
    );
  }
}
