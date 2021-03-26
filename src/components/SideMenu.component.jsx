import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideMenuComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Nav.Link as={Link} to="/">
            Dashboard
          </Nav.Link>{" "}
        </li>
        <li>
          <Nav.Link as={Link} to="/new-project">
            Add New Project
          </Nav.Link>
        </li>
      </ul>
      <ul>
        <li>
          <Nav.Link as={Link} to="/login">
            Logout
          </Nav.Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenuComponent;
