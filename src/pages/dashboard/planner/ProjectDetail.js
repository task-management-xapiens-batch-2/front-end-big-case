import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  GET_PROJECT_PLANNER,
  GET_TASK_PLANNER,
} from "../../../graphql/queries";
import { AiOutlinePlus } from "react-icons/ai";

const ProjectDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match.params.id);

  const { error: taskError, data: taskData, loading: taskLoading } = useQuery(
    GET_TASK_PLANNER
  );

  const { error: projectError, data: projectData, loading: projectLoading } = useQuery(
    GET_PROJECT_PLANNER
  );

  // const { error: {taskError}, data: {taskData}, loading: {taskLoading} } = useQuery(GET_TASK_PLANNER);

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
    .map(({ id, task }, key) => {
      return (
        <div key={key}>
          <p className="text-capitalize">
            {id}. {task}
          </p>
        </div>
      );
    });

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
            <h5 className="font-weight-bold">Task List:</h5>
            {getTaskDetail}
          </div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add a new task"
              aria-label="Add a new task"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <AiOutlinePlus />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetail;
