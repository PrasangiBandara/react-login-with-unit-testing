import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form className="login-form">
        <h1>Hello!</h1>
        <h2>Login Here</h2>
        <input
          type="username"
          placeholder="UserName"
          value={username}
          onChange={(e) => setName.apply(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword.apply(e.target.value)}
        />
        <br />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
