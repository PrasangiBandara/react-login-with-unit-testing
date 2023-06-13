import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="login-form">
        <h1>Hello!</h1>
        <h2>Login Here</h2>
        <input type="username" placeholder="UserName" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
