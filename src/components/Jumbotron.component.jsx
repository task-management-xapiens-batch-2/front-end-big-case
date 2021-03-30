import React from "react";
import { Link } from "react-router-dom";

const JumbotronComponent = ({ notPlanner }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, {localStorage.getItem("fullname")} ! </h1>
      <p className="lead">
        Have a good day!
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

export default JumbotronComponent;
