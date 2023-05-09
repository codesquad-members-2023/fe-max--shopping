import { API_URL } from "./constants.js";

export const fetchData = async (param) => {
  const res = await fetch(`${API_URL}/${param}`);
  return await res.json();
  
}

export const fetchDataAll = async (...params) => {
  return await Promise.all(params.map(fetchData));
}