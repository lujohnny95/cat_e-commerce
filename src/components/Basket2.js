import React, { useState } from "react";
import BasketItem from "./BasketItem";
import Card from "./Card";

//bring the cards into here

function Basket2() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => {
      return [...prevOrders, newOrder];
    });
  };

  const deleteOrder = (id) => {
    setOrders((prevOrders) => {
      return prevOrders.filter((order, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="basket">
      
      <Card onAdd={addOrder} />

      {orders.map((orderItem, index) => {
        return (
          <BasketItem 
              key={index}
              id={index}
              name={orderItem.name}
              price={orderItem.price}
              onChecked={deleteOrder}
          />
        );
      })}
    </div>
  );
}

export default Basket2;
