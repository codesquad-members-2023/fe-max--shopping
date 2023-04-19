import express from "express";
import { searchData, searchSuggestions } from "./data/searchData.js";
import { heroImgsData, cardsData } from "./data/imgsData.js";
import { sideBarData } from "./data/sideBarData.js";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  next();
});

app.get("/autocomplete", (req, res) => {
  const { searchTerm } = req.query;
  if (!searchTerm) return;

  if (searchTerm === "suggestions") {
    return res.status(200).json(searchSuggestions);
  }

  const autocompleteDataTopTen = searchData
    .filter(({ content }) => content.includes(searchTerm))
    .slice(0, 10);
  return res.status(200).json(autocompleteDataTopTen);
});

app.get("/side-bar", (req, res) => {
  return res.status(200).json(sideBarData);
});

app.get("/hero-images", (req, res) => {
  return res.status(200).json(heroImgsData);
});

app.get("/cards-panel", (req, res) => {
  return res.status(200).json(cardsData);
});

app.get("*", (req, res) => {
  res.status(404).end("Invalid path");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
