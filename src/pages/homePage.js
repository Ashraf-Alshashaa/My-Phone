import { createHomeElement } from "../views/homeView.js";
import { initPhonesListPage } from "./phonesListPage.js";
import { getJsonData } from "../helpers/fetch.js";
import { BRANDS_API_URL, INTER_FACE } from "../constants.js";
import { initSelectElement } from "./selectBrandPage.js";
import { renderError } from "../views/errorHandling.js";
import { createSelectElement } from "../views/selectBrandView.js";

export const initHomePage = () => {
  const container = document.getElementById(INTER_FACE);

  const main = createHomeElement();
  container.appendChild(main);

  const appleElement = document.getElementById("apple");
  addEventListenerFetchData(appleElement, initPhonesListPage);

  const samsungElement = document.getElementById("samsung");
  addEventListenerFetchData(samsungElement, initPhonesListPage);

  const mainText = document.querySelector(".main-text");

  const button = document.getElementById("more-brands-button");
  button.addEventListener("click", async () => {
    if (!document.getElementById("select")) {
      const select = createSelectElement();
      mainText.appendChild(select);
      try {
        const jsonData = await getJsonData();
        initSelectElement(jsonData, select);
      } catch (error) {
        renderError(error);
      }
    }
  });
};

const addEventListenerFetchData = (element, callback) => {
  element.addEventListener("click", async (e) => {
    const brandName = e.target.parentElement.id;
    try {
      const jsonData = await getJsonData();
      await callback(jsonData, brandName);
    } catch (error) {
      renderError(error);
      console.log(error);
    }
  });
};
