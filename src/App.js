import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/queries";
import TaskManagement from "./pages/TaskManagement";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <ApolloProvider client={client}>
      <TaskManagement />
      <CssBaseline />
    </ApolloProvider>
  );
}

export default App;
