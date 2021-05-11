
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Components/fire";
import '../Components/Form/Login.css'



const Login = (props) => {
  const history = useHistory();
  const [userEmail, setuserEmail] = useState(" ");
  const [userPassword, setuserPassword] = useState("");
  const [error, setError] = useState("");
  const logInUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        setuserEmail("");
        setuserPassword("");
        setError("");
        history.push("/Home");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div className="login_container">
        <h1>Sajilo-Parking</h1>
        <div className="login_form">
          <h2 style={{marginTop:"20px"}}> Login</h2>
          <form onSubmit={Login}>
            <div className="mb-3">
              <label htmlFor="email" >
                Email
              </label>
              <br/>
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => {
                  setuserEmail(e.target.value);
                }}
                value={userEmail}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" >
                Password
              </label>
              <br/>
              <input
                type="password"
                className="form-control"
                required
                onChange={(e) => {
                  setuserPassword(e.target.value);
                }}
                value={userPassword}
              />
            </div>
            <button onClick={logInUser} className="btn-login">
              Log In
            </button>
          </form>
          <div className="error">
            {error && <div className="error-msg">{error}</div>}
            <span className="register_text">
              Don't have an account?
              <Link to="SignUp" style={{color:"yellow", textDecoration:'none'}}> Register Here!</Link>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
