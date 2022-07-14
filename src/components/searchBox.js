import { getJsonData } from "../helpers/fetch.js";
import { initDetailsPage } from "../pages/detailsPage.js";

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
  const url = `http://api-mobilespecs.azharimm.site/v2/search?query=${query}`;
  const jsonData = await getJsonData(url);
  renderResult(jsonData);
};

const renderResult = (jsonData) => {
  const searchContainer = document.getElementById("search-container");
  searchContainer.innerHTML = "";

  jsonData.data.phones.forEach(({ phone_name, detail }) => {
    const element = document.createElement("li");
    element.textContent = phone_name;
    searchContainer.appendChild(element);

    element.addEventListener("click", () => {
      searchContainer.innerHTML = "";
      initDetailsPage(detail);
    });
  });
};
