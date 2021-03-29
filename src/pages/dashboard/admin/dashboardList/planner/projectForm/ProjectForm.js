import React from "react";
import { useHistory } from "react-router";
import ButtonComponent from "../../../../components/Button.component"
import InputComponent from "../../../../components/Input.component";

const ProjectForm = ({ formData, setFormData, navigation }) => {
  const history = useHistory();

  const { projectTitle, projectDesc } = formData;
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
                name="projectTitle"
                placeholder="Enter your project name"
                label="Project Name"
                value={projectTitle}
                onChange={setFormData}
              />
              <InputComponent
                type="text"
                name="projectDesc"
                placeholder="Enter your project description"
                label="Project Description"
                value={projectDesc}
                onChange={setFormData}
              />
              <div>
                <ButtonComponent
                  className="mr-3"
                  title="Save Draft"
                  onClick={() => history.push("/dashboard")}
                />
                <ButtonComponent
                  title="Next"
                  onClick={() => navigation.next()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
