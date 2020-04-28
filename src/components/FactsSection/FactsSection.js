import React, { useEffect } from "react";
import "./FactsSection.css";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollMagic from "scrollmagic";
import { TimelineLite, TimelineMax, TweenMax } from "gsap/all";

export const FactsSection = () => {
  let tl = new TimelineLite();
  let controller = new ScrollMagic.Controller();
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  useEffect(() => {
    positionMediaItemOnLoad();
    moveMediaItemsOnScroll();
  });

  const positionMediaItemOnLoad = () => {
    const tween = TweenMax.to("#main-text", 0, {
      x: window.innerWidth / 2,
    });

    const jeanJacketTween = TweenMax.to("#jean-jacket", 0, {
      x: 320,
      y: -2000,
    });

    const supportingTextTween = TweenMax.to("#supporting-text", 0, {
      x: window.innerWidth / 2.3,
      y: 1000,
    });

    tl.add([tween, jeanJacketTween, supportingTextTween]);
  };

  const moveMediaItemsOnScroll = () => {
    const tween = TweenMax.to("#main-text", {
      translateX: "-60%",
    });

    const jeanJacketTween = TweenMax.to("#jean-jacket", {
      translateY: 0,
    });

    const supportingTextTween = TweenMax.to("#supporting-text", {
      translateY: 300,
    });

    new ScrollMagic.Scene({
      triggerHook: "onLeave",
      triggerElement: "#facts-section-container",
      duration: "100%",
    })
      .setTween([tween, jeanJacketTween, supportingTextTween])
      .setPin("#facts-section-container")
      .addTo(controller);
  };

  return (
    <div id="facts-section-container" className="facts-section-container">
      <h1 id="supporting-text" className="supporting-text">
        These are the facts of the day. The beautful facts. So, beautiful.
      </h1>
      <img
        id="jean-jacket"
        className="jeans-image"
        src="https://media.allure.com/photos/5ca2914d665f528695228fca/master/w_2364,h_3000,c_limit/0519-allure-covershoot-model-adut-balenciaga-shirt.png"
        alt={"jeans"}
      />
      <h1 id="main-text" className="main-text">
        Denimology
      </h1>
    </div>
  );
};
