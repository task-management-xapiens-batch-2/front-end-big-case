import { useQuery } from "@apollo/client";
import React, { useState } from "react";
// import { GET_TASK_SUPERVISOR, FIND_USER} from "../../../graphql/queries";
import JumbotronComponent from "../../../components/Jumbotron.component";
import ProjectListSupervisor from "../../../components/ProjectListSupervisor.component";
import PlannerListSupervisor from "../../../components/PlannerListSupervisor.component";

import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import WorkerListSupervisor from "../../../components/WorkerListSupervisor.component";
import NavigationBar from "../../../components/NavbarSupervisor.component";
import { Navigation } from "@material-ui/icons";


const DashboardSupervisor = () => {
  const history = useHistory();

  return (
    <div className="container-fluid">
      <NavigationBar />
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <ProjectListSupervisor />
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
