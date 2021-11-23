import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Header';
import Features from './Components/Features/Features';


function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/features">
          <Features></Features>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
