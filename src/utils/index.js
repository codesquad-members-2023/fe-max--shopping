export const fetchStyles = async (url) => {
  return await (await fetch(url)).text();
};
