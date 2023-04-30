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
  const local = localStorage.getItem("searchLog");

  const log = local ? JSON.parse(local) : [];

  function addLogKeyword(keyword) {
    log.splice(0, 0, keyword);
    if (log.length > MAX_KEYWORD_COUNT) log.pop();
    localStorage.setItem("searchLog", JSON.stringify(log));
  }

  function getLogKeywords() {
    return log;
  }

  function delLogKeyword(index) {
    log.splice(index, 1);
    localStorage.setItem("searchLog", JSON.stringify(log));
  }

  return {
    addLogKeyword,
    getLogKeywords,
    delLogKeyword,
  };
}

export const { addLogKeyword, getLogKeywords, delLogKeyword } =
  generateSearchLog();
