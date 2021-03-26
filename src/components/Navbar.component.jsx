import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">xMan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Button className="mr-sm-2" variant="outline-success">
          Icon Notif
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
