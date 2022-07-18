import { createHomeElement } from "../views/homeView.js";
import { initPhonesListPage } from "./phonesListPage.js";
import { getJsonData } from "../helpers/fetch.js";
import {
  SAMSUNG_API_URL,
  APPLE_API_URL,
  BRANDS_API_URL,
  INTER_FACE,
} from "../constants.js";
import { initSelectElement } from "./selectBrandPage.js";
import { renderError } from "../helpers/errorHandling.js";

export const initHomePage = () => {
  const container = document.getElementById(INTER_FACE);

  const main = createHomeElement();
  container.appendChild(main);

  const appleElement = document.getElementById("apple");
  addEventListenerFetchData(appleElement, APPLE_API_URL, initPhonesListPage);

  const samsungElement = document.getElementById("samsung");
  addEventListenerFetchData(
    samsungElement,
    SAMSUNG_API_URL,
    initPhonesListPage
  );

  const mainText = document.querySelector(".main-text");

  const button = document.getElementById("more-brands-button");
  button.addEventListener("click", async () => {
    if (!document.getElementById("select")) {
      try {
        const jsonData = await getJsonData(BRANDS_API_URL);
        initSelectElement(jsonData, mainText);
      } catch (error) {
        renderError(error);
      }
    }
  });
};

const addEventListenerFetchData = (element, url, callback) => {
  element.addEventListener("click", async (e) => {
    try {
      const jsonData = await getJsonData(url);
      callback(jsonData);
    } catch (error) {
      renderError(error);
    }
  });
};
