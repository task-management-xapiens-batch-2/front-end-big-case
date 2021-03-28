import { useQuery } from "@apollo/client";
import React, { useState } from "react";
// import { GET_TASK_SUPERVISOR, FIND_USER} from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import ProjectListSupervisor from "../../../components/ProjectListSupervisor.component";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const DashboardSupervisor = () => {
  const history = useHistory();

  
//   const { data, loading } = useQuery(FIND_USER);

//   if (loading) return <div>Loading...</div>;

//   const rawData = data.findTaskSPV.map((o) => ({ ...o }));

//   const workerList = (
//     <MaterialTable
//       columns={columns}
//       data={rawData}
//       actions={[
//         {
//           onClick: () => history.push("/dashboard/supervisor/detail-project"),
//         },
//       ]}
//       title="Project List"
//       options={{
//         headerStyle: {
//           backgroundColor: "#0074d9",
//           color: "#FFF",
//         },
//         rowStyle: {
//           backgroundColor: "#EEE",
//         },
//         filtering: true,
//       }}
//       components={{
//         Action: (props) => (
//           <Button
//             onClick={(event) => props.action.onClick(event, props.data)}
//             variant="primary"
//             style={{ textTransform: "none" }}
//           >
//             View Detail
//           </Button>
//         ),
//       }}
//     />
//   );

  const plannerList = ""

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
              <ProjectListSupervisor />
              <Row>
                  <Col>
                  
                  </Col>
                  <Col>
                  
                  </Col>
              </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupervisor;
