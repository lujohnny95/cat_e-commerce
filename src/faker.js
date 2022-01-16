import React, { useState } from "react";


const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const App = () => {
  const faker = require("faker");
  const [cart, setCart] = useState([]);
  const [cats, setCats] = useState([
    {
      url: "",
      name: "",
      price: "",
    }
  ]);
  const [page, setPage] = useState(PAGE_PRODUCTS)
  const [error, setError] = useState({
    error: false,
    message: ""
  });
  
  const getImage = async () => {
    const headers = new Headers();
    headers.append(["x-api-key"], "6786a1bb-7f35-4970-8a44-f176359f7e8c");
    const response = await fetch (
      "https://api.thecatapi.com/v1/images/search?limit=20",
			{
				headers,
			}
    )
    const info = await response.json();
    setCats(info);
  };

  const getName = async () => {
    const response = await fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=20_locale=en_EN"
    );
    const info = await response.json();
    let nameArr = [];
    for (let i = 0; i < info.data.length; i++) {

    }
  }


  const addToCart = (cat) => {
    setCart([...cart, { ...cat }]);
  };

  const removeFromCart = (catToRemove) => {
    setCart(cart.filter((cat) => cat !== catToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => {
    <>
      <h1>Cat-a-logue</h1>
      <div className="wrapper">
        {cats.map((cat, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <img className="card-img" src={cat.url} alt="cat image"/>
              <h2 className="card-text">{cat.name}</h2>
              <h3 className="card-text">£ {cat.price}</h3>
            </div>
            <button className="card-btn" onClick={() => addToCart(cat)}>Take Me Home</button>
          </div>
        ))}
      </div>
    </>
  };

  const renderCart = () => (
    <>
    <h1>Cat-Cart</h1>
    <div className="wrapper">
      {cart.map((cat, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <img className="card-img" src={cat.url} alt="cat image"/>
            <h2 className="card-text">{cat.name}</h2>
            <h3 className="card-text">£ {cat.price}</h3>
          </div>
          <button className="card-btn" onClick={() => removeFromCart(cat)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  </>
  )
  
  return (
    <div className="App">
      <div className="topnav">
        <button className="nav-btn" onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
        <button className="nav-btn" onClick={() => navigateTo(PAGE_PRODUCTS)}>View Cats</button>
      </div>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;