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
import DashboardPlanner from "../../dashboard/admin/dashboardList/Planner";
import DashBoardAdminAdmin from "../../dashboard/admin/dashboardList/Admin";
import DashboardSupervisor from "../../dashboard/admin/dashboardList/Supervisor";

const DashboardAdmin = () => {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error dong hihihi</div>;

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <JumbotronComponent />
            <NavbarAdminComponent />
            <Switch>
            <Route exact path="/dashboard/admin/admin" component={DashBoardAdminAdmin} />
              <Route
                exact
                path="/dashboard/admin/planner"
                component={DashboardPlanner}
              />
              <Route
                exact
                path="/dashboard/admin/supervisor"
                component={DashboardSupervisor}
              />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DashboardAdmin;
