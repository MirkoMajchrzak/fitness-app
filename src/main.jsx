import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./index.css";
import Dash from "./App/dash";
import Browse from "./App/browse";
import Profile from "./App/profile";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge1u44d0e9f01upbd60ajac/master",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Dash />
    {/* <Browse />
    <Profile /> */}
  </ApolloProvider>,
  document.getElementById("root")
);
