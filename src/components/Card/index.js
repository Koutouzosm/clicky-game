import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image}
                    alt={props.name}
                />
            </div>
        </div>
    )
    // const shuffledlogosList = this.state.logosList.sort(() => 0.5 - Math.random());

    // this.setState({
    //   friendList: shuffledFriendList
    // });
};



export default Card;