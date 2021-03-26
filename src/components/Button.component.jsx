import React from "react";

const ButtonComponent = ({ title, ...rest }) => {
  return (
    <button {...rest} className="btn btn-primary" type="submit">
      {title}
    </button>
  );
};

export default ButtonComponent;
