import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import ProjectListSupervisor from "../../../components/ProjectListSupervisor.component";
import PlannerListSupervisor from "../../../components/PlannerListSupervisor.component";

import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import WorkerListSupervisor from "../../../components/WorkerListSupervisor.component";
import NavigationBar from "../../../components/NavbarSupervisor.component";
// import { Navigation } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import DetailProject from "./DetailProject";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal.component";

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

  const [newData, setNewData] = useState({})

  const history = useHistory();

  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);

  if (loading) return <div>Loading...</div>;

  const spvData = data.findTaskSPV.map((o) => ({ ...o }));

  console.log(spvData);

  console.log(newData)

  return (
    <div className="container-fluid">
      {/* <Modal dataModal={newData}/> */}
      <NavigationBar />
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <MaterialTable
              columns={columns}
              data={spvData}
              actions={[
                {
                  // onClick: () => history.push("/dashboard/supervisor/detail-project"),
                  onClick: (event, rowData) => {
                    console.log(rowData);
                    // <DetailProject detailData={newData}/>
                    setNewData(rowData)
                    // history.push("/dashboard/supervisor/detail-project")
                  },
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
