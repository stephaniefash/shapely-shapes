import React, { useEffect } from "react";
import { TimelineMax, TweenMax, TimelineLite } from "gsap/all";
import { letterArray } from "../../constants/images";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import "./Header.css";
const Header = () => {
  let tween = new TimelineLite();
  let controller = new ScrollMagic.Controller();
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  let imageElements = [];

  useEffect(() => {
    imageElements.map((letter) => {
      return tween.to(letter, 0, randomPositionGenerator());
    });
    tween.to(imageElements, 2, {
      autoAlpha: 1,
      ease: "slow(0.7, 0.7, false)",
    });
    playArrangeTextAnimation();
  });

  const playArrangeTextAnimation = () => {
    const tween = TweenMax.to(imageElements, 1.8, {
      x: 0,
      y: 0,
      z: 0,
      autoAlpha: 1,
      ease: "expo.out",
      scale: 1,
    });
    return new ScrollMagic.Scene({
      triggerElement: "#letter-animation",
      offset: 400,
    })
      .setTween(tween)
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

  const randomPositionGenerator = (absoluteRange = 200) => {
    let min = Math.ceil(-absoluteRange);
    let max = Math.floor(absoluteRange);

    const randomNumber = () =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    return {
      x: randomNumber(),
      y: randomNumber(),
      z: randomNumber(),
      autoAlpha: 0,
    };
  };

  return (
    <div className="container">
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
