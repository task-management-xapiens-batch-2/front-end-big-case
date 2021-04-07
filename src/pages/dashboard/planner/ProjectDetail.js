import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Modal,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  CREATE_TASK_PLANNER,
  GET_PROJECT_PLANNER,
  GET_TASK_PLANNER,
} from "../../../graphql/queries";
import { AiOutlinePlus } from "react-icons/ai";
import { connect } from "react-redux";
import { useFormik } from "formik";

const ProjectDetail = ({ createNewTask }) => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match.params.id);

  const formik = useFormik({
    initialValues: createNewTask,
    onSubmit: (values) => {
      console.log(values);
      createTask({
        variables: {
          ...values,
          project_id: parseInt(values.project_id),
        },
      });
    },
  });

  const { error: taskError, data: taskData, loading: taskLoading } = useQuery(
    GET_TASK_PLANNER,
    {
      pollInterval: 100,
    }
  );

  const {
    error: projectError,
    data: projectData,
    loading: projectLoading,
  } = useQuery(GET_PROJECT_PLANNER);

  const [createTask] = useMutation(CREATE_TASK_PLANNER);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (taskLoading) return "Loading...";
  if (taskError) return "Error bos...";

  const filterTaskData = taskData.findAllTaskPlanner.filter(
    (item) => item.project_id == match.params.id
  );

  if (projectLoading) return "Loading...";
  if (projectError) return "Error bos...";

  const filterProjectData = projectData.findAllProjectPlanner.filter(
    (item) => item.id == match.params.id
  );

  const getTaskDetail = filterTaskData
    .sort(({ id: previousID }, { id: currentID }) => previousID - currentID)
    .map(({ id, task, is_check }, key) => {
      return (
        <div key={key}>
          <p className="text-capitalize">
            {id}. {is_check == "true" ? <del>{task}</del> : task}
          </p>
        </div>
      );
    });

  const getProgressData = filterTaskData.length;

  // const removeDuplicate = (data) => data.filter((value, index) => data.indexOf(value) === index);

  // removeDuplicate(taskData.findAllTaskPlanner)

  console.log(getProgressData);

  const getProjectId = projectData.findAllProjectPlanner
    .slice()
    .sort(({ id: previousID }, { id: currentID }) => previousID - currentID)
    .map(({ id }, key) => {
      return (
        <>
          <option value={id} key={key}>
            {id}
          </option>
        </>
      );
    });

  const isChecked = filterTaskData.filter(({ is_check }) => is_check == "true")
    .length;

  const now = Math.floor((isChecked / filterTaskData.length) * 100);

  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

  return (
    <div className="project-detail-section m-2">
      <Button
        variant="outline-primary"
        onClick={() => history.push("/dashboard/planner/")}
      >
        Back
      </Button>
      <h1 className="text-center">{filterProjectData[0].title}</h1>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} className="mx-auto">
          <div className="my-3">
            <h5 className="font-weight-bold">Project Description:</h5>
            {filterProjectData[0].description}
          </div>
          <div>
            <h5 className="font-weight-bold my-3">Task Progress:</h5>
            {progressInstance}

            <h5 className="font-weight-bold my-3">Task List:</h5>
            {getTaskDetail}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <InputGroup className="mb-3">
                <InputGroup.Append>
                  <Form.Control
                    as="select"
                    name="project_id"
                    value={formik.values.project_id}
                    onChange={formik.handleChange}
                    custom
                  >
                    {getProjectId}
                  </Form.Control>
                </InputGroup.Append>
                <Form.Control
                  placeholder="Add a new task"
                  aria-label="Add a new task"
                  aria-describedby="basic-addon2"
                  name="task"
                  value={formik.values.task}
                  onChange={formik.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="primary" type="submit">
                    <AiOutlinePlus style={{ color: "white" }} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createNewTask: state.planner.createNewTask,
  };
};

export default connect(mapStateToProps, null)(ProjectDetail);
