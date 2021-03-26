import { useQuery} from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import ProgressBar from "../components/ProgressBar.component";
import TaskComponent from "../components/Task.component";
import {GET_TASK_DETAIL} from '../graphql/queries'


const DetailProject = () => {
  const history = useHistory();
  const { error, data } = useQuery(GET_TASK_DETAIL);
  console.log(data);
  if (error) return <div>Error bos...</div>;
  return (
    <div className="container-fluid">
      <h1>Detail Project</h1>
      <button onClick={() => history.goBack()}>Back</button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="mr-3">Tanggal 21 Oktober 1931</div>
          <input type="text" placeholder="Worker name" />
        </div>

        <ProgressBar />
        <div className="col mt-3 sm-10">
          {data.findTaskSPV.map(({ id, title, description }) => (
            <div key={id}>
              <TaskComponent desc={description} title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
