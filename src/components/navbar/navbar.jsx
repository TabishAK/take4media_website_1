import T4M_logo from "../../images/logos/T4M-Logo.png";
import "../../media_query/media_query.scss";
import "../navbar/navbar.scss";
import NavMenus from "./nav-menus";
import LoginRegMenus from "./loginRegMenu";
const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-5 col-xs-3">
          <img src={T4M_logo} alt="take4media-logo" className="t4m-logo" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <NavMenus />
        </div>
        <div className="col-lg-3 col-md-2 col-sm-3 col-xs-3">
          <LoginRegMenus />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
