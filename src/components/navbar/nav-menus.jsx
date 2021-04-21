import { Link } from "react-router-dom";

const NavMenus = (props) => {
  return (
    <ul className="nav-menus">
      <li className="nav-sub-menu">
        <Link to="/">
          <a style={{ color: props.color }}>Home</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/explore">
          <a style={{ color: props.color }}>Explore</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/careers">
          <a style={{ color: props.color }}>Careers</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="#">
          <a style={{ color: props.color }}>Pages</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/team">
          <a style={{ color: props.color }}>Team</a>
        </Link>
      </li>
      <li className="nav-sub-menu">
        <Link to="/contact-us">
          <a style={{ color: props.color }}>Contact Us</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenus;
