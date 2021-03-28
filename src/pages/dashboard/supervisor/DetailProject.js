import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../../../components/Button.component";
import ProgressBar from "../../../components/ProgressBar.component";
import TaskComponent from "../../../components/Task.component";
import { GET_TASK_SUPERVISOR } from "../../../graphql/queries";

const DetailProject = () => {
  const { error, data, loading } = useQuery(GET_TASK_SUPERVISOR);

  const history = useHistory();

  if (loading) return "Loading...";
  if (error) return "Error bos...";

  console.log(data)

  const getTaskDetail = data.findTaskSPV.map(({ id, title, description }) => {
    return (
      <div key={id}>
        <TaskComponent desc={description} title={title} />
      </div>
    );
  });

  // console.log(data.findTaskSPV.length)

  return (
    <div className="detail-project-spv-section container-fluid">
      <h1>Detail Project</h1>
      <button onClick={() => history.goBack()}>Back</button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center mr-3">
            Tanggal 21 Oktober 1931
          </div>
          <p className="worker-name mr-2 p-2">Worker Name</p>
          <p className="worker-name ml-2 p-2">Planner Name</p>
        </div>
        <ProgressBar totalTask={data.findTaskSPV.length} />
        <div className="col mt-3 sm-10">{getTaskDetail}</div>
        <div className="d-flex justify-content-end align-items-end">
          <ButtonComponent title="Return" variant="warning" />
          <ButtonComponent title="Reject" variant="danger" />
          <ButtonComponent title="Approve" />
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
