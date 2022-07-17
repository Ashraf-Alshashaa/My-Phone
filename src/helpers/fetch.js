export const getJsonData = async (url) => {
  const httpsUrl = url.replace(/^https?:\/\//, "https://");
  const response = await fetch(httpsUrl);
  if (response.ok) {
    console.log(httpsUrl);
    return response.json();
  }
  throw new Error("response undefined");
};
