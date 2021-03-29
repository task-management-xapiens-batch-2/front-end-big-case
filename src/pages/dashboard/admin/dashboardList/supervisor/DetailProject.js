import { useQuery } from "@apollo/client";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../../../../../components/Button.component";
import ProgressBar from "../../../../../components/ProgressBar.component";
import TaskComponent from "../../../../../components/Task.component";
import { GET_TASK_SUPERVISOR } from "../../../../../graphql/queries";

const DetailProject = () => {
  const { error, data, loading } = useQuery(GET_TASK_SUPERVISOR);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  const modalNotes = data.findTaskSPV.map(({ id, title, description }) => {
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
              <textarea type="text" style={{width: "100%", resize: "none", height: "200px"}} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonComponent
              title="Close"
              variant="secondary"
              onClick={handleClose}
            />
            <ButtonComponent title="Submit" />
          </Modal.Footer>
        </Modal>
      </>
    );
  });

  console.log(data);

  const getTaskDetail = data.findTaskSPV.map(({ id, title, description }) => {
    return (
      <div key={id}>
        <TaskComponent desc={description} title={title} />
        <div className="d-flex justify-content-end align-items-end my-3">
          <ButtonComponent
            title="Return"
            variant="warning"
            onClick={handleShow}
          />
          <ButtonComponent title="Reject" variant="danger" />
          <ButtonComponent title="Approve" />
        </div>
      </div>
    );
  });

  // console.log(data.findTaskSPV.length)

  return (
    <div className="detail-project-spv-section container-fluid">
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
        <ProgressBar totalTask={data.findTaskSPV.length} />
        <div className="col mt-3 sm-10">{getTaskDetail}</div>
      </div>
    </div>
  );
};

export default DetailProject;
