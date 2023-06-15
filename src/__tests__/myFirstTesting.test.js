import { fireEvent, render, screen } from "@testing-library/react";
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

test("password should be render", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const passwordEl = screen.getByPlaceholderText(/Password/i);
  expect(passwordEl).toBeInTheDocument();
});

test("button should be render", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

test('available 1 button in login', async () => {
  render(
      <Provider store={store}>
          <Login />
      </Provider>
  );
  const noOfButtons = await screen.findAllByRole('button');
  expect(noOfButtons).toHaveLength(1);
});

test("button should be disabled", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
  expect(buttonInputEl.disabled).toBe(true);
});

test("button should not be disabled when inputs are exist", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const buttonInputEl = screen.getByRole("button");
  const userNameEl = screen.getByPlaceholderText(/UserName/i);
  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  const testValue = "test";

  fireEvent.change(userNameEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonInputEl).not.toBeDisabled();
});

test("should change username value as user input", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const userNameEl = screen.getByPlaceholderText(/UserName/i);
  const testValue = "test";

  fireEvent.change(userNameEl, { target: { value: testValue } });
  expect(userNameEl.value).toBe(testValue);
});

test("should change password value as user input", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const passwordEl = screen.getByPlaceholderText(/Password/i);
  const testValue = "test";

  fireEvent.change(passwordEl, { target: { value: testValue } });
  expect(passwordEl.value).toBe(testValue);
});
