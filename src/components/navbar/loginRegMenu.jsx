import { FaUserCircle } from "react-icons/fa";
const LoginRegMenus = () => {
  return (
    <ul className="login-register">
      <span style={{ display: "flex" }}>
        <FaUserCircle
          style={{
            width: "22px",
            color: "#ca6825",
            marginTop: "4px",
            left: "96",
          }}
        />
        <li>Login </li>/<li>Register</li>
      </span>
    </ul>
  );
};

export default LoginRegMenus;
