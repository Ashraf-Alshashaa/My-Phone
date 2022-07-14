"use strict";

import { initHomePage } from "./pages/homePage.js";
import { initSearchBox } from "./components/searchBox.js";

const loadApp = () => {
  initHomePage();
  initSearchBox();
};

window.addEventListener("load", () => {
  loadApp();
});
