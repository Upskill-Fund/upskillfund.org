import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import NavButtons from './NavButtons';
function Header() {
  return (
    <div id="header-container">
      <nav id="header-nav" className="navbar">
        <div className="container">
          <Logo />
          <Menu />
          <NavButtons />
        </div>
      </nav>
    </div>
  );
}

export default Header;
