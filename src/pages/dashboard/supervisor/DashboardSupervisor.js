import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import TableSupervisorComponent from "../../../components/TableSupervisor.component";
import { Table, Button } from "react-bootstrap";
import ButtonComponent from "../../../components/Button.component";
import { useHistory } from "react-router";
import MaterialTable from "material-table";

const DashboardSupervisor = () => {
  const history = useHistory();

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

  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);

  if (loading) return <div>Loading...</div>;

  const rawData = data.findTaskSPV.map((o) => ({ ...o }));

  const projectList = (
    <MaterialTable
      columns={columns}
      data={rawData}
      actions={[
        {
          onClick: () => history.push("/dashboard/supervisor/detail-project"),
        },
      ]}
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
      components={{
        Action: (props) => (
          <Button
            onClick={(event) => props.action.onClick(event, props.data)}
            variant="primary"
            style={{ textTransform: "none" }}
          >
            View Detail
          </Button>
        ),
      }}
    />
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
              {projectList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupervisor;
