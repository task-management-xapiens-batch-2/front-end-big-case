import { Redirect, Route, Switch } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import { Homepage, LoginPage } from "../pages";

export const BaseRoute = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/app" component={Homepage} />
      <Redirect exact from="/" to="/app" />
    </Switch>
  );
};
