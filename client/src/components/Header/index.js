import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../images/Upskill Logo/PNG/Logo Full Color.png';

import { Link } from 'react-router-dom';
function Header() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        id="nav-header"
        expanded={expanded}
      >
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/" onClick={() => setExpanded(false)}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link btn btn-custom-primary btn-block"
                to="/donate"
                onClick={() => setExpanded(false)}
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

export default Header;
