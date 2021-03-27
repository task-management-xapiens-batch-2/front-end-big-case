import React from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../components/Button.component";
import DatePickerComponent from "../components/DatePicker.component";
import InputComponent from "../components/Input.component";
import OptionSelector from "../components/Selector.component";

const AddNewProject = () => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <h1>Create New Project</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <ol className="container">
              <li>1. Project Information</li>
              <li>2. Task Information</li>
              <li>3. Confirmation</li>
            </ol>
          </div>
          <div className="col-9">
            <div className="container">
              <InputComponent
                type="text"
                placeholder="Enter your project name"
                label="Project Name"
              />
              <InputComponent
                type="text"
                placeholder="Enter your project description"
                label="Project Description"
              />
              <InputComponent
                type="text"
                placeholder="Enter your project name"
                label="Project Name"
              />
              <div className="row">
                <div className="col">
                  <label className="form-check-label">Start Date</label>
                  <DatePickerComponent />
                </div>
                <div className="col">
                  <OptionSelector label="Assign a Worker" />
                </div>
              </div>
              <div>
                <ButtonComponent
                  className="mr-3"
                  title="Save Draft"
                  onClick={() => history.push("/dashboard")}
                />
                <ButtonComponent
                  title="Next"
                  onClick={() => history.push("/dashboard")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProject;
