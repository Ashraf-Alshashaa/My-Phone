import { initDetailButton } from "./buttonsPage.js";
import { createCardElement } from "../views/cardView.js";

export const createPhoneCards = (jsonData, brandName) => {
  jsonData.data.forEach(({ list_phones, brand_name }) => {
    if (brand_name === brandName) {
      list_phones.forEach(({ phone_name, image, details }) => {
        const card = createCardElement(phone_name, image);
        const button = initDetailButton(
          details,
          brandName,
          jsonData,
          phone_name
        );
        card.appendChild(button);
        document.querySelector(".phones-list").appendChild(card);
      });
    }
  });
};
