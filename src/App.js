import React, { useState } from "react";
import "./App.css"

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [total, setTotal] = useState(0);

  const [cats] = useState([
    {
      id: 1,
      imgURL: "https://cdn2.thecatapi.com/images/8k6.jpg",
      name: "Mimi",
      price: 250
    },
    {
      id: 2,
      imgURL: "https://cdn2.thecatapi.com/images/TlaKJApjW.jpg",
      name: "Mocca",
      price: 280
    },
    {
      id: 3,
      imgURL: "https://cdn2.thecatapi.com/images/b_mnLAEvN.jpg",
      name: "Yumi",
      price: 360
    },
    {
      id: 4,
      imgURL: "https://cdn2.thecatapi.com/images/7l8.jpg",
      name: "Polo",
      price: 300
    },
    {
      id: 5,
      imgURL: "https://cdn2.thecatapi.com/images/73q.jpg",
      name: "Milo",
      price: 380
    },
    {
      id: 6,
      imgURL: "https://cdn2.thecatapi.com/images/KBjPMWOsK.jpg",
      name: "Zoro",
      price: 380
    },
    {
      id: 7,
      imgURL: "https://cdn2.thecatapi.com/images/MTc4ODg1NA.jpg",
      name: "Evie",
      price: 350
    },
    {
      id: 8,
      imgURL: "https://cdn2.thecatapi.com/images/5vo-HMw09.jpg",
      name: "Don",
      price: 450
    }
  ]);

  const addToCart = (cat) => {
    setCart([...cart, { ...cat }]);
    setTotal(total + cat.price);
  };

  const removeFromCart = (catToRemove) => {
    setCart(cart.filter((cat) => cat !== catToRemove));
    setTotal(total - catToRemove.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => {
    <>
      <h1>Cat-a-logue</h1>
      <div className="wrapper" key={index}>
        {cats.map((cat, index) => {
          <div className="card" key={index}>
            <div className="card-body">
              <img className="card-img" src={cat.imgURL} alt="cat image" />
              <h2 className="card-text">{cat.name}</h2>
              <h3 className="card-text"> £ {cat.price}</h3>
            </div>
            <button className="card-btn" onClick={() => addToCart(cat)}>
              Take Me Home
            </button>
          </div>     
        })}
      </div>
    </>
  }

  const renderCart = () => (
    <>
      <h1>Cat-Cart</h1>
      <div className="wrapper">
        {cart.map((cat, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <img className="card-img" src={cat.imgURL} alt="cat image" />
              <h2 className="card-text"> {cat.name}</h2>
              <h3 className="card-text"> £ {cat.price}</h3>
            </div>
            <button className="card-btn" onClick={() => removeFromCart(cat)}>
              Remove from Cart
            </button>
          </div>
        ))}
        <div className="cart-info">
          <h1>Total: £{total}</h1>
          <button className="clear-btn" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="App">
      <div className="topnav">
        <button className="nav-btn" onClick={navigateTo(PAGE_CART)}></button>
        <button className="nav-btn" onClick={navigateTo(PAGE_PRODUCTS)}></button>
      </div>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;