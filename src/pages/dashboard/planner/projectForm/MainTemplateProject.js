import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import ProjectConfirmation from "./ProjectConfirmation";
import ProjectForm from "./ProjectForm";
import SuccessInfo from "./SuccessInfo";
import TaskForm from "./TaskForm";

const defaultData = {
  projectTitle: "",
  projectDesc: "",
  taskTitle: "",
  taskDesc: "",
  attachment: "",
  startDate: "",
  endDate: "",
  worker: "",
  note: "",
};

const steps = [
  { id: "project" },
  { id: "task" },
  { id: "confirm" },
  { id: "success" },
];

const MainTemplateProject = () => {
  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  console.log(step);

  const props = { formData, setFormData, navigation };

  switch (step.id) {
    case "project":
      return <ProjectForm {...props} />;
    case "task":
      return <TaskForm {...props} />;
    case "confirm":
      return <ProjectConfirmation {...props} />;
    case "success":
      return <SuccessInfo {...props} />;
    default:
      break;
  }

  return (
    <div>
      <h1>MultiStep</h1>
    </div>
  );
};

export default MainTemplateProject;
