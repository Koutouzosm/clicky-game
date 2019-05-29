import React from 'react'
import './style.css'


 

function Header (props) {

    const { currentScore, highScore } = props;
return(
<div className="jumbotron jumbotron-fluid text-center">
    <h2>Let's Test Your Memory!!</h2>
    <p>Your Current Score: {currentScore}</p>
    <p>Your Highest Score: {highScore}</p>
</div>
)};


export default Header;