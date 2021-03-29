import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Logo from "../img/xapiens-logo.png";

import "react-notifications/lib/notifications.css";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

const NavigationBar = () => {
  const [isLogin, setLogin] = useState(false);

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
    setNotif(true);
    isNotif &&
      setTimeout(() => {
        NotificationManager.info("Info message");
      }, 1000);
  }, [isNotif]);

  return (
    <div className="navbar-section">
      <Navbar
        bg="light"
        expand="lg"
        className={`${isLogin === false ? "d-none" : ""}`}
        sticky="top"
      >
        <Nav.Link as={Link} to="/">
          <Image src={Logo} fluid />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Button
            className={"mr-sm-2 rounded-circle"}
            variant="outline-primary"
            onClick={isNotif && createNotification("info")}
          >
            <BsBell />
          </Button>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>{" "}
          <Nav.Link as={Link} to="/new-project">
            Add New Project
          </Nav.Link>
          <Button
            className="d-flex justify-content-center align-items-center ml-3"
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
      <NotificationContainer />
    </div>
  );
};

export default NavigationBar;
