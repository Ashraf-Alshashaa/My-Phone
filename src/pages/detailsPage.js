
import { detailsElement, summaryElement } from "../views/detailsView.js";
import {
    INTER_FACE, 
    SPECIFIC_DATA_CONTAINER,
    SUMMARY_CONTAINER,
    DETAILS_IMG
} from '../constants.js'
import { getJsonData } from '../data.js';


export const initDetailsPage = async (url) => {
    const container = document.getElementById(INTER_FACE);
    container.innerHTML = '';

    const page = detailsElement();
    container.appendChild(page);

    const jsonData = await getJsonData(url);
    summary(jsonData);
    specificationDetails(jsonData);
    getImgSrc(jsonData);

}

const getImgSrc = (jsonData) => {
    const img = document.getElementById(DETAILS_IMG);
       //get first photo from phone_images array
    const imgSrc = jsonData.data.phone_images[0]
    img.src = imgSrc
}

const summary = (jsonData) => {
    const summaryContainer = document.getElementById(SUMMARY_CONTAINER);
    const summaryObj = jsonData.data

    let key;
    for (key in summaryObj ) {

        if (key !== "phone_images" & key !== "specifications" & key !== "thumbnail") {
            const title = key.replace(/_/g, " ")
            const paragraph = summaryObj[key]
            const element = summaryElement(title, paragraph)
            summaryContainer.appendChild(element)
        }

    }    
} 

const specificationDetails = (jsonData) => {
    const container = document.getElementById(SPECIFIC_DATA_CONTAINER);
    
    jsonData.data.specifications.forEach( specification => {
    const containerTitle = document.createElement('h2');
    containerTitle.innerHTML = specification.title;
    container.appendChild(containerTitle);

        specification.specs.forEach(({key, val}) => {
            const li = document.createElement('li');
            li.innerHTML = `<h4>${key}</h4> <span>${val}</span>`;
            container.appendChild(li);
        })
    });
}