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

      <a href="#" target="_blank" className="icon-btn search-container">
        <img alt="search-icon" src={searchicon} />
      </a>
      <button className="hamburger">
        <span></span>
      </button>
    </div>
  );
}

export default NavButtons;
