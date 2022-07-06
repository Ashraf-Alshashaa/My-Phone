import { 
    welcomeElement, 
    appleStartsBut, 
    samsungStartsBut 
} from "../views/WelcomeView.js";

export const initWelcomePage = () => {
    const welcomeView = welcomeElement()
    document.body.appendChild(welcomeView)

    const appleButton =  appleStartsBut()
    welcomeView.appendChild(appleButton);

    const samsungButton =  samsungStartsBut()
    welcomeView.appendChild(samsungButton);

    appleButton.addEventListener('click',
    (e) => {
        return console.log('apple')
    })
    
    samsungButton.addEventListener('click',
    (e) => {
        return console.log('samsung')
    })
}

