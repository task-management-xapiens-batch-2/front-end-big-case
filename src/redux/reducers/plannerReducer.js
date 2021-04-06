import {
    PLANNER_CREATE_PROJECT
  } from "../actions/actionTypes";
  
  const initialState = {
    createNewProject: {
      id: "",
      assignee: "",
      title: "",
      description: "",
      start_date: "",
      due_date: "",
      status: "approve"
    },
  };
  
  const plannerReducer = (state = initialState, action) => {
    const { payload, type } = action;
    console.log(payload);
    switch (type) {
      case PLANNER_CREATE_PROJECT:
        return {
          ...state.createNewUser,
          createNewProject: payload,
        };
      default:
        return state;
    }
  };
  
  export default plannerReducer;
  