import React from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../components/Button.component";
import DatePickerComponent from "../components/DatePicker.component";
import InputComponent from "../components/Input.component";
import OptionSelector from "../components/Selector.component";

const AddNewProject = () => {
  const history = useHistory();
  return (
    <div className="add-project-section container-fluid">
      <h1>Create New Project</h1>
      <div>
        <InputComponent
          type="text"
          placeholder="Enter your project name"
          label="Project Name"
        />
        <DatePickerComponent />
        <OptionSelector label="Assign a Worker" />
        <textarea rows="3" cols="auto" />
      </div>
      <div>
        <ButtonComponent title="Draft" onClick={() => history.push("/")} />
        <ButtonComponent title="Submit" onClick={() => history.push("/")} />
      </div>
    </div>
  );
};

export default AddNewProject;
