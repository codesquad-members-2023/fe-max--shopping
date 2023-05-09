export const $ = document.querySelector.bind(document);

function generateDict() {
  const dict = {};

  function add(name, event) {
    dict[name] = event;
  }

  function find(name) {
    if (name in dict) {
      return dict[name];
    }
    return null;
  }

  return [add, find];
}

export const [addComponent, findComponent] = generateDict();
export const [addEvent, findEvent] = generateDict();


function generateSearchLog() {
  const MAX_KEYWORD_COUNT = 10;
  const STORAGE_KEY = "searchLog";

  const localData = localStorage.getItem(STORAGE_KEY);
  let logs = localData ? JSON.parse(localData) : [];

  function addLogKeyword(keyword) {
    logs = [keyword, ...logs];

    if (logs.length > MAX_KEYWORD_COUNT) {
      logs = logs.slice(0, MAX_KEYWORD_COUNT);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }

  function getLogKeywords() {
    return logs;
  }

  function delLogKeyword(indexToDelete) {
    logs = logs.filter((_, index) => indexToDelete !== index);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }

  return {
    addLogKeyword,
    getLogKeywords,
    delLogKeyword,
  };
}

export const { addLogKeyword, getLogKeywords, delLogKeyword } =
  generateSearchLog();
