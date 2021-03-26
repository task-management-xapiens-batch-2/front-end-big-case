import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { urlConfig } from "./configs/urlConfig";
import TaskManagement from "./pages/TaskManagement";

const client = new ApolloClient({
  uri: urlConfig,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <TaskManagement />
    </ApolloProvider>
  );
}

export default App;
