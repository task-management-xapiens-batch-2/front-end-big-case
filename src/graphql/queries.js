import { urlConfig } from "../configs/urlConfig";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const httpLink = createHttpLink({
  uri: urlConfig,
});

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbG5hbWUiOiJBZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInNwdl9pZCI6bnVsbCwiaWF0IjoxNjE3MDI1MTg5LCJleHAiOjE2MTcyODQzODl9.GzNsll5bB9HeUKuP725NlKLCDT6iRyBwgbzZgSaH6wMn0SGc8kpLWpUsfUY_d1marRoeo-SrgHhazVWJy28w0w"
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export const GET_USER_FROM_ADMIN = gql`
  query {
    findAllUserAdmin {
      id
      fullname
      username
      email
      password
      role
      spv_id
    }
  }
`;

export const GET_ALL_USER = gql`
  query {
    user {
      id
      fullname
      username
      email
      password
      role
    }
  }
`;

export const FIND_USER = gql`
  query {
    findUser {
      id
      fullname
      role
    }
  }
`;

export const GET_TASK_SUPERVISOR = gql`
  query {
    findTaskSPV {
      id
      project_id
      title
      assignee
      description
      start_date
      due_date
      attachment
      status
    }
  }
`;

export const GET_TASK_PLANNER = gql`
  query {
    findAllTask {
      id
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;

export const GET_ALL_PROJECT = gql`
  query {
    findAllTask {
      id
      title
      description
      start_date
      due_date
    }
  }
`;

export const CREATE_USER = gql`
  mutation RegisterUser(
  $fullname: String
  $username: String!
  $email: String!
  $password: String!
  $spv_id: Int
  $role: String!
) {
  registerUser(
    fullname: $fullname
    username: $username
    email: $email
    password: $password
    spv_id: $spv_id
    role: $role
  ) {
    fullname
    username
    email
    password
    role
    spv_id
  }
}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: Int
    $fullname: String
    $username: String
    $email: String
    $spv_id: Int
    $role: String
  ) {
    updateUser(
      id: $id
      fullname: $fullname
      username: $username
      email: $email
      spv_id: $spv_id
      role: $role
    ) {
      fullname
      username
      email
      password
      spv_id
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($id: Int, $password: String) {
    updatePassword(id: $id, password: $password) {
      id
      password
    }
  }
`;

export const UPDATE_TASK_WORKER = gql`
  mutation UpdateTaskWorker($id: Int, $status: String) {
    updateTaskWorker(id: $id, status: $status) {
      id
      status
    }
  }
`;

export const CREATE_NOTE = gql`
  mutation CreateNote($id: Int, $note: String) {
    createNote(id: $id, note: $note) {
      id
      note
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask(
    $project_id: Int
    $assignee: Int
    $title: String
    $description: String
    $start_date: String
    $due_date: String
    $attachment: String
    $status: String
    $is_read: String
  ) {
    createTask(
      project_id: $project_id
      assignee: $assignee
      title: $title
      description: $description
      start_date: $start_date
      due_date: $due_date
      attachment: $attachment
      status: $status
      is_read: $is_read
    ) {
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: Int
    $project_id: Int
    $assignee: Int
    $title: String
    $description: String
    $start_date: String
    $due_date: String
    $attachment: String
    $status: String
  ) {
    updateTask(
      id: $id
      project_id: $project_id
      assignee: $assignee
      title: $title
      description: $description
      start_date: $start_date
      due_date: $due_date
      attachment: $attachment
      status: $status
    ) {
      id
      project_id
      assignee
      title
      description
      start_date
      due_date
      attachment
      status
    }
  }
`;

export const UPDATE_APPROVAL = gql`
  mutation UpdateApproval($id: Int, $status: String) {
    updateApproval(id: $id, status: $status) {
      id
      status
    }
  }
`;

export const UPDATE_IS_READ = gql`
  mutation UpdateIsRead($id: Int) {
    updateIsRead(id: $id) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: Int) {
    deleteTask(id: $id) {
      id
    }
  }
`;

export const STATUS_TO_DRAFT = gql`
  mutation StatusToDraft($id: Int, $status: String) {
    statusToDraft(id: $id, status: $status) {
      id
      status
    }
  }
`;
