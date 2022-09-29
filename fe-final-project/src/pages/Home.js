import React from "react";
import DinoBones from "../images/dinosaur-bones.jpg";
import DinoFight from "../images/dinosaur-fight.jpg";
import DinoStorage from "../images/dinosaur-cold-storage.jpg";

function Home() {
  return (
    <>
      <div className="page-intro">
        <h1>Welcome to my dinosaur project!</h1>
      </div>
      <div className="home-content">
        <div>
          <p className="home-info">
            It would not be a very fun project if you could not create and edit
            your very own dinosaurs! If that is what you are looking to do,
            check out the Dinosaur Database. If you need an idea of what to
            create, there are dinosaurs in the database you can use for
            reference.
          </p>
          <img
            src={DinoStorage}
            alt="Dinosaur cold storage that represents the dinosaur database."
            style={{ width: "1600px", height: "1000px" }}
          />
        </div>
        <br></br>
        <div>
          <p className="home-info">
            Interested in choosing dinosaurs to pit against each other based on
            different features in a completely arbitary but fun manner? Dinosaur
            Battles is the place for you! The dinosaurs available will look
            familiar to the ones from the database. But even featureless
            dinosaurs still want to charge into battle.
          </p>
          <img
            src={DinoFight}
            alt="Dinosaurs fighting that represent the dinosaur battles page."
            style={{ width: "1600px", height: "1000px" }}
          />
        </div>
        <br></br>
        <div>
          <p className="home-info">
            Check out the About Me page to learn more about the creator of this
            project.
          </p>
          <img
            src={DinoBones}
            alt="Dinosaur bones representing the creation of the project for the About Me page."
            style={{ width: "1600px", height: "1000px" }}
          />
        </div>
        <br></br>
        <div className="secret">
          <p>
            Maybe there's a secret page if you look hard enough, who knows?
            Alright, so it could just be the page that handles errors for pages
            that don't exist. But still, you should check that one out too. Try
            typing a /endpoint that does not exist.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
