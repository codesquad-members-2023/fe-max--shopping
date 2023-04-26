export const BASE_API_DOMAIN = new URL('http://localhost:3000');

export const fetchData = async (url, propName) => {
  const dataInfo = await fetchJSON(url);
  const data = dataInfo.map((info) => info[`${propName}`]);

  return data;
};

const fetchJSON = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
