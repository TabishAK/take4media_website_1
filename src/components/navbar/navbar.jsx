import T4M_logo from "../../images/logos/T4M-Logo.png";
import "../../media_query/media_query.scss";
import "../navbar/navbar.scss";
import NavMenus from "./nav-menus";
import LoginRegMenus from "./loginRegMenu";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-5 col-xs-3">
          <Link to="/">
            <img src={T4M_logo} alt="take4media-logo" className="t4m-logo" />
          </Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <NavMenus color={props.color} />
        </div>
        <div className="col-lg-3 col-md-2 col-sm-3 col-xs-3">
          <LoginRegMenus color={props.color} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
