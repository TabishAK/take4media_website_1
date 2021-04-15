import logo1 from "../../images/logos_what_weDo/1.png";
import logo2 from "../../images/logos_what_weDo/2.png";
import logo3 from "../../images/logos_what_weDo/3.png";
import logo4 from "../../images/logos_what_weDo/4.png";
import logo5 from "../../images/logos_what_weDo/5.png";
import Bounce from "react-reveal/Bounce";

const LogoPanel = () => {
  return (
    <div className="logos_panel mt-5">
      <Bounce left>
        <div>
          <img
            src={logo1}
            style={{ width: "90%", cursor: "pointer" }}
            alt=""
          ></img>
        </div>
      </Bounce>
      <Bounce top>
        <div>
          <img
            src={logo2}
            style={{ width: "90%", cursor: "pointer" }}
            alt=""
          ></img>
        </div>
      </Bounce>
      <Bounce>
        <div>
          <img
            src={logo3}
            style={{ width: "90%", cursor: "pointer" }}
            alt=""
          ></img>
        </div>
      </Bounce>
      <Bounce bottom>
        <div>
          <img
            src={logo4}
            style={{ width: "90%", cursor: "pointer" }}
            alt=""
          ></img>
        </div>
      </Bounce>
      <Bounce right>
        <div>
          <img
            src={logo5}
            style={{ width: "90%", cursor: "pointer" }}
            alt=""
          ></img>
        </div>
      </Bounce>
    </div>
  );
};

export default LogoPanel;
