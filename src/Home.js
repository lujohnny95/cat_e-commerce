import React from 'react';
import catData from './catData';
import './App.css';
import Card from "./components/Card";
import Navbar from './components/Navbar';
//import Basket2 from './components/Basket2';

const createCard = (catData) => {
    return (
      <Card 
        key={catData.id}
        img={catData.imgURL}
        name={catData.name}
        age={catData.age}
        price={catData.price}
      />
    )
  }

const Home = () => {
  return(
    <div>
      <Navbar />
      <div className="wrapper">
        {catData.map(createCard)}    
      </div>
    </div>
    
  )
}

export default Home;