import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Basket2 from './components/Basket2';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return(
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/Basket2">
          <Basket2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </>
    </Router>    
  );
}
export default App;
