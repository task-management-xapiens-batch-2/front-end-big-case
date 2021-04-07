import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { GET_TASK_PLANNER } from "../../../graphql/queries";

const ProjectDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match.params.id)

  const { error, data, loading } = useQuery(GET_TASK_PLANNER);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  const filterData = data.findAllTaskPlanner.filter(
    (item) => item.project_id == match.params.id
  );

  const getTaskDetail = filterData.map(({ id, project_id, task, is_check }, key) => {
    return (
      <div key={key} className="my-5">
        <Row>
          <Col>
            <p className="text-capitalize">Task Name: {task}</p>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <div className="project-detail-section m-2">
      <Button variant="outline-primary" onClick={() => history.push('/dashboard/planner/')}>
        Back
      </Button>
      <h1 className="text-center">Detail Project</h1>
      <Row>
        <Col lg={9} md={9} sm={9} xs={9} className="mx-auto">
          {getTaskDetail}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetail;
