import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'

const NavbarAdmin = () => {
  const history = useHistory()
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Nav className="mx-auto">
        <Button
          className="d-flex justify-content-center align-items-center m-2"
          variant="outline-primary"
          onClick={() => {
            history.push('/dashboard/admin/all-admin')
          }}
          active
        >
          Admin
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center m-2"
          variant="outline-primary"
          onClick={() => {
            history.push('/dashboard/admin/all-supervisor')
          }}
        >
          Supervisor
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center m-2"
          variant="outline-primary"
          onClick={() => {
            history.push('/dashboard/admin/all-planner')
          }}
        >
          Planner
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarAdmin;
