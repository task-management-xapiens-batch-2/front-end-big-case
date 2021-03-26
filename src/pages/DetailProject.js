import React from "react";
import ProgressBar from "../components/ProgressBar.component";
import TaskComponent from "../components/Task.component";

const DetailProject = () => {
  return (
    <div className="container-fluid">
      <h1>Detail Project</h1>
      <button>Back</button>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="mr-3">Tanggal 21 Oktober 1931</div>
          <input type="text" placeholder="Worker name" />
        </div>
        <ProgressBar />
        <div className="col mt-3 sm-10">
          <TaskComponent />
          <TaskComponent />
          <TaskComponent />
          <TaskComponent />
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
