import { API_URL } from "./constants.js";

export const fetchData = (param) => {
  return fetch(`${API_URL}/${param}`)
  .then((res) => res.json())
}

export const fetchDataAll = (...params) => {
  return Promise.all(params.map(fetchData));
}