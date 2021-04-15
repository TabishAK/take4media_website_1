import React from "react";
import "../../media_query/media_query.scss";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const WelcomeText = () => {
  return (
    <React.Fragment>
      <Flip top>
        <h2
          className="Welcome-to-t4m"
          style={{ color: "white", marginTop: "5%" }}
        >
          Welocme to <span style={{ color: "#ce6a26" }}>Take4Media</span>
        </h2>
      </Flip>
      <Fade left>
        <h5 className="mb-5 DMG" style={{ color: "white" }}>
          Digital Marketing Agency
        </h5>
      </Fade>
    </React.Fragment>
  );
};

export default WelcomeText;
