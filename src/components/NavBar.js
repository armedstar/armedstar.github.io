import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/logo.svg";
import React, {useContext} from "react";

export const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className="header"><div class="logo"><a href="#" onClick={() => window.location.reload()}><img src={logo} alt="Amanda Mallardo - Sr. Product Designer"></img></a> <p className="name">Amanda Mallardo</p> </div> </Navbar.Brand>
    </Navbar>
  );
}