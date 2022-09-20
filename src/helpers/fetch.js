export const getJsonData = async () => {
  const response = await fetch("/phones", {
    method: "get",
  });
  return response.json();
};
