const extractNameInfo = (text) => {
  const openingParenIndex = text.indexOf("(");
  const closingParenIndex = text.indexOf(")");

  if (
    openingParenIndex !== -1 &&
    closingParenIndex !== -1 &&
    openingParenIndex < closingParenIndex
  ) {
    const name = text.substring(0, openingParenIndex).trim();
    const info = text
      .substring(openingParenIndex + 1, closingParenIndex)
      .trim();

    return { name, info };
  } else {
    return { name: text.trim(), info: "" };
  }
};
export default extractNameInfo;
