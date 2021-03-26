import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";

const NavigationBar = () => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("name") === "faris") {
      setLogin(true);
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Nav.Link as={Link} to="/">
          xMan
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Button
          className={`mr-sm-2 rounded-circle ${!isLogin ? "d-none" : ""}`}
          variant="outline-success"
        >
          <BsBell />
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
