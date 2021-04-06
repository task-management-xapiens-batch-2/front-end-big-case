import { ApolloClient, InMemoryCache } from "@apollo/client";
import { token } from "../helpers/token";
import { urlConfigs } from "./urlConfigs";

export const client = new ApolloClient({
  uri: urlConfigs.graph,
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});
