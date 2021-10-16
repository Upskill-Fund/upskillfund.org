import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center top-footer-nav">
          <div className="col">
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
          <div className="col">Media</div>
          <div className="col-md-12 text-center bottom-footer-nav">
            <Nav as="ul" className="justify-content-center">
              <Nav.Item as="li">
                <Nav.Link eventKey="link-1">Reports</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Financial Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Anti-Corruption Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Credits</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Terms of Use</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
