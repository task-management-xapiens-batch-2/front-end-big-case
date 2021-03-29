import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECT } from "../../../graphql/queries";

import ProjectComponent from "../../../components/Project.component";
import WorkerListPlannerComponent from '../../../components/WorkerListPlanner.component'
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component";
import NavigationBar from "../../../components/Navbar.component";
import TablePlannerComponent from "../../../components/TablePlanner.component";

const DashboardPlanner = () => {
  const { data, loading } = useQuery(GET_ALL_PROJECT);
  if (loading) return <div>Loading...</div>;

  console.log(data);

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
      <NavigationBar />
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <TablePlannerComponent
                  title="Initiatives"
                  status="Pending"
                  search="Search initiative projects..."
                />
              </div>
              <div className="col-sm">
                <TablePlannerComponent
                  title="On Going"
                  status="Not Started"
                  search="Search on going projects..."
                />
              </div>
              <div className="col-sm">
                <TablePlannerComponent
                  title="Reject"
                  status="Rejected"
                  search="Search rejected projects..."
                />
              </div>
            </div>
          </div>
          <div className="col">{getAllProject}</div>
          <WorkerListPlannerComponent />
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
