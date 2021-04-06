import { urlConfig } from "../configs/urlConfig";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const httpLink = createHttpLink({
  uri: urlConfig,
});

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const GET_USER_FROM_ADMIN = gql`
  query {
    findAllUser {
      id
      fullname
      username
      email
      password
      role
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

export const GET_PROJECT_SUPERVISOR = gql`
  query FindAllProjectSupervisor {
    findAllProjectSupervisor {
      id
      assignee
      title
      description
      status
      attachment
      is_read
      start_date
      due_date
    }
  }
`;


export const GET_PROJECT_PLANNER = gql`
  query FindAllProjectPlanner {
    findAllProjectPlanner {
      id
      assignee
      title
      description
      status
      attachment
      is_read
      start_date
      due_date
    }
  }
`;

export const GET_TASK_PLANNER = gql`
  query FindAllTaskPlanner {
    findAllTaskPlanner {
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
      notes {
        id
        task_id
        note
      }
    }
  }
`;

export const GET_TASK_WORKER = gql`
  query FindAllTaskWorker {
    findAllTaskWorker {
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
      note {
        id
        task_id
        note
      }
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
    $fullname: String!
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createUser(
      fullname: $fullname
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      fullname
      username
      email
      password
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
    $password: String
    $role: String
    $spv_id: Int
  ) {
    updateUser(
      id: $id
      fullname: $fullname
      username: $username
      email: $email
      password: $password
      role: $role
      spv_id: $spv_id
    ) {
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

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int) {
    deleteUser(id: $id) {
      id
    }
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

export const STATUS_TO_DRAFT = gql`
  mutation StatusToDraft($id: Int, $status: String) {
    statusToDraft(id: $id, status: $status) {
      id
      status
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String, $description: String) {
    createProject(title: $title, description: $description) {
      id
      created_by
      title
      description
      is_complete
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($title: String, $description: String) {
    createProject(title: $title, description: $description) {
      id
      created_by
      title
      description
      is_complete
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: Int) {
    deleteProject(id: $id) {
      id
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
  ) {
    createTask(
      title: $title
      description: $description
      start_date: $start_date
      due_date: $due_date
    ) {
      project_id
      assignee
      title
      description
      start_date
      due_date
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($project_id: Int) {
    deleteTask(project_id: $project_id) {
      project_id
    }
  }
`;
