import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import store from "../app/store";

test("username should be render", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const userNameEl = screen.getByPlaceholderText(/UserName/i);
  expect(userNameEl).toBeInTheDocument();
});
