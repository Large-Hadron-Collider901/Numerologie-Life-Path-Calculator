import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthNav from "./AuthNav"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header-img">
        <Navbar id="navbar" variant="dark">
          <Navbar.Brand>
            &nbsp;
          
            &nbsp;
            <Link to="/">
              Numerology
            </Link>
          </Navbar.Brand>
          <Nav>
           <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;