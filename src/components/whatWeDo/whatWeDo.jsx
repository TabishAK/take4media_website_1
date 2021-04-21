import React from "react";
import HeadingWithVectors from "./../Headings/headingWithVector";
import "./whatWeDo.scss";
import LogoPanel from "./../logoPanel/logoPanel";
import Slide from "react-reveal/Slide";

const WhatWeDo = () => {
  return (
    <React.Fragment>
      <HeadingWithVectors heading="WHAT WE DO?" />
      <div className="mb-5" style={{ background: "gainsboro" }}>
        <LogoPanel />
      </div>

      <h6 className="service-provider mt-5" style={{ color: "#7eab3a" }}>
        Take4Media Is Service Provider Company Organised In 2016
      </h6>

      <Slide right>
        <p
          style={{
            textAlign: "center",
            marginRight: "12%",
            marginLeft: "12%",
            fontSize: "16px",
          }}
          className="mt-4"
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
    </React.Fragment>
  );
};

export default WhatWeDo;
