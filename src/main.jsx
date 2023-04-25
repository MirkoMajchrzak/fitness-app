import ReactDOM from "react-dom";
import { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./index.css";
import Dash from "./App/dash";
import Browse from "./App/browse";
import Profile from "./App/profile";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clge1u44d0e9f01upbd60ajac/master",
  cache: new InMemoryCache(),
});

const App = () => {
  const [activeScreen, setActiveScreen] = useState("Dash");

  const handleBrowseButtonClick = () => {
    console.log("lead me to browse!");
    setActiveScreen("Browse");
  };

  const handleHomeButtonClick = () => {
    console.log("lead me to home!");
    setActiveScreen("Dash");
  };

  const handleProfileButtonClick = () => {
    console.log("lead me to my profile!");
    setActiveScreen("Profile");
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "Dash":
        return <Dash />;
      case "Browse":
        return <Browse />;
      case "Profile":
        return <Profile />;
      default:
        return <Dash />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar
          onBrowseButtonClick={handleBrowseButtonClick}
          onHomeButtonClick={handleHomeButtonClick}
          onProfileButtonClick={handleProfileButtonClick}
        />
        {renderScreen()}
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
