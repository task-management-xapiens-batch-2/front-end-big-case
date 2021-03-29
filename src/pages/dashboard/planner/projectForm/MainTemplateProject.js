import { useMutation } from "@apollo/client";
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { ADD_TASK } from "../../../../graphql/mutation";
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
  const [addTask] = useMutation(ADD_TASK);
  const [formData, setFormData] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setFormData, navigation, addTask };

  console.log(step);
  console.log(formData);

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
};

export default MainTemplateProject;
