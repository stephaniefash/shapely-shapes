import React from "react";
import "./Article.css";

export const Article = ({ header, text }) => {
  return (
    <section className={"article-section"}>
      <h1>
        {" "}
        Jeans are one of the most searched-for fashion items worldwide, with an
        average of 13 searches per second.{" "}
      </h1>

      <div className="body-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat,
      </div>
    </section>
  );
};
