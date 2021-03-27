import React from "react";
import { useHistory } from "react-router";

const TaskComponent = ({ title, desc }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/detail-project")}
      style={{ backgroundColor: "#efefef", padding: 10, borderRadius: 10 }}
      className="mb-3"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default TaskComponent;
