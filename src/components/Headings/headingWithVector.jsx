import React from "react";
import Line from "../../images/vectors/Line-1.png";
const HeadingWithVectors = (props) => {
  return (
    <React.Fragment>
      <div className="who-are-we">
        <h4 className="mt-5">{props.heading}</h4>
      </div>
      <img
        className="line"
        style={{
          width: "35%",
          height: "20px",
        }}
        src={Line}
        alt="vector"
      />
    </React.Fragment>
  );
};

export default HeadingWithVectors;
