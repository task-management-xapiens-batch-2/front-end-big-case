import React from "react";
import { Link } from "react-router-dom";

const JumbotronComponent = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, {localStorage.getItem('fullname')} ! </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="lead">
        <Link
          className="btn btn-primary btn-lg"
          to="dashboard/planner/new-project"
          role="button"
        >
          Add New Project
        </Link>
      </p>
    </div>
  );
};

export default JumbotronComponent;
