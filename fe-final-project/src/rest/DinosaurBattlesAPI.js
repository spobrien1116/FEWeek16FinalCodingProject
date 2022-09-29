const DINOSAUR_ENDPOINT =
  "https://630006689350a1e548e97a11.mockapi.io/DinosaurBattles";

class DinosaurBattlesAPI {
  // The API for a READ (get).
  get = async () => {
    try {
      const resp = await fetch(DINOSAUR_ENDPOINT);
      const data = await resp.json();
      console.log("The DinosaurBattlesAPI get response was a success!");
      return data;
    } catch (e) {
      console.log(
        "There was an issue when calling the fetchBattleDinosaurs function.",
        e
      );
    }
  };

  // The API for a CREATE (post).
  post = async (dinosaur) => {
    try {
      const resp = await fetch(`${DINOSAUR_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dinosaur),
      });
      console.log("The DinosaurBattlesAPI post response was a success!");
      return await resp.json();
    } catch (e) {
      console.log(
        "There was an issue when calling the createBattleDinosaur function.",
        e
      );
    }
  };

  // The API for a DELETE (delete).
  delete = async () => {
    try {
      const resp = await fetch(`${DINOSAUR_ENDPOINT}`, {
        method: "DELETE",
      });
      const data = await resp.json();
      console.log("The DinosaurBattlesAPI delete response was a success!");
      return data;
    } catch (e) {
      console.log(
        "There was an issue when calling the deleteBattleDinosaur function.",
        e
      );
    }
  };
}

export const dinosaurBattlesAPI = new DinosaurBattlesAPI();
