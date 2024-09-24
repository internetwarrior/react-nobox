import React from "react";
import Header from "./a_components/Header";
import Home from "./b_pages/Home";
import FeatureCard from "./a_components/CardPremium";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <FeatureCard />
    </div>
  );
};

export default App;
