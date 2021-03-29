import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import ProjectListSupervisor from "../../../components/ProjectListSupervisor.component";
import PlannerListSupervisor from "../../../components/PlannerListSupervisor.component";

import { Row, Col, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import WorkerListSupervisor from "../../../components/WorkerListSupervisor.component";
import NavigationBar from "../../../components/NavbarSupervisor.component";
// import { Navigation } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import DetailProject from "./DetailProject";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/Button.component";
import TaskComponent from "../../../components/Task.component";

const DashboardSupervisor = () => {
  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Project ID", field: "project_id" },
    { title: "Project Title", field: "title" },
    { title: "Planner Name", field: "start_date" },
    {
      title: "Status",
      field: "status",
      lookup: { submit: "Submit", reject: "Reject", return: "Return" },
    },
  ]);

  const [newData, setNewData] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);

  if (loading) return <div>Loading...</div>;

  const spvData = data.findTaskSPV.map((o) => ({ ...o }));

  console.log(spvData);

  console.log(newData);

  return (
    <div className="container-fluid">
      {/* <Modal dataModal={newData}/> */}
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          // key={id}
        >
          <Modal.Header closeButton>
            <Modal.Title>You must provide a note when returning the task back to the planner</Modal.Title>
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
      <NavigationBar />
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <MaterialTable
              columns={columns}
              data={spvData}
              detailPanel={({ id, title, description }) => {
                return (
                  <div className="detail-project-spv-section container-fluid">
                    {/* {modalNotes} */}
                    <div className="container-fluid mt-3">
                      <div className="row">
                        <div className="d-flex justify-content-center align-items-center mr-3">
                          Tanggal 21 Oktober 1931
                        </div>
                        <p className="worker-name mr-2 p-2">Worker Name</p>
                        <p className="worker-name ml-2 p-2">Planner Name</p>
                      </div>
                      {/* <ProgressBar totalTask={data.findTaskSPV.length} /> */}
                      <div className="col mt-3 sm-10">
                        {" "}
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
                      </div>
                    </div>
                  </div>
                );
              }}
              onRowClick={(event, rowData, togglePanel) => togglePanel()}
              title="Project List"
              options={{
                headerStyle: {
                  backgroundColor: "#0074d9",
                  color: "#FFF",
                },
                rowStyle: {
                  backgroundColor: "#EEE",
                },
                filtering: true,
              }}
            />
            <Row className="my-5">
              <Col>
                <PlannerListSupervisor />
              </Col>
              <Col>
                <WorkerListSupervisor />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupervisor;
