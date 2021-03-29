import { gql } from "@apollo/client";

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
