import React from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "./Login"

const TaskManagement = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
      </Router>
    </div>
  );
};

export default TaskManagement;
