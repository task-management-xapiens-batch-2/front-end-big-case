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

export const FIND_USER = gql`
  query {
    findUser {
      id
      fullname
      username
      email
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
