import { initDetailButton } from "./buttonsPage.js";
import { createCardElement } from "../views/cardView.js";

export const createPhoneCards = (jsonData) => {
  jsonData.data.phones.forEach(({ phone_name, detail: url, image }) => {
    const card = createCardElement(phone_name, image);
    const button = initDetailButton(url, jsonData);
    card.appendChild(button);
    document.querySelector(".phones-list").appendChild(card);
  });
};
