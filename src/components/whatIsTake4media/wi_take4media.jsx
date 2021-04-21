import { propTypes } from "react-bootstrap/esm/Image";
import Line2 from "../../images/vectors/Line-2.png";
const WhatIsTake4Meda = (props) => {
  return (
    <div className="container">
      {props.isShow ? (
        <>
          <h3>Take4Media?</h3>
          <img
            src={Line2}
            style={{
              width: "45%",
              height: "25px",
            }}
            alt="theme-vector"
          />
        </>
      ) : (
        ""
      )}

      <h6 className="service-provider mt-5" style={{ color: "#7eab3a" }}>
        Take4Media Is Service Provider Company Organised In 2016
      </h6>
      <p
        style={{
          textAlign: "center",
          marginRight: "3%",
          marginLeft: "3%",
          fontSize: "17px",
          fontWeight: 300,
        }}
        className="mt-4 mb-5 haha"
      >
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum..
      </p>
    </div>
  );
};

export default WhatIsTake4Meda;
