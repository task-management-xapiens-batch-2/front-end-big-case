import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_TASK_PLANNER,
  GET_TASK_SUPERVISOR,
} from "../../../../graphql/queries";

import ProjectComponent from "../../../../components/Project.component";
import WorkerListPlannerComponent from "../../../../components/WorkerListPlanner.component";
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../../components/Jumbotron.component";
import TablePlannerComponent from "../../../../components/TablePlanner.component";
import NavbarAllUserComponent from "../../../../components/NavbarAllUser.component";
import NavigationBar from "../../../../components/NavbarSuperAdmin.component";
import { useHistory } from "react-router";
import MaterialTable from "material-table";
import TaskComponent from "../../../../components/Task.component";
import ButtonComponent from "../../../../components/Button.component";

const Planner = () => {
  const moment = require("moment");

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

  //TODO: Ingatkan backend kalau status jangan huruf capitalize

  const [newData, setNewData] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);

  if (loading) return <div>Loading...</div>;

  const spvData = data.findAllTaskSpv.map((o) => ({ ...o }));

  console.log(spvData);

  console.log(newData);

  //TODOS: Admin tidak bisa melakukan pemberian task note balik ke planner
  //TODOS: Create Note tidak bisa dilakukan karena foreign key
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="container-fluid">
            <div className="row"></div>
          </div>

          <WorkerListPlannerComponent />
          <MaterialTable
            columns={columns}
            data={spvData}
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

export default Planner;
