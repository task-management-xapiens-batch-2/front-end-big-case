import { useQuery } from "@apollo/client";
import React from "react";
import ProgressBar from "../../../components/ProgressBar.component";
import TaskComponent from "../../../components/Task.component";
import { GET_TASK_PLANNER } from "../../../graphql/queries";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

const DetailProject = (props) => {
  const history = useHistory();
  const { error, data, loading } = useQuery(GET_TASK_PLANNER);
  const id = props.match.params.id;

  if (loading) return "Loading...";
  if (error) return "Error...";

  console.log(data.findAllTaskPlanner);
  const getTaskDetail = data.findAllTaskPlanner.map(
    ({ id, title, description }) => {
      return (
        <div key={id}>
          <TaskComponent desc={description} title={title} />
        </div>
      );
    }
  );

  return (
    <div className="container-fluid">
      <h1>Detail Project {id} </h1>
      <Button
        color="primary"
        onClick={() => history.go(-1)}
        variant="contained"
      >
        Back
      </Button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="mr-3">Tanggal 21 Oktober 1931</div>
          <input type="text" placeholder="Worker name" />
        </div>
        <ProgressBar totalTask={data.findAllTaskPlanner.length} />
        <div className="col mt-3 sm-10">{getTaskDetail}</div>
      </div>
    </div>
  );
};

export default DetailProject;
