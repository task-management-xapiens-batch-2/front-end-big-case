import React from "react";
import Logo from "../img/xapiens-logo.png";
import {
  Button,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { NavLink, Link, useHistory } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();
  return (
    <div className="navbar-section">
      <Navbar bg="light" expand="lg" sticky="top">
        <Nav.Link as={Link} to="/dashboard/supervisor">
          <Image src={Logo} fluid />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Button
            className="mr-sm-2 rounded-circle"
            variant="outline-primary"
            // onClick={isNotif && createNotification("info")}
          >
            <BsBell />
          </Button>
          <Button
            className="mr-sm-2 rounded-circle"
            variant="outline-danger"
            onClick={() => {
              localStorage.clear();
              history.push("/");
              window.location.reload();
            }}
          >
            <BiLogOut />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
