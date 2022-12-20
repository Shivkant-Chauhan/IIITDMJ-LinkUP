import { React, useState } from "react";
import "./Login.scss";
import loginImg from "../../images/login-hero.png";
import loginInfo1 from "../../images/loginInfo1.png";
import loginInfo2 from "../../images/loginInfo2.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h2 className="login-heading">
        IIITDMJ Link<span className="orange">Up</span>
      </h2>
      <div className="login-hero">
        <img src={loginImg} alt="geeks" />
        <form>
          <div className="form-heading">
            <h3>
              Here you can <span className="orange">Login</span>
            </h3>
            <h4>let’s join us</h4>
          </div>
          <div className="form-input">
            <label>Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input
              type="Password"
              placeholder="password"
              name="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-btn">
            <button className="submit-btn">Login</button>
            <button className="submit-btn submit-btn-blue">
              <div className="icon-box">
                <FcGoogle className="icon" />
              </div>
              Sign-in with Google
            </button>
          </div>
          <div className="form-footer">
            <div className="signup-msg">
              <p>New to IIITDMJ LinkUp?</p>
              <Link to="/home">Sign Up</Link>
            </div>
            <Link to="/">forget password</Link>
          </div>
        </form>
      </div>
      <div className="login-info">
        <div className="login-info-child">
          <h4>
            Connect with people who can <span className="orange">help</span>
          </h4>
          <img src={loginInfo1} alt="connet with people" />
        </div>
        <div className="login-info-child">
          <h4>
            <span className="orange">Learn</span> from your{" "}
            <span className="orange">colleagues</span>
          </h4>
          <img src={loginInfo2} alt="learn from people" />
        </div>
      </div>
      <div className="login-footer">
        <h2>
          Join your colleagues, classmates and friends on{" "}
          <span className="orange"> IIITDMJ LinkUp</span>
        </h2>
        <button className="join-now-btn">Join Now</button>
      </div>
    </div>
  );
};

export default Login;
