import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { urlConfig } from "../configs/urlConfig";

export const client = new ApolloClient({
  uri: urlConfig,
  cache: new InMemoryCache(),
});

export const GET_USER = gql`
  query {
    user {
      id
      fullname
      username
      email
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
  mutation CreateUser(
    $fullname: String
    $username: String
    $email: String
    $password: String
    $spv_id: Int
    $role: String
  ) {
    createUser(
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
      spv_id
      role
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
