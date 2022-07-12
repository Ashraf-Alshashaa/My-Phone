import { createSelectElement, createOptionElement } from "../views/selectBrandView.js";
import { getJsonData } from "../data.js";
import { initPhonesListPage } from "./phonesListPage.js";

export const initSelectElement = (data) => {
   
    const selectBrands = createSelectElement()

    const select = document.createElement('select');
    select.id = "select"
    getBrandsFromAPI(data, select)


     select.addEventListener(
        'input', async () => {
        const jsonData = await getJsonData(select.value)
            initPhonesListPage(jsonData)
       }
       );
       selectBrands.appendChild(select)
    return selectBrands
}

const getBrandsFromAPI = async (Data, select) => {

    const brandsData = await getJsonData(Data);
    brandsData.data.forEach(({brand_name, detail}) => {
        const option = createOptionElement (brand_name, detail)
        select.appendChild(option)
    });
}


  