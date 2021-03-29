import { Paper } from "@material-ui/core";
import React from "react";

const JumbotronComponent = () => {
  return (
    <Paper className="jumbotron">
      <h1 className="display-4">Hi, {localStorage.getItem("fullname")} ! </h1>
      <p className="lead">You have {`x projects`} to finish today.</p>
    </Paper>
  );
};

export default JumbotronComponent;
