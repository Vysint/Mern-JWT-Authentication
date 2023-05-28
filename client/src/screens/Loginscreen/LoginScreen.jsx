import { useState } from "react";
// import FormContainer from "../../components/formInput/FormContainer";
import { Link } from "react-router-dom";

import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="formInputs">
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div className="inputs">
          <label>Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="button-submit"
          style={{ background: "rgb(56, 118, 241)" }}
        >
          Sign In
        </button>
        <div className="register">
          <span>New Customer?</span>
          <Link to="/register" className="registerLink">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
