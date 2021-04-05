import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login"
import store from '../redux/store/store'
import Dashboard from './dashboard/Index'
import DashboardSPV from './dashboard/supervisor/DashboardSPV'
import DashboardPlanner from './dashboard/planner/DashboardPlanner'
import {Provider} from 'react-redux'

const TaskManagement = () => {
  return (
    <Provider store={store}>
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/supervisor" component={DashboardSPV} />
            <Route exact path="/dashboard/planner" component={DashboardPlanner} />
          </Switch>
      </Router>
    </div>
    </Provider>
  );
};

export default TaskManagement;
