import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../components/Navbar.component";
import Dashboard from "./Dashboard";
import Login from "./Login";

const TaskManagement = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default TaskManagement;
