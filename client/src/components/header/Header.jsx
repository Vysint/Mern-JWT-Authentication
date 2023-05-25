import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">MERN APP</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="navItems">
          <ul className="menu">
            <li>
              <Link to="/login" className="link item">
                <FaSignInAlt />
                <span>Sign In</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="link item">
                <FaSignOutAlt />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
