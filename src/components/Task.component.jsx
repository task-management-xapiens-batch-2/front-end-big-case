import React from "react";
import { useHistory } from "react-router";

const TaskComponent = () => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/detail-project")}
      style={{ backgroundColor: "#efefef", height: 100 }}
      className="mb-3"
    />
  );
};

export default TaskComponent;
