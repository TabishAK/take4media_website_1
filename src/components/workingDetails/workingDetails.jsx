import phone from "../../images/logos/phone-logo.png";
import clock from "../../images/logos/clock-logo.png";
import location from "../../images/logos/location-logo.png";
import Jump from "react-reveal/Jump";
import Shake from "react-reveal/Shake";
import Tada from "react-reveal/Tada";
import "./workingDetails.scss";

const WorkingDetails = () => {
  return (
    <div className="working-details mt-5">
      <div className="location">
        <Jump>
          <img src={location} alt="location" />
        </Jump>
        <h4 className="theme-heading">Locate us</h4>
        <h6 style={{ width: "237px" }} className="theme-heading">
          29C Lane Number 10, Bukhari Commercial Area Phase 6 Defence Housing
          Authority, Karachi.
        </h6>
      </div>
      <div className="phone">
        <Shake>
          <img src={phone} alt="phone" />{" "}
        </Shake>
        <h4 className="theme-heading">Let's Have a Call</h4>
        <h6 className="theme-heading">02134584414</h6>
      </div>
      <div className="clock">
        <Tada>
          <img style={{ width: "65%" }} src={clock} alt="clock" />
        </Tada>
        <h4 className="theme-heading">We Are Open From</h4>
        <h6 className="theme-heading">10 AM to 06 AM</h6>
      </div>
    </div>
  );
};

export default WorkingDetails;
