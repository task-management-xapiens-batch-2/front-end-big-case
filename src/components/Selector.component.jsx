import React from "react";

const OptionSelector = ({ label }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      <select className="form-control" aria-label="Select worker">
        <option selected>Select a worker</option>
        <option value="1">Maria</option>
        <option value="2">DB</option>
        <option value="3">Postgre</option>
      </select>
    </div>
  );
};

export default OptionSelector;
