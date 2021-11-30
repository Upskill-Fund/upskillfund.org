import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Upskill Logo/PNG/Logo White.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="pb-4 pt-4 bg-dark text-white">
      <div className="text-center mb-4">
        <img src={logo} alt="upskill-logo" width="90" />
      </div>
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-12 col-md-2 mb-5">
            <h4>Upskill-Fund</h4>
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
          <div className="col-12 col-md-2 mb-5">
            <h4>About</h4>
            <p>
              <Link to="/about">Mission Statement</Link>
            </p>
          </div>
          <div className="col-12 col-md-2 mb-5">
            <h4>Contact</h4>
            <p>
              <Link to="/contact">Contact us</Link>
            </p>
          </div>
          <div className="col-12 col-md-2 mb-5">
            <h4>Donate</h4>
            <p>
              <Link to="/donate">Donate</Link>
            </p>
          </div>
          <div className="col-12 col-md-2 mb-5">
            <h4>Legal</h4>
            <p>
              <Link to="/privacypolicy">Privacy</Link>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <div className="row justify-content-center text-center mt-4 mb-4">
          <div className="col-1">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p>Copyright © Upskill Fund, LLC 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
