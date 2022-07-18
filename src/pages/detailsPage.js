import { detailsElement, summaryElement } from "../views/detailsView.js";
import {
  INTER_FACE,
  SPECIFIC_DATA_CONTAINER,
  SUMMARY_CONTAINER,
  DETAILS_IMG,
} from "../constants.js";
import { getJsonData } from "../helpers/fetch.js";
import { initHomePageButton } from "./buttonsPage.js";
import { renderError } from "../helpers/errorHandling.js";

export const initDetailsPage = async (url) => {
  const container = document.getElementById(INTER_FACE);
  container.innerHTML = "";
  const homePageButton = initHomePageButton();
  container.appendChild(homePageButton);
  const page = detailsElement();
  container.appendChild(page);

  const slider = document.getElementById("slider");
  try {
    const jsonData = await getJsonData(url);
    summary(jsonData);
    specificationDetails(jsonData);
    getImgSrc(jsonData, 0);

    let index = 1;
    slider.addEventListener("click", () => {
      getImgSrc(jsonData, index);
      if (index < jsonData.data.phone_images.length - 1) {
        index++;
        return;
      }
      index = 0;
    });
  } catch (error) {
    renderError(error);
  }
};

const getImgSrc = (jsonData, index) => {
  const img = document.getElementById(DETAILS_IMG);
  const imgArray = jsonData.data.phone_images;
  img.src = imgArray[index];
};

const summary = (jsonData) => {
  const summaryContainer = document.getElementById(SUMMARY_CONTAINER);
  const summaryObj = jsonData.data;

  let key;
  for (key in summaryObj) {
    if (
      (key !== "phone_images") &
      (key !== "specifications") &
      (key !== "thumbnail")
    ) {
      const title = key.replace(/_/g, " ");
      const paragraph = summaryObj[key];
      const element = summaryElement(title, paragraph);
      summaryContainer.appendChild(element);
    }
  }
};

const specificationDetails = (jsonData) => {
  const container = document.getElementById(SPECIFIC_DATA_CONTAINER);
  jsonData.data.specifications.forEach((specification) => {
    const containerTitle = document.createElement("h2");
    containerTitle.innerHTML = specification.title;
    container.appendChild(containerTitle);
    const blockContainer = document.createElement("div");
    container.appendChild(blockContainer);

    specification.specs.forEach(({ key, val }) => {
      const li = document.createElement("li");
      li.innerHTML = `<h4>${key}</h4> <span>${val}</span>`;
      blockContainer.appendChild(li);
    });
  });
};

const sliderShow = (img, array) => {};
