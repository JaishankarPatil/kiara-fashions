import React from "react";

import { HomePageContainer } from "./home.styles";

import HomePageComponent from "../../home-page/homepage.component";

const Home = (props) => {
  console.log("hellooo", props);
  return (
    <HomePageContainer>
      <HomePageComponent />
    </HomePageContainer>
  );
};

export default Home;
