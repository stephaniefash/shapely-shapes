import React, { Component, useEffect } from "react";
import Header from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import "./App.css";
import { FactsSection } from "./components/FactsSection/FactsSection";

const App = () => {
  return (
    <div className="app-div">
      <div className="header-div">
        <Header />
      </div>
      <Article id="article" text={""} header={"d"} />
      <FactsSection /> dfhdjkhklghlkj
    </div>
  );
};

export default App;
