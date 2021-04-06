import {
  SPV_COLUMN_DATA,
  SPV_DATA_REQUEST,
  SPV_CREATE_USER,
} from "../actions/actionTypes";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const initialState = {
  columnDataUser: [
    // { title: "No", field: "id" },
    {
      title: "Full Name",
      field: "fullname",
    },
    { title: "Username", field: "username" },
    { title: "Email Address", field: "email" },
    {
      title: "Role",
      field: "role",
      lookup: { worker: "worker", planner: "planner" },
    },
  ],
  createNewUser: {
    fullname: "",
    username: "",
    email: "",
    password: "",
    role: "",
  },
  columnDataProject: [
    // { title: "No", field: "id" },
    { title: "Assignee", field: "assignee" },
    { title: "Project Title", field: "title" },
    {
      title: "Start Date",
      field: "start_date",
      render: (rowData) => moment.unix(rowData.start_date).format("Do MMMM"),
    },
    {
      title: "Due Date",
      field: "due_date",
      render: (rowData) => moment.unix(rowData.due_date).format("Do MMMM"),
    },
  ],
  columnDataTask: [
    // { title: "No", field: "id" },
    { title: "Assignee", field: "assignee" },
    { title: "Task Title", field: "title" },
    {
      title: "Start Date",
      field: "start_date",
      render: (rowData) => moment.unix(rowData.start_date).format("Do MMMM"),
    },
    {
      title: "Due Date",
      field: "due_date",
      render: (rowData) => moment.unix(rowData.due_date).format("Do MMMM"),
    },
    {
      title: "Status",
      field: "status",
      lookup: { submit: "submit", reject: "reject", done: "done" },
    },
  ],
};

const spvReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log(payload);
  switch (type) {
    case SPV_CREATE_USER:
      return {
        ...state.createNewUser,
        createNewUser: payload,
      };
    case SPV_COLUMN_DATA:
    case SPV_DATA_REQUEST:
    default:
      return state;
  }
};

export default spvReducer;
