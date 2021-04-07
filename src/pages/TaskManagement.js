import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login"
import store from '../redux/store/store'
import Dashboard from './dashboard/Index'
import DashboardSPV from './dashboard/supervisor/Index.js'
import DashboardPlanner from './dashboard/planner/Index.js'
import {Provider} from 'react-redux'
import ProjectDetail from "./dashboard/planner/ProjectDetail";

const TaskManagement = () => {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/supervisor" component={DashboardSPV} />
            <Route exact path="/dashboard/planner" component={DashboardPlanner} />
            <Route exact path="/dashboard/planner/project-detail/:id" component={ProjectDetail} />
          </Switch>
      </Router>
    </Provider>
  );
};

export default TaskManagement;
