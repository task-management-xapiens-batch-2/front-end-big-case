import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { GET_PROJECT_SUPERVISOR, UPDATE_STATUS_PROJECT_SUPERVISOR } from "../../../graphql/queries";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const ProjectDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const { error, data, loading } = useQuery(GET_PROJECT_SUPERVISOR);
  const [updateStatusProject] = useMutation(UPDATE_STATUS_PROJECT_SUPERVISOR)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  const filterData = data.findAllProjectSupervisor.filter(
    (item) => item.id == match.params.id
  );

  const modalNotes = filterData.map(({ id, title, description }) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          key={id}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="font-weight-bold">Project Description: </p>
            <p>{description}</p>
            <form>
              <p className="font-weight-bold">Notes for planner: </p>
              <textarea
                type="text"
                style={{ width: "100%", resize: "none", height: "200px" }}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button title="Close" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  });

  const getTaskDetail = filterData.map(
    ({
      id,
      title,
      description,
      status,
      assignee,
      attachment,
      is_read,
      start_date,
      due_date,
    }) => {
      return (
        <div key={id} className="my-5">
          <Row>
            <Col>
              <p>Start Date: {moment.unix(start_date).format("Do MMMM")}</p>
            </Col>
            <Col>
              <p>End Date: {moment.unix(due_date).format("Do MMMM")}</p>
            </Col>
            <Col>
              <p className="text-capitalize">Worker Name: {assignee}</p>
            </Col>
            <Col>
              <p className="text-capitalize">Planner Name: {assignee}</p>
            </Col>
            <Col>
              <p className="text-capitalize">Status: {status}</p>
            </Col>
          </Row>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>
              File Attachment: {" "}
              {attachment ? <a href={attachment}>Link Attachment</a> : "None"}
            </p>
          </div>
          <div className="d-flex justify-content-end align-items-end my-3">
            <Button
              variant="warning"
              onClick={handleShow}
              className="mx-2 text-white"
            >
              Return
            </Button>
            <Button variant="danger" className="mx-2" onClick={() => updateStatusProject({variables: {id: id, status: "reject"}})}>
              Reject
            </Button>
            <Button className="mx-2" onClick={() => updateStatusProject({variables: {id: id, status: "approve"}})}>Approve</Button>
          </div>
        </div>
      );
    }
  );
  return (
    <div className="project-detail-section m-2">
      {modalNotes}
      <Button
        variant="outline-primary"
        onClick={() => history.push("/dashboard/supervisor/project-detail")}
      >
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
