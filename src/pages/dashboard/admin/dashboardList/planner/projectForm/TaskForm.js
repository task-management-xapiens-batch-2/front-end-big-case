import React from "react";
import ButtonComponent from "../../../../components/Button.component";
import InputComponent from "../../../../components/Input.component";
import OptionSelector from "../../../../components/Selector.component";

const TaskForm = ({ formData, setFormData, navigation }) => {
  const {
    taskTitle,
    taskDesc,
    attachment,
    startDate,
    endDate,
    // worker,
    note,
  } = formData;
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
                name="taskTitle"
                placeholder="Enter your task title"
                label="Task Title"
                value={taskTitle}
                onChange={setFormData}
              />
              <InputComponent
                type="text"
                name="taskDesc"
                placeholder="Enter your task description"
                label="Task Description"
                value={taskDesc}
                onChange={setFormData}
              />
              <InputComponent
                type="file"
                name="attachment"
                value={attachment}
                onChange={setFormData}
                label="Attachment"
                accept="*"
              />
              <div className="row">
                <div className="col">
                  <InputComponent
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={setFormData}
                    label="Start Date"
                  />
                </div>
                <div className="col">
                  <InputComponent
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={setFormData}
                    label="End Date"
                  />
                </div>
                <div className="col">
                  <OptionSelector label="Assign a Worker" />
                </div>
              </div>
              <InputComponent
                label="Additional Notes: "
                placeholder="Enter a note about your project"
                name="note"
                value={note}
                onChange={setFormData}
              />
              <div>
                <ButtonComponent
                  className="mr-3"
                  title="Back"
                  onClick={() => navigation.previous()}
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

export default TaskForm;
