import React from "react";
import "./Login.scss";
import loginImg from "../../images/login-hero.png";

const Login = () => {
  return (
    <div className="login">
      <h2 className="login-heading">
        IIITDMJ Link<span className="orange">Up</span>
      </h2>
      <div className="login-hero">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
