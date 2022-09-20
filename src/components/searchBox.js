import { getJsonData } from "../helpers/fetch.js";
import { initDetailsPage } from "../pages/detailsPage.js";
import { renderError } from "../views/errorHandling.js";

export const initSearchBox = () => {
  const searchElement = document.getElementById("search");
  let searchTimeoutToken;

  searchElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);
    searchTimeoutToken = setTimeout(() => {
      if (searchElement.value.trim() !== "") {
        searchShow(searchElement.value);
      }
      const searchContainer = document.getElementById("search-container");
      searchContainer.innerHTML = "";
    }, 500);
  };
};

const searchShow = async (query) => {
  const url = `https://api-mobilespecs.azharimm.site/v2/search?query=${query}`;
  try {
    const jsonData = await getJsonData(url);
    renderResult(jsonData);
  } catch (error) {
    renderError(error);
  }

  clearSearchList();
};

const renderResult = (jsonData) => {
  const searchContainer = document.getElementById("search-container");
  searchContainer.innerHTML = "";

  jsonData.data.phones.forEach(({ phone_name, detail: url, image }) => {
    const element = createSearchElement(phone_name, image);
    searchContainer.appendChild(element);

    element.addEventListener("click", () => {
      searchContainer.value = "";
      initDetailsPage(url);
    });
  });
};

const createSearchElement = (title, imgSrc) => {
  const element = document.createElement("li");
  element.className = "search-element";
  element.innerHTML = String.raw`
    <h3>${title}</h3>
    <img src = "${imgSrc}" > 
  `;
  return element;
};

const clearSearchList = () => {
  document.body.addEventListener("click", (e) => {
    if (document.querySelector(".search-element")) {
      if (e.target !== document.querySelector("#search-container")) {
        document.querySelector("#search-container").innerHTML = "";
        document.getElementById("search").value = "";
      }
    }
  });
};
