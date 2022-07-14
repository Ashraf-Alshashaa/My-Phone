import {
  createSelectContainerElement,
  createSelectElement,
  createOptionElement,
} from "../views/selectBrandView.js";
import { getJsonData } from "../helpers/fetch.js";
import { initPhonesListPage } from "./phonesListPage.js";

export const initSelectElement = (data) => {
  const container = createSelectContainerElement();

  const select = createSelectElement();
  getBrandsFromAPI(data, select);

  select.addEventListener("input", async () => {
    const jsonData = await getJsonData(select.value);
    initPhonesListPage(jsonData);
  });
  container.appendChild(select);
  return container;
};

const getBrandsFromAPI = async (Data, select) => {
  const brandsData = await getJsonData(Data);
  brandsData.data.forEach(({ brand_name, detail }) => {
    const option = createOptionElement(brand_name, detail);
    select.appendChild(option);
  });
};
