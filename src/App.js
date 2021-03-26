import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { urlConfig } from "./configs/urlConfig";
import TaskManagement from "./pages/TaskManagement";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

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
