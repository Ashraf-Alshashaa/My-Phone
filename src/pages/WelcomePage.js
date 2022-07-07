import { 
    welcomeElement, 
    appleStartsBut, 
    samsungStartsBut 
} from "../views/WelcomeView.js";
import { initApplePage } from '../pages/applePage.js'


export const initWelcomePage = () => {
    const container = document.getElementById('interface')

    const welcomeView = welcomeElement()
    container.appendChild(welcomeView)

    const appleButton =  appleStartsBut()
    welcomeView.appendChild(appleButton);

    const samsungButton =  samsungStartsBut()
    welcomeView.appendChild(samsungButton);

    appleButton.addEventListener('click', initApplePage)
    
    samsungButton.addEventListener('click',
    (e) => {
        return console.log('samsung')
    })
}

