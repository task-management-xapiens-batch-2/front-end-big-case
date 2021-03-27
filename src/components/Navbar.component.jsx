import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import {BiLogOut} from "react-icons/bi"

const NavigationBar = () => {
  const [isLogin, setLogin] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("username") === "faris") {
      setLogin(true);
    }
  }, [])

  return (
    <Navbar bg="light" expand="lg" className={`${isLogin === false ? "d-none" : ""}`}>
      <Navbar.Brand>
        <Nav.Link as={Link} to="/">
          xMan
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Button
          className={"mr-sm-2 rounded-circle"}
          variant="outline-primary"
        >
          <BsBell />
        </Button>
        <Nav.Link as={Link} to="/">
          Dashboard
        </Nav.Link>{" "}
        <Nav.Link as={Link} to="/new-project">
          Add New Project
        </Nav.Link>
        <Button
          className={"mr-sm-2"}
          variant="outline-danger"
        >
          <BiLogOut />
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
