import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the table component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
