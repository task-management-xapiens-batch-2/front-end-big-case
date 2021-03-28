import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";

const NavbarAdmin = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Nav>
        <Button
          className="d-flex justify-content-center align-items-center"
          variant="outline-primary"
          active
        >
          Admin
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center ml-2"
          variant="outline-primary"
        >
          Supervisor
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center ml-2"
          variant="outline-primary"
        >
          Planner
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarAdmin;
