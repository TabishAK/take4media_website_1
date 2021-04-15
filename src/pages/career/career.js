import Footer from "../../components/footer/footer";
import FooterMenus from "../../components/footerMenus/footerMenus";
import HiringCard from "../../components/hiringCard/hiringCard";
import Navbar from "./../../components/navbar/navbar";
import Logo from "../../images/logos/T4M-Logo.png";
import "./career.scss";

const Career = () => {
  return (
    <div className="career">
      <div className="header-background-career same">
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <HiringCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <HiringCard />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <HiringCard />
          </div>
        </div>
      </div>

      <div className="career-at-take4media">
        <h2> Career at </h2>
        <img
          className="ml-2"
          style={{ height: "44px" }}
          src={Logo}
          alt="company-logo"
        />
      </div>

      <FooterMenus />
      <Footer />
    </div>
  );
};

export default Career;
