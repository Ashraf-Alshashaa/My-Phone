import { SELECT_CONTAINER } from "../constants.js";

export const createSelectElement = () => {
  const select = document.createElement("select");
  select.id = "select";
  const firstOption = document.createElement("option");
  firstOption.innerHTML = "select brand";
  select.appendChild(firstOption);
  return select;
};

export const createSelectContainerElement = () => {
  const element = document.createElement("div");
  element.id = SELECT_CONTAINER;
  return element;
};

export const createOptionElement = (name, url) => {
  const option = document.createElement("option");
  option.innerText = name;
  option.value = url;
  return option;
};
