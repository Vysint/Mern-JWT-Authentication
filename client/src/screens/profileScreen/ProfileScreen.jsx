import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const [updateProfile, { isLoading, isError, isSuccess }] =
    useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        setSuccess("Profile Updated");
      } catch (err) {
        setError(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="formInputs">
      <h1>Update Profile</h1>
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
        {isSuccess && (
          <p style={{ color: "red", marginBottom: "10px" }}>{success}</p>
        )}
        <button
          type="submit"
          className="button-submit"
          style={{ background: "rgb(56, 118, 241)" }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileScreen;
