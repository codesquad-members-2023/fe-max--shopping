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

async function generateSearchLog() {
  const MAX_KEYWORD_COUNT = 10;

  let searchLog = localStorage.getItem("searchLog");
  if (searchLog) searchLog = JSON.parse(searchLog);

  let log = searchLog ? searchLog : [];

  function _addLogKeyword(keyword) {
    log = [...log, keyword].slice(0, MAX_KEYWORD_COUNT - 1);
    localStorage.setItem("searchLog", JSON.stringify(log));
  }

  function _getLogKeywords() {
    return log;
  }

  function _delLogKeyword(index) {
    log = log.slice(1);
    localStorage.setItem("searchLog", JSON.stringify(log));
  }

  return {
    _addLogKeyword,
    _getLogKeywords,
    _delLogKeyword,
  };
}

const { _addLogKeyword, _getLogKeywords, _delLogKeyword } =
  await generateSearchLog();

export const addLogKeyword = _addLogKeyword;
export const getLogKeywords = _getLogKeywords;
export const delLogKeyword = _delLogKeyword;
