// To get your local host running because of the TypeError showing up in your browser:
// npm install react-scripts@3.4.0
// To get rid of the "ReferenceError: MutationObserver is not defined" showing up in your terminal when you try to run a test:
// yarn add mutationobserver-shim --dev
// Then add
// import 'mutationobserver-shim';
import 'mutationobserver-shim';
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});


