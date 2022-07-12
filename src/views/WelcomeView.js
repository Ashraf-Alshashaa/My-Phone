import { WELCOME_CONTAINER } from '../constants.js'

export const welcomeElement = () => {
    const container = document.createElement('div');
    container.id = WELCOME_CONTAINER
    container.innerHTML = String.raw`
    <h1>Welcome</h1>
  `;
  return container;
}

export const applePageElement = () => {
  const element = document.createElement('div')
  element.id = "apple"
  element.innerHTML = String.raw`
  <h1>Apple</h1>
  `
  return element
}

export const samsungPageElement = () => {
  const element = document.createElement('div')
  element.id = "samsung"
  element.innerHTML = String.raw`
  <h1>Samsung</h1>
  `
  return element
}