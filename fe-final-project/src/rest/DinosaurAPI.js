const DINOSAUR_ENDPOINT = 'https://630006689350a1e548e97a11.mockapi.io/Dinosaur';

class DinosaurAPI {
    // The API for a READ (get).
    get = async () => {
        try {
            const resp = await fetch(DINOSAUR_ENDPOINT);
            const data = await resp.json();
            console.log("The get response was a success!");
            return data;
        } catch(e) {
            console.log("There was an issue when calling the fetchDinosaurs function.", e);
        }
        
    }

    // The API for an UPDATE (put).
    put = async (dinosaur) => {
        try {
            const resp = await fetch(`${DINOSAUR_ENDPOINT}/${dinosaur._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dinosaur)
            });
            console.log("The put response was a success!");
            return await resp.json();
        } catch(e) {
            console.log("There was an issue when calling the updateDinosaur function.", e);
        }
        
    }

    // The API for a CREATE (post).
    post = async (dinosaur) => {
        try {
            const resp = await fetch(`${DINOSAUR_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dinosaur)
            });
            console.log("The post response was a success!");
            return await resp.json();
        } catch(e) {
            console.log("There was an issue when calling the addNewDinosaur function.", e);
        }
    }

    // The API for a DELETE (delete).
    delete = async (id) => {
        try {
            const resp = await fetch(`${DINOSAUR_ENDPOINT}/${id}`, {
                method: 'DELETE'
            });
            const data = await resp.json();
            console.log("The delete response was a success!");
            return data;
        } catch(e) {
            console.log("There was an issue when calling the deleteDinosaur function.", e);
        }
    }
}

export const dinosaurAPI = new DinosaurAPI();