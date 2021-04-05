import {
  SPV_COLUMN_DATA,
  SPV_DATA_REQUEST,
} from "../actions/actionTypes";

const initialState = {
  columnData: [
    // { title: "No", field: "id" },
    { title: "Full Name", field: "fullname" },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    // { title: "Password", field: "password" },
    {
      title: "Role",
      field: "role",
      lookup: { worker: "worker", planner: "planner" },
    },
  ],
};

const spvReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(payload)
  switch (type) {
    case SPV_COLUMN_DATA:
    case SPV_DATA_REQUEST:
    default:
      return state;
  }
};

export default spvReducer;
