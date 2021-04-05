import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";

const ButtonBottomRight = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        className="d-flex justify-content-center p-3 rounded-circle"
        style={{
          position: "fixed",
          bottom: "2.5rem",
          right: "1rem",
          fontSize: "2rem",
        }}
        onClick={handleShow}
      >
        <HiUserAdd />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Role</Form.Label>
                  <Form.Control as="select">
                    <option value="planner">Planner</option>
                    <option value="worker">Worker</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ButtonBottomRight;
