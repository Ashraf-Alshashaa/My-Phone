import { createAppleElement } from '../views/applesView.js';
import { 
    APPLE_PHONES_CONTAINER,
    INTER_FACE
 } from '../constants.js';


export const initApplePage = () => {
    const container = document.getElementById(INTER_FACE)
    container.innerHTML = ``;
    
    const page = createAppleElement()
    container.appendChild(page)

    const ul = document.getElementById(APPLE_PHONES_CONTAINER)

    createPhoneCard()
}

const fetchAppelPhonesData = async () => {
    const getApiData = await fetch (`https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2`)
    const getJsonData =  apiData => apiData.json();
    const dataJson = await getJsonData(getApiData);
    console.log(dataJson)
    const phonesArray = dataJson.data.phones
    console.log(phonesArray)
    return phonesArray;
}

const createPhoneCard = async () => {
    const phonesArray = await fetchAppelPhonesData()
    phonesArray.forEach(({phone_name, detail, image}) => {
        const container = document.getElementById(APPLE_PHONES_CONTAINER)
        const title = document.createElement('h1')
        title.innerHTML = phone_name;

        const photo = document.createElement('img')
        photo.src = image

        const card = document.createElement('div')
        card.appendChild(photo)
        card.appendChild(title)

        container.appendChild(card)

        console.log(detail)

    });
}



