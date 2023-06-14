import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/Slice";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Hello!</h1>
        <h2>Login Here</h2>
        <input
          type="username"
          placeholder="UserName"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button disabled={!username || !password} type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
