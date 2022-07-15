import { INTER_FACE } from "../constants.js";
import { initHomePageButton } from "../pages/buttonsPage.js";

export const renderError = (err) => {
  const container = document.getElementById(INTER_FACE);

  container.innerHTML = String.raw` 
    <div id ="err-img-container">
      <h1>Sorry something wrong happened</h1>
      <h2>${err}</h2>
    </div>
  `;

  container.appendChild(initHomePageButton());
};
