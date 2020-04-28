import React, { useEffect } from "react";
import "./FactsSection.css";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollMagic from "scrollmagic";
import { TimelineLite, TimelineMax, TweenMax, Linear } from "gsap/all";

export const FactsSection = () => {
  let tl = new TimelineLite();
  let controller = new ScrollMagic.Controller();
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  useEffect(() => {
    centerMainTextOnLoad();
    setMovingMainText();
  });

  const centerMainTextOnLoad = () => {
    const tween = TweenMax.to("#main-text", 0, {
      x: window.innerWidth / 2,
    });
    tl.add(tween);
  };

  const setMovingMainText = () => {
    const tween = TweenMax.to("#main-text", {
      translateX: "-40%",
    });

    new ScrollMagic.Scene({
      triggerHook: "onLeave",
      triggerElement: "#facts-section-container",
      duration: "100%",
    })
      .setTween(tween)
      .setPin("#facts-section-container")
      .addTo(controller);
  };

  return (
    <div id="facts-section-container" className="facts-section-container">
      <h1 id="main-text" className="main-text">
        Denimology
      </h1>
    </div>
  );
};
