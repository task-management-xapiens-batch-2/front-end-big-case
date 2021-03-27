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