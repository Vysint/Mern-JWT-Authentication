import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import "./Registerscreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const [register, { isLoading, isError }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        setError(err?.data?.message || err.error);
      }
    }
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
            id="confirmpassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {isLoading && <h3>Loading...</h3>}
        {isError && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}
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
