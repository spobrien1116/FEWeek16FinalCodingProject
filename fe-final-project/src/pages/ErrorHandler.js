import React from 'react';
import SadDino from '../images/sad-dino.jpg';

function ErrorHandler() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>It seems the page you are looking for does not exist. Instead, here is a picture of a sad dinosaur.</p>
            <img src={SadDino} alt="A sad dinosaur looking outside."></img>
        </div>
    );
}

export default ErrorHandler;