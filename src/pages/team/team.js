import "./team.scss";
import Navbar from "./../../components/navbar/navbar";
import line from "../../images/vectors/Line-1.png";
import image from "../../images/employee-images/team-image.png";
import FooterMenus from "../../components/footerMenus/footerMenus";
import Footer from "../../components/footer/footer";

import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";

import React from "react";
const Team = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="team">
        <div className="header-background-team same">
          <Navbar />
        </div>

        <div className="heading">
          <h3 className="our-team mr-1">Our Team </h3>
          <h3 className="members"> Members </h3>
        </div>
        <img
          src={line}
          style={{
            width: "27%",
            height: "15px",
            marginTop: "-18px",
          }}
          alt="line-vector"
        />

        <div className="user-profile container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) =>
            i === 0 || i === 1 || i === 2 ? (
              <Rotate top left>
                <div>
                  <img src={image} style={{ width: "80%" }} />
                </div>
              </Rotate>
            ) : i === 6 || i === 7 || i === 8 ? (
              <Rotate bottom right>
                <div>
                  <img src={image} style={{ width: "80%" }} />
                </div>
              </Rotate>
            ) : (
              <Rotate>
                <div>
                  <img src={image} style={{ width: "80%" }} />
                </div>
              </Rotate>
            )
          )}
        </div>

        <div className="container">
          <h4 className="service-pro mt-5" style={{ color: "#7eab3a" }}>
            Freindly envoiroment Staffs
          </h4>
          <Slide right>
            <p className="mt-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Slide>
        </div>
      </div>
      <FooterMenus />
      <Footer />
    </React.Fragment>
  );
};

export default Team;
