import React from "react";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";

// import ButtonComponent from "../components/Button.component";
import DashboardAdmin from '../dashboard/admin/DashboardAdmin'
import DashboardPlanner from '../dashboard/admin/DashboardPlanner'
import DashboardSupervisor from '../dashboard/admin/DashboardSupervisor'

const Dashboard = () => {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error dong hihihi</div>;

  const getUserData = () =>
  data.user.map(({ id, fullname, username, email, role, spv_id }) => {
    let fakeRole = "planner"
    switch (fakeRole) {
      case "admin":
        <DashboardAdmin
          id={id}
          fullname={fullname}
          username={username}
          email={email}
          role={role}
          idSpv={spv_id}
        />;
        history.push("/dashboard/admin");
        break;
      case "planner":
        <DashboardPlanner
          id={id}
          fullname={fullname}
          username={username}
          email={email}
          role={role}
          idSpv={spv_id}
        />;
        history.push("/dashboard/planner");
        break;
      case "supervisor":
        <DashboardSupervisor
          id={id}
          fullname={fullname}
          username={username}
          email={email}
          role={role}
          idSpv={spv_id}
        />;
        history.push("/dashboard/supervisor");
        break;
      default:
        return role;
    }
  });

  getUserData()
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
