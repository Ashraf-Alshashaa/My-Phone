import {
  createHomeElement,
  applePageElement,
  samsungPageElement,
  createBranSelectorButton,
} from "../views/homeView.js";
import { initPhonesListPage } from "./phonesListPage.js";
import { getJsonData } from "../helpers/fetch.js";
import {
  SAMSUNG_API_URL,
  APPLE_API_URL,
  BRANDS_API_URL,
  INTER_FACE,
  SELECT_CONTAINER,
} from "../constants.js";
import { initSelectElement } from "./selectBrandPage.js";
import { renderError } from "../helpers/errorHandling.js";

export const initHomePage = () => {
  const container = document.getElementById(INTER_FACE);
  const homePageMain = createHomeElement();

  const applePage = applePageElement();
  addEventListenerFetchData(applePage, APPLE_API_URL, initPhonesListPage);
  homePageMain.appendChild(applePage);

  const samsungPage = samsungPageElement();
  addEventListenerFetchData(samsungPage, SAMSUNG_API_URL, initPhonesListPage);
  homePageMain.appendChild(samsungPage);

  const button = createBranSelectorButton();
  button.addEventListener("click", async () => {
    if (!document.getElementById(SELECT_CONTAINER)) {
      try {
        const jsonData = await getJsonData(BRANDS_API_URL);
        const brandSelector = initSelectElement(jsonData);
        homePageMain.appendChild(brandSelector);
      } catch (error) {
        renderError(error);
      }
    }
  });
  homePageMain.appendChild(button);
  container.appendChild(homePageMain);
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
