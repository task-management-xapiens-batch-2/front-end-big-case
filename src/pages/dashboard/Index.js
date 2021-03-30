import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USER_FROM_ADMIN } from "../../graphql/queries";

// import ButtonComponent from "../components/Button.component";
import DashboardAdmin from "../dashboard/admin/DashboardAdmin";
import DashboardPlanner from "../dashboard/planner/DashboardPlanner";
import DashboardSupervisor from "../dashboard/supervisor/DashboardSupervisor";

const Dashboard = () => {
  const history = useHistory()
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    // let fakeRole = "supervisor"
    const role = localStorage.getItem("role");

    console.log(role);
    switch (role) {
      case "admin":
        history.push("/dashboard/admin/");
        break;
      case "planner":
        history.push("/dashboard/planner");
        break;
      case "supervisor":
        history.push("/dashboard/supervisor");
        break;
      default:
        return role;
    }
  };
  return getUserData
};

export default Dashboard;
