import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="card">
          <h1>MERN Authentication</h1>
          <p>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit to Manage state.
          </p>
          <div className="hero-items">
            <button>
              <Link to="/login">Sign In</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
