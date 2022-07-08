

export const fetchData = async (url) => {
    const getApiData = await fetch (url)
    const dataJson = await convertToJson(getApiData);
    return dataJson;
}

const convertToJson =  data => data.json();