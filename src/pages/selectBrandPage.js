import { createOptionElement } from "../views/selectBrandView.js";
import { initPhonesListPage } from "./phonesListPage.js";

export const initSelectElement = (jsonData, select) => {
  getBrandsFromAPI(jsonData, select);
};

const getBrandsFromAPI = (jsonData, select) => {
  console.log(jsonData);
  jsonData.data.forEach(({ brand_name }) => {
    const option = createOptionElement(brand_name);
    select.appendChild(option);
    select.addEventListener("input", async () => {
      initPhonesListPage(jsonData, brand_name);
    });
  });
};
