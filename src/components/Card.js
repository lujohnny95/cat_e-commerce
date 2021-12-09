import React from "react";


const Card = (props) => {
    return(
      <div className="card">
        <div className="card-body">
          <img className="card-img" src={props.img} alt="cat image"/>
          <h2 className="card-text">{props.age} old, £{props.price}</h2>
        </div>
        <button className="card-btn">Take Me Home</button>
      </div>
    )
}

export default Card;