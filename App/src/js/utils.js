import { Component } from "./components/Component.js";

export const $ = document.querySelector.bind(document);

function generateDict() {
  const dict = {};

  function _add(name, event) {
    dict[name] = event;
  }

  function _find(name) {
    if (name in dict) {
      return dict[name];
    }
    return null;
  }

  return [_add, _find];
}

const [_addComponent, _findComponent] = generateDict();

export const addComponent = _addComponent;
export const findComponent = _findComponent;

const [_addEvent, _findEvent] = generateDict();

export const addEvent = _addEvent;
export const findEvent = _findEvent;

function recipeAccount() {
  let recipe = null;

  function _registerRecipe(_recipe) {
    recipe = _recipe;
  }

  function _getAccountRecipe() {
    return recipe;
  }

  return {
    _registerRecipe,
    _getAccountRecipe,
  };
}

const { _registerRecipe, _getAccountRecipe } = recipeAccount();

export const registerRecipe = _registerRecipe;
export const getAccountRecipe = _getAccountRecipe;

function getAllSubstrings(str) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

function generateSearchHistory() {
  const MAX_KEYWORD_COUNT = 10;
  const history = [];
  const historyPushed = {};
  const log = [];
  const map = new Map();

  function _addKeyword(keyword) {
    keyword = keyword.trim();
    if (keyword.length === 0) return;

    log.push(keyword);
    if (log.length > MAX_KEYWORD_COUNT) log.splice(0, 1);

    if (keyword in historyPushed) return;
    history.push(keyword);
    historyPushed[keyword] = true;

    getAllSubstrings(keyword).forEach((str) => {
      map.has(str)
        ? map.get(str).add(keyword)
        : map.set(str, new Set([keyword]));
    });
  }

  function _getLogKeywords() {
    return log;
  }

  function _delLogKeyword(index) {
    log.splice(index, 1);
  }

  function _getRandomSearchKeywords(count = MAX_KEYWORD_COUNT) {
    const result = new Set();

    while (result.size < count && result.size < history.length) {
      const index = Math.floor(Math.random() * history.length);
      result.add(history[index]);
    }

    return Array.from(result);
  }

  function _getAutocompleteKeywords(keyword) {
    if (!map.has(keyword)) return [];
    const array = Array.from(map.get(keyword)).sort(
      (a, b) => a.length - b.length
    );
    return array.slice(0, MAX_KEYWORD_COUNT);
  }

  return {
    _addKeyword,
    _getLogKeywords,
    _delLogKeyword,
    _getRandomSearchKeywords,
    _getAutocompleteKeywords,
  };
}

const { _addKeyword, _getLogKeywords, _delLogKeyword,  _getRandomSearchKeywords, _getAutocompleteKeywords } =
  generateSearchHistory();

export const addKeyword = _addKeyword;
export const getLogKeywords = _getLogKeywords;
export const delLogKeyword = _delLogKeyword;
export const getRandomSearchKeywords = _getRandomSearchKeywords;
export const getAutocompleteKeywords = _getAutocompleteKeywords;

export function recipeToComponent(recipe) {
  const component = new Component("div");
  component.parseJsonRecursiveAppendChild(recipe);
  component.render();
  return component.children[0];
}
