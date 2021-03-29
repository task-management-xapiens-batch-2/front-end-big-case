import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import { useHistory } from "react-router-dom";

const JumbotronComponent = () => {
  const history = useHistory();
  return (
    <Paper className="jumbotron">
      <h1 className="display-4">Hi, {`Nama`} ! </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p className="lead">
        <Button
          variant="contained"
          onClick={() => history.push("/dashboard/planner/new-project")}
          color="primary"
        >
          Add New Project
        </Button>
      </p>
    </Paper>
  );
};

export default JumbotronComponent;
