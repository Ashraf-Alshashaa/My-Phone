"use strict";

import { initWelcomePage } from "./pages/homePage.js";
import { initSearchBox } from "./components/searchBox.js";

const loadApp = () => {
  initWelcomePage();
  initSearchBox();
};

window.addEventListener("load", () => {
  loadApp();
});
