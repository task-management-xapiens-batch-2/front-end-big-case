import { Paper } from "@material-ui/core";
import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import { connect } from "react-redux";
>>>>>>> e058e1e3e42c38a27adbb19b4365ab7a5b2455a0

const JumbotronComponent = ({ notPlanner, fullname, description }) => {
  return (
<<<<<<< HEAD
    <Paper className="jumbotron">
      <h1 className="display-4">Hi, {localStorage.getItem("fullname")} ! </h1>
      <p className="lead">You have {`x projects`} to finish today.</p>
    </Paper>
=======
    <div className="jumbotron">
      <h1 className="display-4 text-capitalize">Hi, {fullname}! </h1>
      <p className="lead">
        {description}
      </p>
      <p className="lead">
        {notPlanner ? (
          ""
        ) : (
          <Link
            className="btn btn-primary btn-lg"
            to="dashboard/planner/new-project"
            role="button"
          >
            Add New Project
          </Link>
        )}
      </p>
    </div>
>>>>>>> e058e1e3e42c38a27adbb19b4365ab7a5b2455a0
  );
};

const mapStateToProps = (state) => {
  return {
    fullname: state.login.fullname,
  };
};

export default connect(mapStateToProps, null)(JumbotronComponent);
