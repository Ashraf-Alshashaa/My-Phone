import { HOME_PAGE_BUTTON } from "../constants.js";

export const createHomePageButton = () => {
  const button = document.createElement("button");
  button.innerText = "Home";
  button.id = HOME_PAGE_BUTTON;
  return button;
};

export const createDetailButton = () => {
  const button = document.createElement("button");
  button.innerText = "more details";
  button.className = "details-button";
  return button;
};

export const createPhoneListButton = () => {
  const button = document.createElement("button");
  button.innerText = "back";
  button.className = "back-button";
  return button;
};
