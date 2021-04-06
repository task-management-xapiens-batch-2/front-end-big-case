import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { GET_PROJECT_SUPERVISOR } from "../../../graphql/queries";

const ProjectDetail = () => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match.params.id)

  const { error, data, loading } = useQuery(GET_PROJECT_SUPERVISOR);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  const modalNotes = data.findAllProjectSupervisor.map(
    ({ id, title, description }) => {
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
              <form>
                <p className="font-weight-bold">Notes for planner: </p>
                <textarea
                  type="text"
                  style={{ width: "100%", resize: "none", height: "200px" }}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button title="Close" variant="secondary" onClick={handleClose} />
              <Button title="Submit" />
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  );

  const filterData = data.findAllProjectSupervisor.filter((item) => item.id==match.params.id)

  console.log(filterData)

  const getTaskDetail = filterData.map(
    ({ id, title, description, status, assignee, attachment, is_read, start_date, due_date }) => {
      return (
        <div key={id}>
            <div className="">
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
          <div className="d-flex justify-content-end align-items-end my-3">
            <Button variant="warning" onClick={handleShow} className="mx-2">
              Return
            </Button>
            <Button variant="danger" className="mx-2">Reject</Button>
            <Button className="mx-2">Approve</Button>
          </div>
        </div>
      );
    }
  )
//   console.log(match);
  return (
    <div className="project-detail-section">
      {modalNotes}
      <h1>Detail Project</h1>
      <button onClick={() => history.goBack()}>Back</button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center mr-3">
            Tanggal 21 Oktober 1931
          </div>
          <p className="worker-name mr-2 p-2">Worker Name</p>
          <p className="worker-name ml-2 p-2">Planner Name</p>
        </div>
        {/* <ProgressBar totalTask={data.findTaskSPV.length} /> */}
        <div className="col mt-3 sm-10">{getTaskDetail}</div>
      </div>
      {/* <h1>{match.params.id}</h1> */}
    </div>
  );
};

export default ProjectDetail;
