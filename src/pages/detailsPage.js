import { detailsElement, summaryElement } from "../views/detailsView.js";
import {
  INTER_FACE,
  SPECIFIC_DATA_CONTAINER,
  SUMMARY_CONTAINER,
  DETAILS_IMG,
} from "../constants.js";
import { getJsonData } from "../helpers/fetch.js";
import {
  initPhoneListButton,
  initHomePageButton,
  initNextImgButton,
  initPrevuesImgButton,
} from "./buttonsPage.js";
import { renderError } from "../helpers/errorHandling.js";

export const initDetailsPage = async (url, currentPageJsonData) => {
  const container = document.getElementById(INTER_FACE);
  container.innerHTML = "";

  if (currentPageJsonData) {
    const phoneListPageButton = initPhoneListButton(currentPageJsonData);
    container.appendChild(phoneListPageButton);
  } else {
    const homePageButton = initHomePageButton();
    container.appendChild(homePageButton);
  }

  const page = detailsElement();
  container.appendChild(page);

  const imgContainer = document.getElementById("img-container");
  const imgButtonContainer = document.getElementById("img-button-container");
  imgContainer.appendChild(imgButtonContainer);

  initPrevuesImgButton(imgButtonContainer);
  initNextImgButton(imgButtonContainer);

  try {
    const jsonData = await getJsonData(url);
    summary(jsonData);
    specificationDetails(jsonData);
    getImgSrc(jsonData, 0);

    let index = 0;
    const imgArrayLength = jsonData.data.phone_images.length - 1;

    imgButtonContainer.addEventListener("click", (e) => {
      if (e.target === document.querySelector(".next-img-button")) {
        if (index < imgArrayLength) {
          index++;
          getImgSrc(jsonData, index);
        } else {
          index = 0;
          getImgSrc(jsonData, index);
        }
      }
      if (e.target === document.querySelector(".prevues-img-button")) {
        if (index !== 0) {
          index -= 1;
          getImgSrc(jsonData, index);
        } else {
          index = imgArrayLength;
          getImgSrc(jsonData, index);
        }
      }
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
