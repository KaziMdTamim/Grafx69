import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Header';
import Features from './Components/Features/Features';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';


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
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
