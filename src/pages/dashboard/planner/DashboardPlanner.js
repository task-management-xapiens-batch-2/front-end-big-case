import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TASK, GET_ALL_PROJECT, GET_TASK_PLANNER, GET_TASK_SUPERVISOR, DELETE_TASK, UPDATE_TASK } from "../../../graphql/queries";

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
    { title: "Project ID", field: "project_id" },
    { title: "Task Title", field: "title" },
    { title: "Task Description", field: "description" },
    { title: "Assign Worker", field: "assignee"},
    { title: "Start Date", field: "start_date" },
    { title: "Due Date", field: "due_date" },
  ]);
  const [newData, setNewData] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, loading, refetch } = useQuery(GET_TASK_PLANNER);

  const createTask = useMutation(CREATE_TASK)

  const deleteTask = useMutation(DELETE_TASK)

  const updateTask = useMutation(UPDATE_TASK)

  if (loading) return <div>Loading...</div>;

  console.log(newData);

  const plannerData = data.findAllTaskPlanner.map((o) => ({ ...o }));

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
            title="Project List"
            options={{
              headerStyle: {
                backgroundColor: "#0074d9",
                color: "#FFF",
              },
              rowStyle: {
                backgroundColor: "#EEE",
              },
            }}
            // editable={{
            //   onRowAdd: (newNewData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         createTask({
            //           variables: {
            //             ...newNewData,
            //           },
            //         });
            //         refetch();
            //         resolve();
            //       }, 200);
            //     }),
            //   // TODOS: Update belum bisa. Coba tanya backend
            //   onRowUpdate: (newNewData, oldData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         const dataUpdate = [...newData];
            //         const index = oldData.tableData.id;
            //         dataUpdate[index] = newNewData;
            //         // updateUser({ variables: { ...newNewData } });
            //         refetch();
            //         resolve();
            //       }, 200);
            //     }),
            //   onRowDelete: (oldData) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         // deleteUser({ variables: { id: oldData.id } });
            //         refetch();
            //         resolve();
            //       }, 200);
            //     }),
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
