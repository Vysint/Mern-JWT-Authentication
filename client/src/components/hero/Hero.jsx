import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Hero.css";
const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="hero-container">
      <div className="card">
        <h2>MERN Authentication</h2>
        <p>
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit to Manage state.
        </p>
        <div className="hero-items">
          <button>
            <Link to="/login" className="link one">
              Sign In
            </Link>
          </button>
          <button>
            <Link to="/register" className="link two">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
