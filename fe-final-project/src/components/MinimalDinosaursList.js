import React from "react";
import { BattleDinosaur } from "../components/BattleDinosaur";
import { MinimalDinosaur } from "../components/MinimalDinosaur";
import { dinosaurAPI } from "../rest/DinosaurAPI.js";
import { dinosaurBattlesAPI } from "../rest/DinosaurBattlesAPI.js";

export class MinimalDinosaursList extends React.Component {
  constructor() {
    super();
    this.state = {
      dinosaurs: [],
      battlingDinosaurs: [],
    };
  }

  componentDidMount() {
    console.log("The MinimalDinosaursList component did mount!");
    this.fetchDinosaurs();
    this.fetchBattleDinosaurs().then((battlingDinosaurs) => {
      this.setState({ battlingDinosaurs });
    });
  }

  fetchDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to fetch/READ (get) all dinosaurs!"
    );
    const dinosaurs = await dinosaurAPI.get();
    this.setState({ dinosaurs });
  };

  fetchBattleDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to fetch/READ (get) all battle dinosaurs!"
    );
    const battlingDinosaurs = await dinosaurBattlesAPI.get();
    console.log(
      "This is the response from getting the list of battling dinosaurs from the API:",
      battlingDinosaurs
    );
    return battlingDinosaurs;
  };

  deleteBattleDinosaurs = async () => {
    console.log(
      "An asynchronous API call has been made to DELETE (delete) all battling dinosaurs!"
    );
    await dinosaurBattlesAPI.delete();
    return this.fetchBattleDinosaurs();
  };

  createBattleDinosaur = async (battleReadyDino) => {
    console.log("Inside the createBattleDinosaur function!");
    console.log("The current state of dinosaurs:", this.state.dinosaurs);
    console.log(
      "The current state of battlingDinosaurs:",
      this.state.battlingDinosaurs
    );
    /* If statement that checks to see if there are less than 2 battle ready dinosaurs in the dinosaurBattlesAPI.
    If there is not, than it will not allow the creation of another battlingDinosaur object in the API. */
    if (this.state.battlingDinosaurs.length < 2) {
      console.log(
        "An asynchronous API call has been made to the DinosaurBattles endpoint to update with a new battling dinosaur!"
      );
      await dinosaurBattlesAPI.post(battleReadyDino);
      //Set the state of battlingDinosaurs after creating the dinosaur. See if statement below.
      const battlingDinosaurs = await this.fetchBattleDinosaurs();
      //Create an if statement that checks if there are two battle ready dinosaurs. If so, launch into the battle function.
      console.log(
        `The number of dinosaurs in the battlingDinosaurs array after awaiting a fetch: ${battlingDinosaurs.length}`
      );
      this.setState({ battlingDinosaurs });
      if (battlingDinosaurs.length === 2) {
        console.log("It is time for these two dinosaurs to battle!");
        /* This is where the two dinosaurs simultaneously use their attacks against each other's health.
        If one dinosaur is still standing when the other is brought to 0 or less health, it is the winner.
        If both are knocked out, then it is declared a tie.
        Afterwards, the battlingDinosaurs database should have its contents be deleted. */
        let dino1HP = battlingDinosaurs[0].health;
        let dino2HP = battlingDinosaurs[1].health;
        do {
          console.log(
            `${battlingDinosaurs[0].name} uses ${battlingDinosaurs[0].attack} to attack ${battlingDinosaurs[1].name} for ${battlingDinosaurs[0].power} damage!`
          );
          console.log(
            `${battlingDinosaurs[1].name} uses ${battlingDinosaurs[1].attack} to attack ${battlingDinosaurs[0].name} for ${battlingDinosaurs[1].power} damage!`
          );
          console.log(
            `${battlingDinosaurs[0].name}  went from ${dino1HP} health to ${
              dino1HP - battlingDinosaurs[1].power
            } health.`
          );
          console.log(
            `${battlingDinosaurs[1].name}  went from ${dino2HP} health to ${
              dino2HP - battlingDinosaurs[0].power
            } health.`
          );
          dino1HP = dino1HP - battlingDinosaurs[1].power;
          dino2HP = dino2HP - battlingDinosaurs[0].power;
        } while (dino1HP > 0 && dino2HP > 0);
        if (dino1HP > 0 && dino2HP <= 0) {
          console.log(`${battlingDinosaurs[0].name} is the winner!`);
        } else if (dino2HP > 0 && dino1HP <= 0) {
          console.log(`${battlingDinosaurs[1].name} is the winner!`);
        } else {
          console.log("Oh no, both dinosaurs passed out! It is a tie.");
        }
        const emptyBattlingDinosaurs = await this.deleteBattleDinosaurs();
        this.setState({ battlingDinosaurs: emptyBattlingDinosaurs });
      }
    } else {
      console.log("Only two dinosaurs can battle at a time!");
    }
  };

  readyForBattle = (chosenDinosaurAndAttack) => {
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
    //Create the random health variable here.
    let randomHealth = this.generateRandomNumber("health", 30, 75);
    console.log(`The random health chosen was ${randomHealth}.`);
    //Create the random attack variable here.
    let randomPower = this.generateRandomNumber("power", 5, 15);
    console.log(`The random power chosen was ${randomPower}.`);
    //Create the new dinosaur object to pass into createBattleDinosaur here.
    const battleReadyDino = {
      name: chosenDinosaurAndAttack.name,
      attack: chosenDinosaurAndAttack.attack,
      image: chosenDinosaurAndAttack.image,
      health: randomHealth,
      power: randomPower,
    };
    console.log("The dinosaur being created:", battleReadyDino);
    this.createBattleDinosaur(battleReadyDino);
  };

  //Function that generates a random number between (and/or including) two values. It is used for dinosaur health and power.
  generateRandomNumber = (numberName, minimum, maximum) => {
    console.log(
      "Inside the generateRandomNumber function for",
      numberName,
      "."
    );
    console.log(`${minimum} is the minimum value for ${numberName}.`);
    console.log(`${maximum} is the maximum value for ${numberName}.`);
    let min = Math.ceil(minimum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
          {this.state.battlingDinosaurs.map((dinosaur) => (
            <BattleDinosaur dinosaur={dinosaur} key={`battle${dinosaur._id}`} />
          ))}
        </div>
      </div>
    );
  }
}
