import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const AuthHeader = () => {
  return (
    <>
      <div id="header-img">
        <Navbar id="navbar" variant="dark" className="text-black">
          <Navbar.Brand>
            &nbsp;
         
            &nbsp;
            <Link to="/">
              Numerology
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Link to="/Profiles" className="nav-link text-black">
                Profiles
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/LifePaths" className="nav-link text-black">
                Life Paths
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/CreateProfile" className="nav-link text-black">
               Add A Profile
              </Link>
            </Nav.Item>
            <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default AuthHeader;