import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const JumbotronComponent = ({ notPlanner, fullname }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-capitalize">Hi, {fullname}! </h1>
      <p className="lead">
        Welcome to user panel for planner and worker. Here you can create, edit,
        and delete planner and worker.
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
  );
};

const mapStateToProps = (state) => {
  return {
    fullname: state.login.fullname,
  };
};

export default connect(mapStateToProps, null)(JumbotronComponent);
