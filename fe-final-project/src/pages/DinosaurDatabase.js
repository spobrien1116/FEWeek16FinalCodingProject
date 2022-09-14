import React from 'react';
import {DinosaursList} from '../components/DinosaursList';

function DinosaurDatabase() {
    return (
        <div className="page-intro">
            <h1>Dinosaur Database</h1>
            <p>Here you will find a form to create a new dinosaur in the API.</p>
            <p>Below is a list of all the dinosaurs in the API. Feel free to add/delete features to existing dinos, or create/delete dinos!</p>
            <DinosaursList />
        </div>
        
    );
}

export default DinosaurDatabase;