import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { urlConfig } from "../configs/urlConfig";

export const client = new ApolloClient({
  uri: urlConfig,
  cache: new InMemoryCache(),
});

export const GET_TASK_DETAIL = gql`
  query {
    findTaskSPV {
      id
      assignee
      title
      description
      attachment
    }
  }
`;

export const GET_ALL_PROJECT = gql`
  query {
    findTaskSPV {
      id
      title
      description
      start_date
      due_date
    }
  }
`;

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
