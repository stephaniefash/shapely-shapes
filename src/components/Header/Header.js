import React, { useEffect } from "react";
import { TimelineLite, TimelineMax, TweenMax, Power3 } from "gsap/all";
import { letterArray } from "../../constants/images";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import "./Header.css";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Header = () => {
  let tl = new TimelineLite();
  let controller = new ScrollMagic.Controller();

  let imageElements = [];

  useEffect(() => {
    scatterTextAnimation();
    pinAnimationOnPage();
    reArrangeTextAnimation();
  });

  const scatterTextAnimation = () => {
    imageElements.map((letter) => {
      return tl.add(TweenMax.to(letter, 0, generatePositionWithinRange()));
    });
  };

  const reArrangeTextAnimation = () => {
    const tween = TweenMax.to(imageElements, 1, {
      x: 0,
      y: 0,
      z: 0,
      autoAlpha: 1,
      ease: "expo.out",
      scale: 0.5,
    });
    return new ScrollMagic.Scene({
      triggerElement: "#letters-div",
    })
      .setTween(tween)
      .addIndicators()
      .addTo(controller);
  };

  const pinAnimationOnPage = () => {
    const element = "#letter-animation";

    const blackBackgroundTween = TweenMax.to(element, 0.5, {
      backgroundColor: "#BD14B9",
    });

    const redBackgroundTween = TweenMax.to(element, 0.5, {
      backgroundColor: "redBackgroundTween",
    });

    return new ScrollMagic.Scene({
      triggerHook: "onLeave",
      triggerElement: element,
      duration: "160%",
    })
      .setTween([redBackgroundTween, blackBackgroundTween])
      .setPin(element)
      .addTo(controller);
  };

  const renderLetters = () => {
    return letterArray.map((imgUrl, index) => {
      return (
        <img
          className={`letter-${index}`}
          src={imgUrl}
          ref={(img) => (imageElements[index] = img)}
          alt="letter"
        />
      );
    });
  };

  const generatePositionWithinRange = (absoluteRange = 200) => {
    let min = Math.ceil(-absoluteRange);
    let max = Math.floor(absoluteRange);

    const randomNumber = () =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    return {
      x: randomNumber(),
      y: randomNumber(),
      z: randomNumber(),
    };
  };

  return (
    <div id="container" className="container">
      <div id="padded-space-container" />
      <section id={"letter-animation"} className="letter-animation-section">
        <div id={"letters-div"} className={"render-letters-div"}>
          {renderLetters()}
        </div>
      </section>
    </div>
  );
};

export default Header;
