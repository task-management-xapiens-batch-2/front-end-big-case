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
import DetailProject from "./DetailProject";
import Login from "./Login";
import MainTemplateProject from "./projectForm/MainTemplateProject";

const TaskManagement = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <LayoutComponent>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/admin" component={DashboardAdmin} />
            <Route exact path="/dashboard/planner" component={DashboardPlanner} />
            <Route exact path="/dashboard/supervisor" component={DashboardSupervisor} />

            <Route exact path="/detail-project" component={DetailProject} />
            {/* <Route exact path="/new-project" component={AddNewProject} /> */}
            <Route exact path="/new-project" component={MainTemplateProject} />
          </Switch>
        </LayoutComponent>
        <FooterBar />
      </Router>
    </div>
  );
};

export default TaskManagement;
