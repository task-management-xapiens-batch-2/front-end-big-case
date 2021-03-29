import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Logo from "../img/xapiens-logo.png"

import "react-notifications/lib/notifications.css";
import toaster from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

const NavigationBar = () => {
  const [isNotif, setNotif] = useState(false);

  const history = useHistory();

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          break;
      }
    };
  };

  return (
    <div className="navbar-section">
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
      >
          <Nav.Link as={Link} to="/">
            <Image src={Logo} fluid/>
          </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav.Link as={Link} to="/dashboard/admin/">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard/admin/all-planner/new-project">
            Add New Project
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <NotificationContainer />
    </div>
  );
};

export default NavigationBar;
