import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import "./index.css";
import Dash from "./App/dash";
import Nav from "./components/navbar";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Dash />
    <Nav />
    </ApolloProvider>,
  document.getElementById("root")
);
