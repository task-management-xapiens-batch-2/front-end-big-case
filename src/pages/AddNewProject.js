import React from "react";
import ButtonComponent from "../components/Button.component";
import InputComponent from "../components/Input.component";

const AddNewProject = () => {
  return (
    <div className="add-project-section container-fluid">
      <h1>Add New Project</h1>
      <div>
        <InputComponent
          type="text"
          placeholder="Enter your project title"
          label="Project Title"
        />
        <InputComponent
          type="text"
          placeholder="Search for a worker"
          label="Assign a Worker"
        />
        <textarea />
      </div>
      <div>
        <ButtonComponent title="Draft"  />
        <ButtonComponent title="Submit" />
      </div>
    </div>
  );
};

export default AddNewProject;
