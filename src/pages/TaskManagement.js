import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterBar from "../components/Footer.component";
import LayoutComponent from "../components/Layout.component";
import NavigationBar from "../components/Navbar.component";
import DashboardAdmin from "./dashboard/admin/DashboardAdmin";
// import AddNewProject from "./AddNewProject";
import Dashboard from "./dashboard/Index";
import DashboardPlanner from "./dashboard/planner/DashboardPlanner";
import DashboardSupervisor from "./dashboard/supervisor/DashboardSupervisor";
import DetailProject from "./dashboard/planner/DetailProject";
import Login from "./Login";
import MainTemplateProject from "./dashboard/planner/projectForm/MainTemplateProject";
import { PrivateRoute } from "../components/ProtectedRoute";

const TaskManagement = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <LayoutComponent>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={DashboardPlanner}
            />
            <PrivateRoute
              exact
              path="/dashboard/admin"
              component={DashboardAdmin}
            />
            <PrivateRoute
              exact
              path="/dashboard/planner"
              component={Dashboard}
            />
            <PrivateRoute
              exact
              path="/dashboard/supervisor"
              component={DashboardSupervisor}
            />
            <PrivateRoute
              exact
              path="/dashboard/planner/detail-project"
              component={DetailProject}
            />
            {/* <Route exact path="/new-project" component={AddNewProject} /> */}
            <PrivateRoute
              exact
              path="/dashboard/planner/new-project"
              component={MainTemplateProject}
            />
          </Switch>
        </LayoutComponent>
        <FooterBar />
      </Router>
    </div>
  );
};

export default TaskManagement;
