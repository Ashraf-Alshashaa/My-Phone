import { SELECT_ELEMENT } from "../constants.js";

export const createSelectElement = () => {
  const select = document.createElement("select");
  select.id = SELECT_ELEMENT;
  const firstOption = document.createElement("option");
  firstOption.innerHTML = "select brand";
  select.appendChild(firstOption);
  return select;
};

export const createOptionElement = (name, url) => {
  const option = document.createElement("option");
  option.innerText = name;
  option.value = url;
  return option;
};
