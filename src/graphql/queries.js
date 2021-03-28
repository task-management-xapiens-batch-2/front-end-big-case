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
      notes {
        id
        task_id
        note
      }
    }
  }
`;

export const GET_TASK_PLANNER = gql`
  query {
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
