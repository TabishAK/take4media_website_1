import logo1 from "../../images/logos_what_weDo/1.png";
import logo2 from "../../images/logos_what_weDo/2.png";
import logo3 from "../../images/logos_what_weDo/3.png";
import logo4 from "../../images/logos_what_weDo/4.png";
import logo5 from "../../images/logos_what_weDo/5.png";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

const LogoPanel = () => {
  return (
    <div className="logos_panel mt-5">
      <Bounce left>
        <div>
          <Link to="/artDesign">
            <img
              src={logo1}
              style={{ width: "90%", cursor: "pointer" }}
              alt=""
            />
          </Link>
        </div>
      </Bounce>
      <Bounce top>
        <div>
          <Link to="/artVideoFrame">
            <img
              src={logo2}
              style={{ width: "90%", cursor: "pointer" }}
              alt=""
            />
          </Link>
        </div>
      </Bounce>
      <Bounce>
        <div>
          <Link to="/socialMedia">
            <img
              src={logo3}
              style={{ width: "90%", cursor: "pointer" }}
              alt=""
            />
          </Link>
        </div>
      </Bounce>
      <Bounce bottom>
        <div>
          <Link to="/photography">
            <img
              src={logo4}
              style={{ width: "90%", cursor: "pointer" }}
              alt=""
            />
          </Link>
        </div>
      </Bounce>
      <Bounce right>
        <div>
          <Link to="/webSolutions">
            <img
              src={logo5}
              style={{ width: "90%", cursor: "pointer" }}
              alt=""
            />
          </Link>
        </div>
      </Bounce>
    </div>
  );
};

export default LogoPanel;
