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
import { connect } from "react-redux";
import {logout} from '../redux/actions/loginAction'

const NavigationBar = ({logout}) => {
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
          <Nav.Link className="mx-2" as={Link} to="/dashboard/supervisor">
            Main Menu
          </Nav.Link>
          <Nav.Link className="mx-2" as={Link} to="/dashboard/supervisor/project-detail">
            Pending Project
          </Nav.Link>
          <Nav.Link className="mx-2" as={Link} to="/dashboard/supervisor/project-list">
            Project List
          </Nav.Link>
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
              logout()
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


export default connect(null, {logout})(NavigationBar);
