import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../images/Upskill Logo/PNG/Logo Full Color.png';

import { Link } from 'react-router-dom';
function Header1() {
  return (
    <div className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        id="nav-header"
      >
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link btn btn-custom-primary btn-block"
                to="/donate"
              >
                Donate
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header1;
