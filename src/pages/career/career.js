import Footer from "../../components/footer/footer";
import FooterMenus from "../../components/footerMenus/footerMenus";
import Navbar from "./../../components/navbar/navbar";
import Logo from "../../images/logos/T4M-Logo.png";
import Line from "../../images/vectors/Line-2.png";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import "./career.scss";
import HiringCardPanel from "../../components/hiringCardPanel/hiringCardPanel";

const Career = () => {
  return (
    <div className="career">
      <div className="header-background-career same">
        <Navbar />
      </div>

      <div className="text-and-heading">
        <Roll right>
          <div className="career-at-take4media">
            <h2> Career at </h2>
            <img
              className="ml-1"
              style={{ height: "44px" }}
              src={Logo}
              alt="company-logo"
            />
          </div>
        </Roll>

        <img
          src={Line}
          alt="theme-vector"
          style={{
            width: "45%",
            height: "12px",
            marginTop: "-16px",
          }}
        />
        <h6 className="service-pro mt-5" style={{ color: "#7eab3a" }}>
          We Are Open For Those Wo Deliver Their Best
        </h6>

        <Bounce right>
          <p className="mt-3">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </Bounce>
        <h6 className="service-provider mt-5" style={{ color: "#7eab3a" }}>
          Take4Media Is Service Provider Company Organised In 2016
        </h6>
        <Bounce right>
          <p className="mt-3">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </Bounce>
      </div>

      <h2 className="hiring mt-5"> We Are Now Hiring </h2>

      <HiringCardPanel />
      <Flip>
        {" "}
        <div className="send-resume">Send Resume At</div>
      </Flip>
      <h6
        style={{
          fontWeight: 300,
          marginTop: "6px",
          fontSize: "20px",
        }}
      >
        Career@take4media.com
      </h6>
      <FooterMenus />
      <Footer />
    </div>
  );
};

export default Career;
