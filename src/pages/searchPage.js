import { getJsonData } from '../data.js'
import { initDetailsPage } from './detailsPage.js'


const searchShow = async (query) => {
    const url = `http://api-mobilespecs.azharimm.site/v2/search?query=${query}`;
        const jsonData = await getJsonData(url);
        renderResult(jsonData)
    } 

const renderResult = (jsonData) => {
    const searchContainer = document.getElementById("search-container");
    searchContainer.innerHTML= '';

    jsonData.data.phones.forEach(({phone_name, detail}) => {
        const element = document.createElement('li');
        element.textContent = phone_name;
        searchContainer.appendChild(element);

        element.addEventListener('click', async () => {
            await initDetailsPage(detail);
            searchContainer.innerHTML= ''
        })
    })

}

export const loadSearch = () => {
    const searchElement = document.getElementById("search");
    let searchTimeoutToken;

    searchElement.onkeyup = (event) => {
        clearTimeout(searchTimeoutToken);
        searchTimeoutToken = setTimeout(() => {
            searchShow(searchElement.value)
        },500) 
    }
}