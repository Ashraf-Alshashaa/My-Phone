import { HOME_MAIN_CONTAINER } from "../constants.js";

export const createHomeElement = () => {
  const container = document.createElement("main");
  container.id = HOME_MAIN_CONTAINER;
  container.innerHTML = String.raw`
  <div class="container">
    <article id="article">
      <div class="main-text">
        <h1>Are You A Technology Lover?</h1>
        <h2>Here you will find detailed information <br> about almost all phones</h2>
        <button id="more-brands-button">Brands List</button>
      </div>
    </article>
    <aside>
     <div id="apple">
      <img src="public/images/apple_logo.png" id="apple-img"/>
     </div>
     <div id="samsung">
       <img src="public/images/samsung_logo.jpeg"  id ="samsung-img"/>
     </div>
    </aside>
  </div>
        <img class ="main-img" src="public/images/home-page-logo.png"/>
    
  `;
  return container;
};
