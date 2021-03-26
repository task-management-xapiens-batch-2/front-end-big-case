import React from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../components/Button.component";
import ProjectComponent from "../components/Project.component";
import SideMenuComponent from "../components/SideMenu.component";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <SideMenuComponent />
        </div>
        <div className="col-sm-10">
          <div className="row">
            <h2>Task List</h2>
            <div className="ml-3">
              <input type="text" placeholder="Search project..." />
            </div>
            <div className="mr-auto" />
            <div className="mr-3">
              <ButtonComponent
                onClick={() => history.push("/all-project")}
                className="mr-3"
                title="View All Project"
              />
            </div>
          </div>
          <div className="col">
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
