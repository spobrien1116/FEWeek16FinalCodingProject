import React from "react";
import { MinimalDinosaur } from "../components/MinimalDinosaur";
import { dinosaurAPI } from "../rest/DinosaurAPI.js";
import { dinosaurBattlesAPI } from "../rest/DinosaurBattlesAPI.js";

export class MinimalDinosaursList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaurs: [],
      battlingDinosaurs: [],
    };
  }

  componentDidMount() {
    console.log("The MinimalDinosaursList component did mount!");
    this.fetchDinosaurs();
  }

  fetchDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to fetch/READ (get) all dinosaurs!"
    );
    const dinosaurs = await dinosaurAPI.get();
    this.setState({ dinosaurs: dinosaurs });
  };

  fetchBattleDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to fetch/READ (get) all battle dinosaurs!"
    );
    const battlingDinosaurs = await dinosaurBattlesAPI.get();
    this.setState({ battlingDinosaurs: battlingDinosaurs });
  };

  createBattleDinosaur = async (battleReadyDino) => {
    console.log(
      "An asynchronous API call has been made to the DinosaurBattles endpoint to update with a new battling dinosaur!"
    );
    await dinosaurBattlesAPI.post({ battleReadyDino });
    //Set the state of battlingDinosaurs after creating the dinosaur. See if statement below.
    this.fetchBattleDinosaurs();
    //Create an if statement that checks if there are two battle ready dinosaurs. If so, launch into the battle function.
    if (this.state.battlingDinosaurs.length === 2) {
      console.log("It is time for these two dinosaurs to battle!");
    }
  };

  readyForBattle(chosenDinosaurAndAttack) {
    console.log("Inside the readyForBattle function!");
    console.log(this.state.dinosaurs);
    console.log(this.state.battlingDinosaurs);
    if (this.state.battlingDinosaurs.length < 2) {
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
      let randomHealth = this.generateRandomNumber("health", 30, 75);
      //Create the random attack variable here.
      let randomPower = this.generateRandomNumber("power", 5, 15);
      //Create the new dinosaur object to pass into createBattleDinosaur here.
      const battleReadyDino = {
        name: this.chosenDinosaurAndAttack.name,
        attack: this.chosenDinosaurAndAttack.attack,
        image: this.chosenDinosaurAndAttack.image,
        health: randomHealth,
        power: randomPower,
      };
      this.createBattleDinosaur(battleReadyDino);
    } else {
      console.log("Only two dinosaurs can battle at a time!");
    }
  }

  //Function that generates a random number between (and/or including) two values. It is used for dinosaur health and power.
  generateRandomNumber(numberName, minimum, maximum) {
    console.log("Inside the generateRandomNumber function for", numberName);
    console.log(minimum, "is the minimum value for", numberName, ".");
    console.log(maximum, "is the maximum value for", numberName, ".");
    let min = Math.ceil(minimum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1) + min);
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
