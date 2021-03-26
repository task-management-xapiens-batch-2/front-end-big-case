import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/queries";
import TaskManagement from "./pages/TaskManagement";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <TaskManagement />
    </ApolloProvider>
  );
}

export default App;
