//IMPORT
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//REGISTER PAGE
function Register() {
  //STATE------------------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  //HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
        {error && <span>Something Went Wrong!</span>}
      </form>
    </div>
  );
}
//EXPORT
export default Register;
