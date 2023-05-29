import { useState } from "react";
// import FormContainer from "../../components/formInput/FormContainer";
import { Link } from "react-router-dom";

import "./Registerscreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="formInputs">
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className="inputs">
          <label>Name</label>
          <input
            type="text"
            id="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label>Confirm Password</label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="button-submit"
          style={{ background: "rgb(56, 118, 241)" }}
        >
          Sign Up
        </button>
        <div className="register">
          <span>Already have an account?</span>
          <Link to="/login" className="registerLink">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
