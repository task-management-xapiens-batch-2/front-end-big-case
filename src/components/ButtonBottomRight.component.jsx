import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/queries";

const ButtonBottomRight = ({ createNewUser }) => {
  const [show, setShow] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: createNewUser,
    onSubmit: (values) => {
        createUser({
            variables: {
                ...values
            }
        })
    },
  });

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
          zIndex: "1000"
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
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Choose User Role
                    </option>
                    <option value="planner" selected>
                      Planner
                    </option>
                    <option value="worker">Worker</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary"
              onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    createNewUser: state.spv.createNewUser,
  };
};

export default connect(mapStateToProps, null)(ButtonBottomRight);
