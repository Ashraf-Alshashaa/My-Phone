import { initDetailsPage } from "./detailsPage.js";
import { initHomePage } from "./homePage.js";
import {
  createHomePageButton,
  createDetailButton,
  createPhoneListButton,
  createNextImgButton,
  createPreviousImgButton,
} from "../views/buttonsView.js";
import { INTER_FACE } from "../constants.js";
import { initPhonesListPage } from "./phonesListPage.js";

export const initDetailButton = (details, brandName, jsonData, phone_name) => {
  const button = createDetailButton();
  button.addEventListener("click", () => {
    initDetailsPage(details, brandName, jsonData, phone_name);
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

export const initPhoneListButton = (jsonData, brandName) => {
  const button = createPhoneListButton();
  button.addEventListener("click", () => {
    initPhonesListPage(jsonData, brandName);
  });
  return button;
};

export const initNextImgButton = (container) => {
  const button = createNextImgButton();
  container.appendChild(button);
};

export const initPreviousImgButton = (container) => {
  const button = createPreviousImgButton();
  container.appendChild(button);
};
