import React from "react";
import Header from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import "./App.css";
import { FactsSection } from "./components/FactsSection/FactsSection";
import { MostPopularSection } from "./components/MostPopularSection/MostPopularSection";

const App = () => {
  return (
    <div className="app-div">
      <Header />
      <Article id="article" text={""} header={"d"} />
      <FactsSection />
      <MostPopularSection />
    </div>
  );
};

export default App;
