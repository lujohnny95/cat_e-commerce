import React, { useState } from 'react';
import catData from './catData';
import './App.css';
import Card from "./components/Card";
import Navbar from './components/Navbar';

const createCard = (catData) => {
  return (
    <Card 
      key={catData.id}
      img={catData.imgURL}
      age={catData.age}
      price={catData.price}
    />
  )
}

const App = () => {
  return(
    <div>
      <Navbar />
      <div className="wrapper">
        {catData.map(createCard)}
    
      </div>
    </div>
    
  )
}

export default App;
