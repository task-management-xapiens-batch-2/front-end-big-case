import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import ProgressBar from "../../../components/ProgressBar.component";
import TaskComponent from "../../../components/Task.component";
// import { GET_TASK_PLANNER } from "../../../graphql/queries";
import Button from "@material-ui/core/Button";

const GET_ALL_TASK = gql`
  {
    findAllTask {
      id
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UpdateTodo($title: String, $description: String) {
    updateTask(title: $title, description: $description) {
      id
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
    }
  }
`;

const DetailProject = () => {
  const { error, data, loading } = useQuery(GET_ALL_TASK);

  const history = useHistory();

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  const getTaskDetail = data.findAllTask.map(({ id, title, description }) => {
    return (
      <div key={id}>
        <TaskComponent desc={description} title={title} />
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <h1>Detail Project</h1>
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="mr-3">Tanggal 21 Oktober 1931</div>
          <input type="text" placeholder="Worker name" />
        </div>
        <ProgressBar totalTask={data.findAllTask.length} />
        <div className="col mt-3 sm-10">{getTaskDetail}</div>
      </div>
    </div>
  );
};

export default DetailProject;
