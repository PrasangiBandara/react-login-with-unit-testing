import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { selectUser } from "./features/Slice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <Home /> : <Login data-testid="login-component" />}
    </div>
  );
};

export default App;
