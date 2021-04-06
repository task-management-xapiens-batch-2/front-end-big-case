import React from "react";
import NavigationBar from "../../../components/NavigationBar.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PendingProject from "./PendingProject";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";
import MainMenu from './MainMenu';

const DashboardSPV = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/dashboard/supervisor/" component={MainMenu} />
          <Route
            exact
            path="/dashboard/supervisor/project-list"
            component={ProjectList}
          />
          <Route
            exact
            path="/dashboard/supervisor/project-detail"
            component={PendingProject}
          />
          <Route
            exact
            path="/dashboard/supervisor/project-detail/:id"
            component={ProjectDetail}
          />
        </Switch>
      </Router>
    </>
  );
};

export default DashboardSPV;
