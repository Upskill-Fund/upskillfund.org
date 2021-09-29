import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar-menu-collapse navbar-menu ">
      <div className=" navbar-menu-collapse navbar-menu ">
        <ul className="nav navbar-menulist ">
          <li className="navbar-menulist-item dropdown">
            <Link to="/about" title="About">
              About
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about" title="About">
                  About
                </Link>
              </li>
              <li>
                <Link to="/manifesto" title="Manifesto">
                  Manifesto
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar-menulist-item">
            <Link to="/investments" title="investments">
              Investments
            </Link>
          </li>
          <li className="navbar-menulist-item">
            <Link to="/funds" title="funds">
              Funds
            </Link>
          </li>
          <li className="navbar-menulist-item">
            <Link to="/contact" title="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
