import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <>
      <div id="navbar z-30">
        <Navbar fluid-id="navbar" className="bg-purple-400 z-30">
          <Navbar.Brand>
         
            <Link to="/" className="absolute top-4 left-5 h-2/3 no-underline text-white z-30">
              <h1 className="font-Cinzel text-6xl z-30">Discover Numerology</h1>
            </Link>
          </Navbar.Brand>
          <Nav className="box-content lg:h-14 lg:p-8 z-30">
          
            <Nav.Item className="z-30"> <h5 className=" z-30 text-white absolute top-4 right-0 w-96 mr-2">Already have an account?</h5> </Nav.Item>
            <Nav.Item className="z-30 absolute top-2 right-20">
             <AuthButton className="z-30 absolute top-1 left-60"/>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
