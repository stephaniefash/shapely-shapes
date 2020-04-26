import React, { useEffect } from "react";
import { TimelineLite } from "gsap";
import { letterArray } from "./constants/images";
import "./App.css";

const App = () => {
  let tween = new TimelineLite();
  let imageElements = [];

  useEffect(() => {
    imageElements.map((letter) => {
      return tween.to(letter, randomPositionGenerator());
    });

    tween
      .to(imageElements, 3, { autoAlpha: 1 })
      .to(imageElements, 1, { x: 0, y: 0, z: 0, autoAlpha: 1 });
  }, [imageElements, tween]);

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

  const randomPositionGenerator = (absoluteRange = 300) => {
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
      <div>{renderLetters()}</div>
    </div>
  );
};

export default App;
