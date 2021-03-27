import React from "react";
import { useHistory } from "react-router";

const SuccessInfo = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push("/dashboard");
  }, 2000);
  return (
    <div>
      <h3>Success</h3>
    </div>
  );
};

export default SuccessInfo;
