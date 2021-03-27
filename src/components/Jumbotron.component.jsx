import React from "react";

const JumbotronComponent = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, {`Nama`} ! </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/" role="button">
          Add New Project
        </a>
      </p>
    </div>
  );
};

export default JumbotronComponent;
