import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { GET_TASK_PLANNER } from "../../../graphql/queries";

const ProjectDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const { error, data, loading } = useQuery(GET_TASK_PLANNER);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  // const filterData = data.findAllTaskPlanner.filter(
  //   (item) => item.id == match.params.id
  // );

  // const getTaskDetail = filterData.map(
  //   ({
  //     id,
  //     title,
  //     description,
  //     status,
  //     assignee,
  //     attachment,
  //     is_read,
  //     start_date,
  //     due_date,
  //   }) => {
  //     return (
  //       <div key={id} className="my-5">
  //         <Row>
  //           <Col>
  //             <p className="text-capitalize">Worker Name: {assignee}</p>
  //           </Col>
  //           <Col>
  //             <p className="text-capitalize">Planner Name: {assignee}</p>
  //           </Col>
  //           <Col>
  //             <p className="text-capitalize">Status: {status}</p>
  //           </Col>
  //         </Row>
  //         <div>
  //           <h1>{title}</h1>
  //           <p>{description}</p>
  //           <p>
  //             File Attachment: {" "}
  //             {attachment ? <a href={attachment}>Link Attachment</a> : "None"}
  //           </p>
  //         </div>
  //         <div className="d-flex justify-content-end align-items-end my-3">
  //           <Button variant="warning" onClick={handleShow} className="mx-2 text-white">
  //             Return
  //           </Button>
  //           <Button variant="danger" className="mx-2">
  //             Reject
  //           </Button>
  //           <Button className="mx-2">Approve</Button>
  //         </div>
  //       </div>
  //     );
  //   }
  // );
  return (
    <div className="project-detail-section m-2">
      <Button variant="outline-primary" onClick={() => history.push('/dashboard/planner/')}>
        Back
      </Button>
      <h1 className="text-center">Detail Project</h1>
      <Row>
        <Col lg={9} md={9} sm={9} xs={9} className="mx-auto">
          {/* {getTaskDetail} */}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetail;
