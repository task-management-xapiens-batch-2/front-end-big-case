import { SPV_COLUMN_DATA } from "../actions/actionTypes";

const initialState = [
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
];

const spvReducer = (state = initialState, action) => {
    const {payload, type} = action
    switch(type) {
        case SPV_COLUMN_DATA:
            return state
        default:
            return state
    }
}

export default spvReducer;