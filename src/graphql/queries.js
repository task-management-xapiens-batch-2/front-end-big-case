import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { urlConfig } from "../configs/urlConfig";

const token = localStorage.getItem("token");

export const client = new ApolloClient({
  uri: urlConfig,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
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
      is_read
      status
    }
  }
`;

export const GET_ALL_PROJECT = gql`
  query {
    findAllproject {
      id
      created_by
      title
      description
      is_complete
    }
  }
`;

export const FIND_ONE_PROJECT = gql`
  query {
    findOneProjectById(id: 5) {
      title
      created_by
    }
  }
`;
