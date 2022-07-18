import {
  createSelectElement,
  createOptionElement,
} from "../views/selectBrandView.js";
import { getJsonData } from "../helpers/fetch.js";
import { initPhonesListPage } from "./phonesListPage.js";
import { renderError } from "../helpers/errorHandling.js";

export const initSelectElement = (jsonData, container) => {
  const select = createSelectElement();
  getBrandsFromAPI(jsonData, select);

  select.addEventListener("input", async () => {
    try {
      const jsonData = await getJsonData(select.value);
      initPhonesListPage(jsonData);
    } catch (error) {
      renderError(error);
    }
  });
  container.appendChild(select);
};

const getBrandsFromAPI = (jsonData, select) => {
  jsonData.data.forEach(({ brand_name, detail }) => {
    const option = createOptionElement(brand_name, detail);
    select.appendChild(option);
  });
};
