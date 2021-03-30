import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECT, GET_TASK_SUPERVISOR } from "../../../graphql/queries";

import ProjectComponent from "../../../components/Project.component";
import WorkerListPlannerComponent from "../../../components/WorkerListPlanner.component";
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component";
import NavigationBar from "../../../components/NavbarPlanner.component";
import TablePlannerComponent from "../../../components/TablePlanner.component";
import { Modal } from "react-bootstrap";
import ButtonComponent from "../../../components/Button.component";
import moment from "moment";
import TaskComponent from "../../../components/Task.component";
import MaterialTable from "material-table";

const DashboardPlanner = () => {

  const [columns, setColumns] = useState([
    { title: "No", field: "id" },
    { title: "Project ID", field: "project_id" },
    { title: "Project Title", field: "title" },
    { title: "Planner Name", field: "assignee" },
    {
      title: "Status",
      field: "status",
      lookup: { Submit: "Submit", Reject: "Reject", Return: "Return" },
    },
  ]);
  const [newData, setNewData] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, loading, refetch } = useQuery(GET_TASK_SUPERVISOR)

  if (loading) return <div>Loading...</div>;

  console.log(newData);

  const plannerData = data.findAllTaskSpv.map((o) => ({ ...o }));

  // console.log(plannerData);

  // findAllTaskSpv

  return (
    <div className="container-fluid">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // key={id}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            You must provide a note when returning the task back to the planner
          </Modal.Title>
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
          <JumbotronComponent notPlanner={false} />
          <div className="container-fluid">
            <div className="row"></div>
          </div>
          {/* <div className="col">{getAllTaskSpv}</div> */}
          <WorkerListPlannerComponent />
          <MaterialTable
            columns={columns}
            data={plannerData}
            detailPanel={({
              id,
              title,
              description,
              start_date,
              due_date,
              note,
            }) => {
              return (
                <div className="detail-project-spv-section container-fluid">
                  {/* {modalNotes} */}
                  <div className="container-fluid mt-3">
                    <div className="row">
                      <div className="d-flex justify-content-center align-items-center mr-3">
                        <p>
                          Start from:{" "}
                          {moment.unix(start_date).format("DD/MM/YYYY")}{" "}
                        </p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mr-3">
                        <p>
                          Due Date: {moment.unix(due_date).format("DD/MM/YYYY")}{" "}
                        </p>
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
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
