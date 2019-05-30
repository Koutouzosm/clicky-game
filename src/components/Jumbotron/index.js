import React from 'react'
import './style.css'


 

function Jumbotron (props) {

    const { currentScore, highScore } = props;
return(
<div className="jumbotron jumbotron-fluid text-center">
    <h2>Let's Test Your Memory!!</h2>
    <small>Start by clicking an image, when the images shuffle choose wisely!! Choose the same image and lose, choose a different image they will shuffle and choose again. Hit 25 different images to WIN!!</small>
    <p>Your Current Score: {currentScore}</p>
    <p>Your Highest Score: {highScore}</p>
</div>
)};


export default Jumbotron;