import { Link } from "react-router-dom";

const NavMenus = (props) => {
  return (
    <ul style={{ color: props.color }} className="nav-menus">
      <li className="nav-sub-menu">
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/explore">
          <a>Explore</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/careers">
          <a>Careers</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="#">
          <a>Pages</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/team">
          <a>Team</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/contact-us">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenus;
