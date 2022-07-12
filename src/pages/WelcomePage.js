import { 
    welcomeElement, 
    applePageElement, 
    samsungPageElement 
} from "../views/WelcomeView.js";
import { initPhonesListPage } from './phonesListPage.js'
import { getJsonData } from "../data.js";
import { 
    SAMSUNG_API_URL, 
    APPLE_API_URL, 
    BRANDS_API_URL, 
    INTER_FACE } from "../constants.js";
import { initSelectElement } from './selectBrandPage.js'

export const initWelcomePage = () => {
    const container = document.getElementById(INTER_FACE);

    const welcomeView = welcomeElement()
    container.appendChild(welcomeView)

    const applePage =  applePageElement()
    welcomeView.appendChild(applePage);

    const samsungPage =  samsungPageElement()
    welcomeView.appendChild(samsungPage );
    
    applePage.addEventListener('click',
    async (e) => {
        const jsonData = await getJsonData(APPLE_API_URL)
        initPhonesListPage(jsonData)
    })
    
    samsungPage .addEventListener('click',
    async (e) => {
        const jsonData = await getJsonData(SAMSUNG_API_URL)
        initPhonesListPage(jsonData)
    })

    const button = document.createElement('button')
    button.textContent = 'more brands'
    button.id = "more-brands-button"

    welcomeView.appendChild(button)
    button.addEventListener('click', () => {
        const brandSelector = initSelectElement(BRANDS_API_URL);
        welcomeView.appendChild(brandSelector)
    })
    

    
}



