import React from "react";

const InputComponent = ({ label, placeholder, type }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputComponent;
