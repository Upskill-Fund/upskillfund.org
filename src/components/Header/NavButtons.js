import React from 'react';
import { Link } from 'react-router-dom';
import searchicon from '../../images/search-icon.png';
function NavButtons() {
  return (
    <div className="navbuttons-container">
      <div className="special-btn">
        <Link className="btn" to="/donate">
          Donate
        </Link>
      </div>
      <div className="search-container">
        <Link to="/" className="icon-btn  navbar-menu-collapse navbar-menu ">
          <img alt="search-icon" src={searchicon} />
        </Link>
      </div>
      <div className="hamburger-container">
        <button className="hamburger">
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default NavButtons;
