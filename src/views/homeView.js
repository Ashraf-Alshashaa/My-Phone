import { HOME_MAIN_CONTAINER } from "../constants.js";

export const createHomeElement = () => {
  const container = document.createElement("main");
  container.id = HOME_MAIN_CONTAINER;
  container.innerHTML = String.raw`
    <h1>Welcome</h1>
  `;
  return container;
};

export const applePageElement = () => {
  const element = document.createElement("div");
  element.id = "apple";
  element.innerHTML = String.raw`
  <h1>Apple</h1>
  `;
  return element;
};

export const samsungPageElement = () => {
  const element = document.createElement("div");
  element.id = "samsung";
  element.innerHTML = String.raw`
  <h1>Samsung</h1>
  `;
  return element;
};

export const createBranSelectorButton = () => {
  const button = document.createElement("button");
  button.textContent = "more brands";
  button.id = "more-brands-button";
  return button;
};
