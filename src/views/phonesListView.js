export const createPhonesListElement = () => {
  const element = document.createElement("div");
  element.className = "phones-list";
  element.innerHTML = String.raw`
        <h1>List</h1>
    `;

  return element;
};
