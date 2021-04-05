import {
  SPV_COLUMN_DATA,
  SPV_DATA_REQUEST,
} from "../actions/actionTypes";

const initialState = {
  columnData: [
    { title: "No", field: "id" },
    { title: "Full Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    { title: "Password", field: "password" },
    {
      title: "Role",
      field: "role",
      lookup: { worker: "worker", planner: "planner" },
    },
  ],
  userData: []
};

const spvReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(payload)
  switch (type) {
    case SPV_COLUMN_DATA:
      return state;
    case SPV_DATA_REQUEST:
        return {
            ...state,
            userData: payload
        }
    default:
      return state;
  }
};

export default spvReducer;
