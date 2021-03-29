import React from "react";

const InputComponent = ({ name, label, placeholder, type, handleChange, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        {...rest}
        onChange={handleChange}
        className="form-control"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputComponent;
