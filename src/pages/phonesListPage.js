import { createPhonesCard } from "./cardPage.js";
import { INTER_FACE } from "../constants.js";
import { createPhonesListElement } from "../views/phonesListView.js";
import { initHomePageButton } from "./buttonsPage.js";

export const initPhonesListPage = (jsonData) => {
  const container = document.getElementById(INTER_FACE);
  container.innerHTML = ``;
  const homePageButton = initHomePageButton();
  container.appendChild(homePageButton);
  const page = createPhonesListElement(jsonData);
  container.appendChild(page);
  createPhonesCard(jsonData);
};
