import express from "express";

import { data } from "./data.js";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  next();
});

app.get("/autocomplete", (req, res) => {
  const { searchTerm } = req.query;
  if (!searchTerm) return;

  const autocompleteDataTopTen = data
    .filter((d) => d.includes(searchTerm))
    .slice(0, 10);

  res.status(200).json(autocompleteDataTopTen);
});

app.get("*", (req, res) => {
  res.status(404).end("Invalid path");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
