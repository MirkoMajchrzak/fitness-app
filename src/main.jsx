import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";
import Dash from "./App/Dash";
import Browse from "./App/Browse";
import Profile from "./App/Profile";
import Exercise from "./App/Exercise";
import Workout from "./App/Workout";
import WorkoutSwipe from "./App/WorkoutSwipe";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/exercise/:id",
    element: <Exercise />,
  },
  {
    path: "/exercise/workout/:id",
    element: <Workout />,
  },
  {
    path: "/exercise/workout/:id/training",
    element: <WorkoutSwipe />,
  },
]);

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge1u44d0e9f01upbd60ajac/master",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
);
