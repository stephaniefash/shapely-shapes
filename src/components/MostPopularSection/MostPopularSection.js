import React from "react";
import "./MostPopularSection.css";

export const MostPopularSection = () => {
  return (
    <div className="most-popular-section-container">
      {" "}
      <div className="most-popular-section-main">
        <h1 className="most-popular-header">
          Straight leg jeans are the most popular denim cut at the moment.
        </h1>
        <section className="info-container-1">
          <h1>
            {" "}
            SKINNY JEANS <br /> HAVE DOMINATED THE MARKET FOR A DECADE
          </h1>
          <div>
            Skinny jeans are now being overtaken by demand for more relaxed-fit
            styles.
            <br />
            <br />
            Boyfriend and distressed styles are trending.
          </div>
          <img
            src="https://d3n32ilufxuvd1.cloudfront.net/5cefbdb4f3a58214725eee83/1449781/upload-4d7135d4-f0a3-4625-ac17-c19da6fee33d.jpg"
            alt="jeans"
          />
        </section>

        <section className="info-container-2">
          <h1>’MOM JEANS’ ARE A HUGE GLOBAL TREND</h1>
          <div>
            Skinny jeans are now being overtaken by demand for more relaxed-fit
            styles. Boyfriend and distressed styles are trending.{" "}
          </div>
          <img
            src="https://d3n32ilufxuvd1.cloudfront.net/5cefbdb4f3a58214725eee83/1449781/upload-9a3258b3-a30b-468f-98bd-6357dd115345.jpg"
            alt="jeans"
          />
        </section>
        <section className="info-container-3">
          <h1>LOW RISE JEANS ARE MAKING A COMEBACK</h1>

          <div>
            Skinny jeans are now being overtaken by demand for more relaxed-fit
            styles. Boyfriend and distressed styles are trending.{" "}
          </div>
          <img
            src="https://d3n32ilufxuvd1.cloudfront.net/5cefbdb4f3a58214725eee83/1449781/upload-9da3ef17-292f-491d-918c-48ef473cec42.jpg"
            alt="jeans"
          />
        </section>
      </div>
    </div>
  );
};
