import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation AddTask(
    $title: String
    $description: String
    $start_date: String
    $due_date: String
    $attachment: String
  ) {
    createTask(
      title: $title
      description: $description
      start_date: $start_date
      due_date: $due_date
      attachment: $attachment
    ) {
      project_id
      title
      description
      assignee
      start_date
      due_date
      attachment
      status
      is_read
    }
  }
`;
