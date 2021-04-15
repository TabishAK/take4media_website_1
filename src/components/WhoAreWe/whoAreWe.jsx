import React from "react";
import "./whoAreWe.scss";
import HeadingWithVectors from "./../Headings/headingWithVector";

import Slide from "react-reveal/Slide";

const WhoAreWe = () => {
  return (
    <div className="WAW container">
      <HeadingWithVectors heading="WHO ARE WE?" />

      <Slide right>
        <p
          className="acha mt-3 mb-4"
          style={{
            textAlign: "center",
            marginRight: "13%",
            marginLeft: "13%",
            fontSize: "16px",
          }}
        >
          We, Take4media, Are An Agency Specializing In Creative Advertising,
          Photography, Videography, Highend Photo Retouching & Social Media
          Marketing. Our Team Creates Amazing Designs, Web-sites, Develops Viral
          Campaigns & Commercials
        </p>
      </Slide>
      <h6 className="service-provider" style={{ color: "#7eab3a" }}>
        Take4Media Is Service Provider Company Organised In 2016
      </h6>

      <Slide right>
        <p
          style={{
            textAlign: "center",
            marginRight: "6%",
            marginLeft: "6%",
            fontSize: "16px",
          }}
          className="mt-4 haha"
        >
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum..
        </p>
      </Slide>
    </div>
  );
};

export default WhoAreWe;
