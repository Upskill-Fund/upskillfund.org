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

      <Link to="/" className="icon-btn search-container">
        <img alt="search-icon" src={searchicon} />
      </Link>
      <button className="hamburger">
        <span></span>
      </button>
    </div>
  );
}

export default NavButtons;
