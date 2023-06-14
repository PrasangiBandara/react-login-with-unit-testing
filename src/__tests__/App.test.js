import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../app/store";

test("renders login component in App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  const loginComponent = screen.getByTestId("login-component");
  expect(loginComponent).toBeInTheDocument();
});


// test("renders home component in App", () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
  
//   const homeComponent = screen.getByTestId("home-component");
//   expect(homeComponent).toBeInTheDocument();
// });
