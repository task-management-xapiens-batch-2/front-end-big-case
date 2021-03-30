import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECT, GET_TASK_SUPERVISOR } from "../../../graphql/queries";

import ProjectComponent from "../../../components/Project.component";
import WorkerListPlannerComponent from '../../../components/WorkerListPlanner.component'
// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component";
import NavigationBar from "../../../components/NavbarPlanner.component";
import TablePlannerComponent from "../../../components/TablePlanner.component";

const DashboardPlanner = () => {
  const { data, loading } = useQuery(GET_TASK_SUPERVISOR);
  if (loading) return <div>Loading...</div>;

  console.log(data);

  const getAllTaskSpv = data.findAllTaskSpv.map(
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
          <JumbotronComponent notPlanner={false}/>
          <div className="container-fluid">
            <div className="row">
              
            </div>
          </div>
          {/* <div className="col">{getAllTaskSpv}</div> */}
          <WorkerListPlannerComponent />
        </div>
      </div>
    </div>
  );
};

export default DashboardPlanner;
