import React from "react";

const InputComponent = ({ label, placeholder, type, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        {...rest}
        className="form-control"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
