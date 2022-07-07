import { 
    createAppleElement, 
    createCard
 } from '../views/applesView.js';
import { 
    APPLE_PHONES_CONTAINER,
    INTER_FACE, 
    APPLE_API_URL
 } from '../constants.js';
import { fetchAppelPhonesData } from '../data.js'



export const initApplePage = () => {
    const container = document.getElementById(INTER_FACE)
    container.innerHTML = ``;
    const page = createAppleElement()
    container.appendChild(page)
    createPhoneCard()
}

const createPhoneCard = async () => {
    const phonesArray = await fetchAppelPhonesData(APPLE_API_URL);
    const card = phonesArray.data.phones.forEach(({phone_name, detail, image}) => {

        const card = createCard ( phone_name, image)
        createDetailButton(detail, card)

        const container = document.getElementById(APPLE_PHONES_CONTAINER)
        container.appendChild(card)
    });
}

const createDetailButton = (detail, card) => {
    const button = document.createElement('button');
    button.innerText = "more details";
    const apiDetails = detail
    button.setAttribute('name', `${apiDetails}`)
    card.appendChild(button)
}






