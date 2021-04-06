import { useState } from "react";

import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DatePicker from "../../../components/DatePickerField.component";
import "react-datepicker/dist/react-datepicker.css";

import { Button as ButtonBootstrap } from "react-bootstrap";
import ProjectPlanner from "./ProjectPlanner";
import { secondaryNavMenu, sideNavMenu } from "./SideNavbar";
import { useHistory } from "react-router";
import { useStyles } from "./Style";
import { Container, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT_PLANNER } from "../../../graphql/queries";

const Homepage = ({ fullname, createNewProject }) => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [show, setShow] = useState(false);

  const [createProjectPlanner] = useMutation(CREATE_PROJECT_PLANNER);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: createNewProject,
    onSubmit: (values) => {
      createProjectPlanner({
        variables: {
          ...values,
        },
      });
    },
  });

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert a New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formGroupTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter New Project Title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupDesc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description Project"
                    name="username"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupStartDate">
                  <Form.Label>Start Date</Form.Label>
                  <DatePicker
                    name="start_date"
                    value={formik.values.start_date}
                    onChange={formik.setFieldValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGroupDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <DatePicker
                    name="due_date"
                    value={formik.values.due_date}
                    onChange={formik.setFieldValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Assignee</Form.Label>
                  <Form.Control
                    type="number"
                    name="assignee"
                    value={formik.values.assignee}
                    onChange={formik.handleChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Modal.Footer>
              <ButtonBootstrap variant="secondary" onClick={handleClose}>
                Close
              </ButtonBootstrap>
              <ButtonBootstrap
                type="submit"
                variant="primary"
                onClick={handleClose}
              >
                Submit
              </ButtonBootstrap>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{sideNavMenu}</List>
        <Divider />
        <List>{secondaryNavMenu}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Jumbotron */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <h1>Welcome {fullname}!</h1>
                <p>
                  Welcome to planner configuration. Here you can create a new
                  project and submit it to supervisor.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "200px" }}
                  onClick={handleShow}

                  //   onClick={() => deleteProject({ variables: { id: d.id } })}
                >
                  Add a New Project
                </Button>
                {/* <ButtonNewProject /> */}
              </Paper>
            </Grid>
            {/* Recent Project */}
            <Grid item xs={12}>
              <ProjectPlanner />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fullname: state.login.fullname,
    createNewProject: state.planner.createNewProject,
  };
};

export default connect(mapStateToProps, null)(Homepage);
