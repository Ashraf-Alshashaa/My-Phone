import { 
    welcomeElement, 
    applePageElement, 
    samsungPageElement 
} from "../views/WelcomeView.js";
import { initPhonesListPage } from './phonesListPage.js'
import { getJsonData } from "../data.js";
import { SAMSUNG_API_URL, APPLE_API_URL,INTER_FACE } from "../constants.js";


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
}



