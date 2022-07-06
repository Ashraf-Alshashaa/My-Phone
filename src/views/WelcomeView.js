import { WELCOME_CONTAINER } from '../constants.js'

export const welcomeElement = () => {
    const container = document.createElement('div');
    container.id = WELCOME_CONTAINER
    container.innerHTML = String.raw`
    <h1>Welcome</h1>
  `;
  return container;
}

export const appleStartsBut = () => {
  const button = document.createElement('div')
  button.id = "apple"
  button.innerHTML = String.raw`
  <h1>Apple</h1>
  `
  return button
}

export const samsungStartsBut = () => {
  const button = document.createElement('div')
  button.id = "samsung"
  button.innerHTML = String.raw`
  <h1>Samsung</h1>
  `
  return button
}