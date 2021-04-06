import { GET_ALL_TASK } from "../actions/typeActions";

const initState = {
  posts: null,
};

export const taskReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TASK:
      return { ...state, arr: payload.data.test };
    default:
      return state;
  }
};
