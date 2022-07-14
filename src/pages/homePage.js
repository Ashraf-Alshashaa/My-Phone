import {
  welcomeElement,
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

export const initHomePage = () => {
  const container = document.getElementById(INTER_FACE);
  const welcomeView = welcomeElement();

  const applePage = applePageElement();
  applePage.addEventListener("click", async (e) => {
    const jsonData = await getJsonData(APPLE_API_URL);
    initPhonesListPage(jsonData);
  });
  welcomeView.appendChild(applePage);

  const samsungPage = samsungPageElement();
  samsungPage.addEventListener("click", async (e) => {
    const jsonData = await getJsonData(SAMSUNG_API_URL);
    initPhonesListPage(jsonData);
  });
  welcomeView.appendChild(samsungPage);

  const button = createBranSelectorButton();
  button.addEventListener("click", () => {
    if (!document.getElementById(SELECT_CONTAINER)) {
      const brandSelector = initSelectElement(BRANDS_API_URL);
      welcomeView.appendChild(brandSelector);
    }
  });
  welcomeView.appendChild(button);
  container.appendChild(welcomeView);
};
