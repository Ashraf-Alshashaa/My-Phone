import { createDetailButton } from './buttonsPage.js'
import { createCardElement } from '../views/cardView.js'

export const createPhonesCard = (jsonData) => {
        jsonData.data.phones.forEach(({phone_name, detail, image}) => {
        const card = createCardElement( phone_name, image);
        const button = createDetailButton(detail);
        card.appendChild(button);
        document.querySelector(".phones-list").appendChild(card);
    
    });
}