//Import
import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
//Login Page
const Login = () => {
  //REFS
  const userRef = useRef();
  const passRef = useRef();
  //CONTEXT
  const { dispatch, isFetching } = useContext(Context);
  //HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="enter your username..." ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password..."
          ref={passRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};
//EXPORT
export default Login;
