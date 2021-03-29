import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECT } from "../../../graphql/queries";

import ProjectComponent from "../../../components/Project.component";
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component";
import TablePlanComponent from "../../../components/Table/TablePlan.component";

const DashboardPlanner = () => {
  const { data, loading } = useQuery(GET_ALL_PROJECT);
  if (loading) return <div>Loading...</div>;

  const getAllProject = data.findAllTask.map(
    ({ id, title, description, start_date, due_date }) => {
      return (
        <div key={id}>
          <ProjectComponent
            title={title}
            description={description}
            start_date={start_date}
            due_date={due_date}
          />
        </div>
      );
    }
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <TablePlanComponent />
              </div>
            </div>
          </div>
          <div className="col">{getAllProject}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
