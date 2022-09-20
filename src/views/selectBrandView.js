import { SELECT_ELEMENT } from "../constants.js";

export const createSelectElement = () => {
  const select = document.createElement("select");
  select.id = SELECT_ELEMENT;
  const firstOption = document.createElement("option");
  firstOption.innerHTML = "select brand";
  select.appendChild(firstOption);
  return select;
};

export const createOptionElement = (brand_name) => {
  const option = document.createElement("option");
  option.innerText = brand_name;
  option.value = brand_name;
  return option;
};
