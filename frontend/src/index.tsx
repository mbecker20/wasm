/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

import init from "./pkg";

init().then(() =>
  render(() => <App />, document.getElementById("root") as HTMLElement)
);
