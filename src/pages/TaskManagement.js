import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login"
import store from '../redux/store/store'
import {Provider} from 'react-redux'

const TaskManagement = () => {
  return (
    <Provider store={store}>
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
      </Router>
    </div>
    </Provider>
  );
};

export default TaskManagement;
