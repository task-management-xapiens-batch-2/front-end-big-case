import {
  PLANNER_CREATE_PROJECT,
  PLANNER_CREATE_TASK,
} from "../actions/actionTypes";

const initialState = {
  createNewProject: {
    id: "",
    assignee: "",
    title: "",
    description: "",
    start_date: "",
    due_date: "",
    status: "submit",
  },
  createNewTask: {
    project_id: "",
    task: "",
  },
};

const plannerReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(payload);
  switch (type) {
    case PLANNER_CREATE_PROJECT:
      return {
        ...state,
        createNewProject: payload,
      };
    case PLANNER_CREATE_TASK:
      return {
        ...state,
        createNewTask: payload,
      };
    default:
      return state;
  }
};

export default plannerReducer;
