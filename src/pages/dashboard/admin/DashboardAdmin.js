import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/queries";

// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component";
import NavbarAdminComponent from "../../../components/NavbarAdmin.component";
import NavigationBar from "../../../components/NavbarSuperAdmin.component";
import DashboardPlanner from "./dashboardList/Planner";
import DashboardAllAdmin from "./dashboardList/Admin";
import DashboardSupervisor from "./dashboardList/Supervisor";
import DetailProjectPlanner from './dashboardList/planner/DetailProject'
import DetailProjectSupervisor from './dashboardList/supervisor/DetailProject'
import AddNewProject from './dashboardList/supervisor/DetailProject'

const DashboardAdmin = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavigationBar />
        <div className="row">
          <div className="col-sm-12">
            <JumbotronComponent notPlanner={true}/>
            <NavbarAdminComponent />
            <Switch>
              <Route
                exact
                path="/dashboard/admin/all-admin"
                component={DashboardAllAdmin}
              />
              <Route
                exact
                path="/dashboard/admin/all-planner"
                component={DashboardPlanner}
              />
              <Route
                exact
                path="/dashboard/admin/all-supervisor"
                component={DashboardSupervisor}
              />
              <Route
                exact
                path="/dashboard/admin/all-planner/detail-project"
                component={DetailProjectPlanner}
              />
              <Route
                exact
                path="/dashboard/admin/all-supervisor/detail-project"
                component={DetailProjectSupervisor}
              />
              <Route
                exact
                path="/dashboard/admin/all-planner/new-project"
                component={AddNewProject}
              />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DashboardAdmin;
