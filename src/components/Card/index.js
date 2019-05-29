import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img 
                // onClick={() => handleOnClick(Id)}
                src={props.image}
                    alt={props.name}
                    />
            </div>
        </div>
    )

};



export default Card;