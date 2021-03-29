import React, { useState } from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/client";
import { GET_TASK_SUPERVISOR} from "../graphql/queries";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
import DetailProject from '../pages/dashboard/supervisor/DetailProject'

const ProjectListSupervisor = () => {
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

  const history = useHistory();

  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);

  if (loading) return <div>Loading...</div>;

  const spvData = data.findTaskSPV.map((o) => ({ ...o }));

  console.log(spvData)

  const projectList = (
    <MaterialTable
      columns={columns}
      data={spvData}
      actions={[
        {
          // onClick: () => history.push("/dashboard/supervisor/detail-project"),
          onClick: (event, rowData) => {
            console.log(rowData)
            // const newData = {};
            // <DetailProject detailData={newData}/>
            // history.push("/dashboard/supervisor/detail-project")
          }
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

  return projectList
};

export default ProjectListSupervisor;
