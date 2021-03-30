import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TASK_PLANNER } from "../../../../graphql/queries";

import ProjectComponent from "../../../../components/Project.component";
import WorkerListPlannerComponent from "../../../../components/WorkerListPlanner.component";
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../../components/Jumbotron.component";
import TablePlannerComponent from "../../../../components/TablePlanner.component";
import NavbarAllUserComponent from "../../../../components/NavbarAllUser.component";
import NavigationBar from "../../../../components/NavbarSuperAdmin.component";

const Planner = () => {
  const { data, loading } = useQuery(GET_TASK_PLANNER);
  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="container-fluid">
            <div className="row"></div>
          </div>

          <WorkerListPlannerComponent />
        </div>
      </div>
    </div>
  );
};

export default Planner;
