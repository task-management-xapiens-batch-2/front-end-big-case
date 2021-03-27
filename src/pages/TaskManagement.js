import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterBar from "../components/Footer.component";
import LayoutComponent from "../components/Layout.component";
import NavigationBar from "../components/Navbar.component";
// import AddNewProject from "./AddNewProject";
import Dashboard from "./Dashboard";
import DetailProject from "./DetailProject";
import Login from "./Login";
import MainTemplateProject from "./ProjectForm/MainTemplateProject";

const TaskManagement = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <LayoutComponent>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
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
