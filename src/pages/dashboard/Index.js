import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {getUserLoginData} from '../../redux/actions/loginAction'

const Dashboard = ({role}) => {
  const history = useHistory()
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    // window.location.reload()
    switch (role) {
      case "admin": 
        history.push("/dashboard/supervisor/");
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

const mapStateToProps = state => {
  return {
    role: state.login.role
  }
}

export default connect(mapStateToProps, {getUserLoginData})(Dashboard);
