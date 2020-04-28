import React, { Component, useEffect } from "react";
import Header from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import "./App.css";

const App = () => {
  return (
    <div className="app-div">
      <div className="header-div">
        <Header />
      </div>
      <div id="article-div" className="article-div">
        <Article id="article" text={""} header={"d"} />
      </div>
    </div>
  );
};

export default App;
