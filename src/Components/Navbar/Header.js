import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/new_logo_idea-01-removebg-preview.png';
import './Header.css';

const Header = () => {
    return (
        
          <Navbar bg="success" variant="dark">
    <Container>
    <Navbar.Brand href="/home"><img src={logo} width="120px" alt=""></img></Navbar.Brand>
    <Nav className="me-auto navbar-responsive">
      <Link className="header-compo" to="/home">Home</Link>
      <Link className="header-compo" to="/features">Features</Link>
      <Link className="header-compo" to="/about">About Us</Link>
    </Nav>
    </Container>
  </Navbar>
        
    );
};

export default Header;