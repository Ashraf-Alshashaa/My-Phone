import { initDetailsPage } from "./detailsPage.js";
import { initHomePage } from "./homePage.js";
import {
  createHomePageButton,
  createDetailButton,
} from "../views/buttonsView.js";
import { INTER_FACE } from "../constants.js";

export const initDetailButton = (url) => {
  const button = createDetailButton();
  button.addEventListener("click", () => {
    initDetailsPage(url);
  });
  return button;
};

export const initHomePageButton = () => {
  const button = createHomePageButton();
  button.addEventListener("click", () => {
    document.getElementById(INTER_FACE).innerHTML = "";
    initHomePage();
  });
  return button;
};
