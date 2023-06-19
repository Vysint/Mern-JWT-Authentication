import { useState, useEffect } from "react";
// import FormContainer from "../../components/formInput/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";

import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, isError }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      setError(err?.data?.message || err.error);
    }
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
        {isLoading && <h2>Loading...</h2>}
        {isError && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}

        <button
          type="submit"
          className="button-submit"
          style={{ background: "rgb(56, 118, 241)" }}
        >
          Sign In
        </button>
        <div className="register">
          <span>New Customer?</span>
          <Link to="/register" className="registerLink">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
