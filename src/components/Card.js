import React, { useState } from "react";

//Add item function, onClick event, pass on the product and price

const Card = (props) => {

    const [order, setOrder] = useState({
        name: "",
        price: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setOrder((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });

    }

    const submitOrder = (event) => {
        props.onAdd(order);

        event.preventDefault();
    }

    return(
      <div className="card">
        <div className="card-body">
          <img className="card-img" src={props.img} alt="cat image"/>
          <h2 className="card-text"> {props.name}:</h2>
          <h3 className="card-text"> {props.age} old, £{props.price}</h3>
        </div>
        <button className="card-btn" onClick={submitOrder}>Take Me Home</button>
      </div>
    )
}

export default Card;
