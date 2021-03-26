import { ApolloClient, InMemoryCache } from "@apollo/client";
import { urlConfig } from "../configs/urlConfig";

export const client = new ApolloClient({
    uri: urlConfig,
    cache: new InMemoryCache(),
  });