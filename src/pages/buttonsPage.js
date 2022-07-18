import { initDetailsPage } from "./detailsPage.js";
import { initHomePage } from "./homePage.js";
import {
  createHomePageButton,
  createDetailButton,
  createPhoneListButton,
} from "../views/buttonsView.js";
import { INTER_FACE } from "../constants.js";
import { initPhonesListPage } from "./phonesListPage.js";

export const initDetailButton = (url, jsonData) => {
  const button = createDetailButton();
  button.addEventListener("click", () => {
    initDetailsPage(url, jsonData);
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

export const initPhoneListButton = (jsonData) => {
  const button = createPhoneListButton();
  button.addEventListener("click", () => {
    initPhonesListPage(jsonData);
  });
  return button;
};
