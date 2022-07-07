import { 
    APPLE_CONTAINER, 
    APPLE_PHONES_CONTAINER
 } from '../constants.js'

export const createAppleElement = () => {
    const element = document.createElement('div');
    element.id = APPLE_CONTAINER;

    element.innerHTML = String.raw`
        <h1>Apple</h1>
        <ul id = '${APPLE_PHONES_CONTAINER}'></ul>
    `;
    
    return element
}