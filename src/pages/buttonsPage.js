import { initDetailsPage } from './detailsPage.js'

export const createDetailButton = (detailURL) => {
    const button = document.createElement('button');
    button.innerText = "more details";
    button.className = "details-button";

    button.addEventListener('click', () => {
        initDetailsPage(detailURL)
    })
    return button
}