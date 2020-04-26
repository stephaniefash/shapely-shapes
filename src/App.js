import React, { Component, useEffect } from "react";
import Header from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import "./App.css";
import { TimelineLite, TimelineMax, TweenMax } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const App = () => {
  let tween = new TimelineLite();
  let controller = new ScrollMagic.Controller();
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  useEffect(() => {
    tween.to("#article-div", 0.1, { opacity: 0 });

    const singleTween = TweenMax.to("#article-div", 4, { opacity: 1 });
    new ScrollMagic.Scene({
      triggerElement: "#article-div",
      offset: "750",
    })
      .setPin("#header-div")
      .setTween(singleTween)
      .addTo(controller);
  });

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
