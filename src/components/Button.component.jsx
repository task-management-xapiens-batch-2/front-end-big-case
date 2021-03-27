import React from "react";

const ButtonComponent = ({ title, ...rest }) => {
  return (
    <button {...rest} className="btn btn-primary mx-2" type="submit">
      {title}
    </button>
  );
};

export default ButtonComponent;
