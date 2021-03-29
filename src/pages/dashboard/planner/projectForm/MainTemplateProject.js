import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import ProjectConfirmation from "./ProjectConfirmation";
import ProjectForm from "./ProjectForm";
import SuccessInfo from "./SuccessInfo";
import TaskForm from "./TaskForm";

const ADD_TASK = gql`
  mutation AddTask(
    $title: String
    $description: String
    $start_date: String
    $due_date: String
    $attachment: String
  ) {
    createTask(
      title: $title
      description: $description
      start_date: $start_date
      due_date: $due_date
      attachment: $attachment
    ) {
      project_id
      title
      description
      assignee
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;

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

  return (
    <div>
      <h1>MultiStep</h1>
    </div>
  );
};

export default MainTemplateProject;
