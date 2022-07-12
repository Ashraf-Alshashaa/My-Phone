
export const createPhonesListElement = (jsonData) => {
    const element = document.createElement('div');
    element.className = "phones-list";
    element.innerHTML = String.raw`
        <h1>${jsonData.data.title}</h1>
    `;
    
    return element
}