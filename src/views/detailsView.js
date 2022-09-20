import {
  SPECIFIC_DATA_CONTAINER,
  SUMMARY_CONTAINER,
  DETAILS_CONTAINER,
} from "../constants.js";

export const detailsElement = () => {
  const element = document.createElement("div");
  element.id = DETAILS_CONTAINER;

  element.innerHTML = String.raw`

        <div id= "img-container">
        <div id="img-div"><img id="details-img"/></div>
        <div id="img-button-container"></div>
        </div>
        <ul id="${SUMMARY_CONTAINER}"></ul>
        <ul id="${SPECIFIC_DATA_CONTAINER}"></ul>
        `;

  return element;
};

export const summaryElement = (brandName, phone_name) => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
    <li>
      <h4>brand name</h4>
      <span>${brandName}</span>
    </li>
    <li>
      <h4>phone name</h4>
      <span>${phone_name}</span>
    </li>
    `;

  return element;
};
