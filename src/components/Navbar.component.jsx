import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

const NavigationBar = () => {
  const [isLogin, setLogin] = useState(false);

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
      }
    };
  };

  useEffect(() => {
    if (localStorage.getItem("username") === "faris") {
      setLogin(true);
    }
  }, []);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className={`${isLogin === false ? "d-none" : ""}`}
        sticky="top"
      >
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
            onClick={createNotification('info')}
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
            className={"mr-sm-2"}
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
    </>
  );
};

export default NavigationBar;
