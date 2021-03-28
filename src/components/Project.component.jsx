import React from "react";
import { useHistory } from "react-router-dom";

const ProjectComponent = ({ title, description, start_date, due_date }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/dashboard/planner/detail-project")}
      className="project__container row mb-3"
    >
      <div className="col">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="col project__date">
        <span className="mr-3">Start: {start_date}</span>
        <span>Deadline: {due_date}</span>
      </div>
    </div>
  );
};

export default ProjectComponent;
