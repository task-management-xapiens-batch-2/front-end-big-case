import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./configs/graphConfig";
import { BaseRoute } from "./routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <BaseRoute />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
