import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { clearCredentials } from "../../slices/authSlice";
import Vincent from "../../assets/Langat.jpeg";

import "./Header.css";
import { useState } from "react";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
          {userInfo ? (
            <div className="menu-container">
              <div className="menu">
                <span className="link item">{userInfo.name}</span>
                <img src={Vincent} onClick={() => setOpen(!open)} />
              </div>
              <div className={`menu dropdown ${open ? "active" : "inactive"}`}>
                <li>
                  <Link to="/profile" className="userLink">
                    <FaUserAlt />
                    <span onClick={() => setOpen(!open)}>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="userLink"
                    onClick={logoutHandler}
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </Link>
                </li>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
