import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import FooterBar from "../components/Footer.component";
import LayoutComponent from "../components/Layout.component";
import NavigationBar from "../components/Navbar.component";
import DashboardAdmin from "./dashboard/admin/DashboardAdmin";
import Dashboard from "./dashboard/Index";
import DashboardPlanner from "./dashboard/planner/DashboardPlanner";
import DashboardSupervisor from "./dashboard/supervisor/DashboardSupervisor";
import DetailProject from "./dashboard/planner/DetailProject";
import Login from "./Login";
import { PrivateRoute } from "../components/ProtectedRoute";
=======
import Login from "./Login"
import store from '../redux/store/store'
import Dashboard from './dashboard/Index'
import DashboardSPV from './dashboard/supervisor/Index.js'
import DashboardPlanner from './dashboard/planner/Index.js'
import {Provider} from 'react-redux'
import ProjectDetail from "./dashboard/planner/ProjectDetail";
>>>>>>> e058e1e3e42c38a27adbb19b4365ab7a5b2455a0

const TaskManagement = () => {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
<<<<<<< HEAD
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
              path="/dashboard/planner/project/:id"
              component={DetailProject}
            />
=======
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/supervisor" component={DashboardSPV} />
            <Route exact path="/dashboard/planner" component={DashboardPlanner} />
            <Route exact path="/dashboard/planner/project-detail/:id" component={ProjectDetail} />
>>>>>>> e058e1e3e42c38a27adbb19b4365ab7a5b2455a0
          </Switch>
      </Router>
    </Provider>
  );
};

export default TaskManagement;
