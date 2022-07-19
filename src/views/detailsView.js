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

export const summaryElement = (title, paragraph) => {
  const element = document.createElement("li");
  element.innerHTML = String.raw`
    <h4>${title}</h4>
    <span>${paragraph}</span>
    `;

  return element;
};
