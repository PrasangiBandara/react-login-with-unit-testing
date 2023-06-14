import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/Slice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !password) {
      setErrorMessage("Please enter username and password");
    } else if (!username) {
      setErrorMessage("Please enter the username");
    } else if (!password) {
      setErrorMessage("Please enter the password");
    } else {
      setErrorMessage("");

      dispatch(
        login({
          username: username,
          password: password,
          loggedIn: true,
        })
      );
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Hello!</h1>
        <h2>Login Here</h2>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          disabled={!username || !password}
          type="submit"
          className="button"
        >
          Login
        </button>
        {!username && !password && (
          <p className="error-message">Enter username and password</p>
        )}
        {!username && password && (
          <p className="error-message">Enter username</p>
        )}
        {username && !password && (
          <p className="error-message">Enter password</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
