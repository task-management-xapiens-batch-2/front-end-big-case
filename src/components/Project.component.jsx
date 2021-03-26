import React from "react";
import { useHistory } from "react-router-dom";

const ProjectComponent = () => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/detail-project")}
      style={{ backgroundColor: "#efefef", height: 100 }}
      className="row mb-3"
    />
  );
};

export default ProjectComponent;
