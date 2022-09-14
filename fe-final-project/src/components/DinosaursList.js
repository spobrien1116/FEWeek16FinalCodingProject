import React from 'react';
import {Dinosaur} from './Dinosaur';
import {NewDinosaurForm} from './NewDinosaurForm'
import {dinosaurAPI} from '../rest/DinosaurAPI.js';

export class DinosaursList extends React.Component {
    state = {
        dinosaurs: []
    };

    componentDidMount() {
        console.log("A component did mount!");
        this.fetchDinosaurs();
    };

    fetchDinosaurs = async () => {
        console.log("An asynchronous API call has been made to fetch/READ (get) all dinosaurs!");
        const dinosaurs = await dinosaurAPI.get();
        this.setState({dinosaurs});
    };

    updateDinosaur = async (updateDinosaur) => {
        console.log("An asynchronous API call has been made to UPDATE (put) a dinosaur!");
        await dinosaurAPI.put(updateDinosaur);
        this.fetchDinosaurs();
    };

    createDinosaur = async (dinosaur) => {
        console.log("An asynchronous API call has been made to CREATE (post) a dinosaur!");
        await dinosaurAPI.post({...dinosaur, features: []});
        this.fetchDinosaurs();
    };

    deleteDinosaur = async (id) => {
        console.log("An asynchronous API call has been made to DELETE (delete) a dinosaur!");
        await dinosaurAPI.delete(id);
        this.fetchDinosaurs();
    }

    render() {
        return (
            <div className="dinosaur-database">
                <div className="dinosaur-form">
                    <NewDinosaurForm addNewDinosaur={this.createDinosaur}/>
                </div>
                <div className="dinosaur-list">
                    {this.state.dinosaurs.map((dinosaur) => (
                        <Dinosaur
                            dinosaur={dinosaur}
                            key={dinosaur._id}
                            updateDinosaur={this.updateDinosaur}
                            deleteDinosaur={this.deleteDinosaur}
                        />
                    ))}
                </div>
            </div>
        )
    }

}