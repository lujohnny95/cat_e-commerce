import React, { useState } from "react";

const Product = (props) => {

    return (

    <div className="product">
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <button
        onClick={() => {
            props.onChecked(props.id);
        }}
        >
        DELETE
        </button>
    </div>
    );
}
    
export default Product;
