import React, { useState } from "react";
// import { GET_TASK_SUPERVISOR, FIND_USER} from "../../../graphql/queries";
import ProjectListSupervisor from "../../../../components/ProjectListSupervisor.component";
import PlannerListSupervisor from "../../../../components/PlannerListSupervisor.component";
import NavbarAllUserComponent from "../../../../components/NavbarAllUser.component";

import { Row, Col } from "react-bootstrap";
import WorkerListSupervisor from "../../../../components/WorkerListSupervisor.component";

const Supervisor = () => {

  return (
    <div className="container-fluid my-5">
      <NavbarAllUserComponent />
      <div className="row">
        <div className="col-sm-12">
          <div className="container-fluid">
            <ProjectListSupervisor />
            <Row className="my-5">
              <Col>
                <PlannerListSupervisor />
                <WorkerListSupervisor />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supervisor;
