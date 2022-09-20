import { detailsElement, summaryElement } from "../views/detailsView.js";
import {
  INTER_FACE,
  SPECIFIC_DATA_CONTAINER,
  SUMMARY_CONTAINER,
  DETAILS_IMG,
} from "../constants.js";
import {
  initPhoneListButton,
  initNextImgButton,
  initPreviousImgButton,
} from "./buttonsPage.js";

export const initDetailsPage = async (
  details,
  brandName,
  jsonData,
  phone_name
) => {
  const container = document.getElementById(INTER_FACE);
  container.innerHTML = "";

  const phoneListPageButton = initPhoneListButton(jsonData, brandName);
  container.appendChild(phoneListPageButton);

  const page = detailsElement();
  container.appendChild(page);

  const imgContainer = document.getElementById("img-container");
  const imgButtonContainer = document.getElementById("img-button-container");
  imgContainer.appendChild(imgButtonContainer);

  initPreviousImgButton(imgButtonContainer);
  initNextImgButton(imgButtonContainer);

  summary(brandName, phone_name);
  specificationDetails(details);
  getImgSrc(details, 0);

  let index = 0;
  const imgArrayLength = details.image.length - 1;

  imgButtonContainer.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".next-img-button")) {
      if (index < imgArrayLength) {
        index++;
        getImgSrc(details, index);
      } else {
        index = 0;
        getImgSrc(details, index);
      }
    }
    if (e.target === document.querySelector(".previous-img-button")) {
      if (index !== 0) {
        index -= 1;
        getImgSrc(details, index);
      } else {
        index = imgArrayLength;
        getImgSrc(details, index);
      }
    }
  });
};

const getImgSrc = (details, index) => {
  const img = document.getElementById(DETAILS_IMG);
  const imgArray = details.image;
  img.src = imgArray[index];
};

const summary = (brandName, phone_name) => {
  const summaryContainer = document.getElementById(SUMMARY_CONTAINER);
  const element = summaryElement(brandName, phone_name);
  summaryContainer.appendChild(element);
};

const specificationDetails = (details) => {
  const container = document.getElementById(SPECIFIC_DATA_CONTAINER);
  details.specifications.space.forEach(({ key, value }) => {
    const li = document.createElement("li");
    li.innerHTML = `<h4>${key}</h4> <span>${value}</span>`;
    container.appendChild(li);
  });
};
