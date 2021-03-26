import React from "react";

const ButtonComponent = ({ title, clicked }) => {
  return (
    <button className="btn btn-primary" type="submit" onClick={clicked}>
      {title}
    </button>
  );
};

export default ButtonComponent;
