import { API_URL } from "./constants.js";

export const fetchData = async (param) => {
  const res = await fetch(`${API_URL}/${param}`);
  return await res.json();
  
}

export const fetchDataAll = async (...params) => {
  return await Promise.all(params.map(fetchData));
}

export const deleteData = async (param) => {
  await fetch(`${API_URL}/${param}`, {
    method: "DELETE",
  })
}

export const saveData = async (param,text) => {
  await fetch(`${API_URL}/${param}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  })
}