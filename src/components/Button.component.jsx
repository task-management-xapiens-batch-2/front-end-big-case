import React from "react";

const ButtonComponent = ({ title }) => {
  return (
    <button className="btn btn-primary" type="submit">
      {title}
    </button>
  );
};

export default ButtonComponent;
