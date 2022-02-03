import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <>
      <div id="navbar">
        <Navbar fluid-id="navbar" className="bg-purple-400  z-40">
          <Navbar.Brand>
         
            <Link to="/" className="absolute top-2 left-5 h-1/2 no-underline text-white">
              <h1 className="font-Cinzel text-6xl">Discover Numerology</h1>
            </Link>
          </Navbar.Brand>
          <Nav className="box-content 2xl:h-10 lg:p-12">
            <Nav.Item>
              <Link to="/Profiles" className="nav-link absolute top-0 right-40 text-white">
                Profiles
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/LifePaths" className="nav-link absolute top-0 right-60 text-white">
                Life Paths
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/About" className="nav-link absolute top-0 right-80 text-white">
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="absolute top-2 right-2 ">
              <AuthButton/>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
