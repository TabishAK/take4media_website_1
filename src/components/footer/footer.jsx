import "./footer.scss";
import Roll from "react-reveal/Roll";
import t4m_logo from "../../images/logos/T4M-Logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

import { FiTwitter } from "react-icons/fi";

import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row auto_margin">
          <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12 ">
            <Roll left>
              <img src={t4m_logo} alt="company-logo" />
            </Roll>
            <p>
              We are a team of specialists that work on a round-the-clock-basis
              to ensure your business finds the success it deserves. Experience
              the workflow and end-results you have never experienced before!
            </p>

            <h6>info@take4media.com</h6>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
            <div className="hell">
              <h5>Newsletter Subscription</h5>
              <p className="mt-2">
                Sign Up For Free Newsletter & Get More Of Delivered To You
              </p>

              <input placeholder="  Email" type="text" name="fname" value="" />
              <button className="btn-sm">Submit</button>
            </div>
            <div className="icons mt-2 ml-5">
              <FiFacebook
                style={{
                  padding: "3px",
                  height: "30px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  width: "30px",
                  marginRight: "10px",
                }}
              />
              <FiInstagram
                style={{
                  padding: "3px",
                  height: "30px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  width: "30px",
                  marginRight: "10px",
                }}
              />
              <FiTwitter
                style={{
                  padding: "3px",
                  height: "30px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  width: "30px",
                  marginRight: "10px",
                }}
              />
              <FiYoutube
                style={{
                  padding: "3px",
                  height: "30px",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "5px",
                  width: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
