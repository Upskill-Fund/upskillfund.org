import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Upskill Logo/PNG/Logo Full Color.png';
function Logo() {
  return (
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="upskill-fund-logo" />
    </Link>
  );
}

export default Logo;
