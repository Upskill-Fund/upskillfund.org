import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  // const [isClicked, setIsClicked] = React.useState(false);
  // const handleClickClose = (e) => {
  //   e.preventDefault();
  //   setIsClicked(true);
  //   console.log('isclicked true');
  // };
  // const handleClickOpen = (e) => {
  //   e.preventDefault();
  //   setIsClicked(false);
  //   console.log('isclicked false');
  // };
  return (
    <div className="navbar-menu-collapse navbar-menu ">
      <div className=" navbar-menu-collapse navbar-menu ">
        <ul className="nav navbar-menulist ">
          {/*<li
            className={`navbar-menulist-item dropdown `}
            onClick={handleClickClose}
            onMouseEnter={handleClickOpen}
          >
            <Link
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              id="dropdown-about"
              to="/about"
              title="About"
            >
              About
            </Link>
             <ul
              className={`dropdown-menu ${
                isClicked ? 'hide-dropdown' : 'show-dropdown'
              }`}
              aria-labelledby="dropdown-about"
            >
              <li onClick={handleClickClose}>
                <Link to="/about" title="About">
                  Mission Statement
                </Link>
              </li>
              <li onClick={handleClickClose}>
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
          </li>*/}
          <li className="navbar-menulist-item">
            <Link to="/" title="home">
              Home
            </Link>
          </li>
          <li className="navbar-menulist-item">
            <Link to="/about" title="about">
              About
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
