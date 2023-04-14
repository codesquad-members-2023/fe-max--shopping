export class Keyword {
  constructor(keywordList) {
    this.keywordList = keywordList;
  }

  appendListToChild(keywordType) {
    for (const keyword of this.keywordList) {
      const parent = keywordType;
      const newList = document.createElement("li");
      const insertNewList = parent.appendChild(newList);
      insertNewList.textContent = keyword;
    }
  }
}
