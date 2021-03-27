import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import DashboardAdmin from "./dashboard/admin/DashboardAdmin";
import DashboardPlanner from "./dashboard/planner/DashboardPlanner";
import DashboardSupervisor from "./dashboard/supervisor/DashboardSupervisor";

// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../components/Jumbotron.component";
import TableComponent from "../components/Table.component";

const Dashboard = () => {

  // const getUserData = () => data.user.map(
  //   ({ id, fullname, username, email, role, spv_id }) => {
  //     switch (role) {
  //       case "admin":
  //         <>
  //         <DashboardAdmin
  //           id={id}
  //           fullname={fullname}
  //           username={username}
  //           email={email}
  //           role={role}
  //           idSpv={spv_id}
  //         />;
  //         <Redirect to="/dashboard/admin"/>
  //         </>
  //         break;
  //       case "planner":
  //         <DashboardPlanner
  //           id={id}
  //           fullname={fullname}
  //           username={username}
  //           email={email}
  //           role={role}
  //           idSpv={spv_id}
  //         />;
  //         break;
  //       case "supervisor":
  //         <DashboardSupervisor
  //           id={id}
  //           fullname={fullname}
  //           username={username}
  //           email={email}
  //           role={role}
  //           idSpv={spv_id}
  //         />;
  //       default:
  //         return role;
  //     }
  //   }
  // );

  // useEffect(() => {
  //   getUserData()
  // }, [])

  const { data, loading, error } = useQuery(GET_USER);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error dong hihihi</div>;

 



  // TODO: Make 3 different dashboards: Admin Dashboard, Supervisor Dashboard, and Planner Dashboard

  /**
   * TODOS: Make an auth for 3 different roles: Admin, Supervisor, and Planner.
   * * Example: If I'm an admin, I'll be redirected to Admin Dashboard
   */

   

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <TableComponent title="Initiatives" status="Pending" />
              </div>
              <div className="col-sm">
                <TableComponent title="On Going" status="Not Started" />
              </div>
              <div className="col-sm">
                <TableComponent title="Reject" status="Rejected" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
