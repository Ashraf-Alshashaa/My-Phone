export const createCardElement = ( phone_name, image_src) => {
    const element  = document.createElement('div')
    element.innerHTML = String.raw`
    <img src="${image_src}"/">
    <h1>${phone_name}</h1>
    `
    return element
}