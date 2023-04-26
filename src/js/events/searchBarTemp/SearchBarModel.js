import { $ } from '../../utils/dom.js';
import { APIClient, JSONClient } from '../api/api.js';
import { getRandomLetter } from '../../utils/pickPrefix.js';
import { PATH } from '../../constants/path.js';
import { SearchHistoryManager } from './SearchHistoryManagerTemp.js';
import { handleDimming, layerOpenState } from '../../utils/dim.js';
import { NUMBER } from '../../constants/number.js';

export class SearchBarModel {
  constructor() {
    this.termsType = { suggest: [], history: [], auto: [] };
  }

  setTermsType(type, terms) {
    this.termsType[type] = terms;
  }

  setSuggestion(terms) {
    this.setTermsType('suggest', terms);
  }

  getSuggestion() {
    return this.termsType.suggest;
  }

  setHistory(terms) {
    this.setTermsType('history', terms.reverse().slice(0, NUMBER.maxHistory));
  }

  getHistory() {
    return this.termsType.history;
  }

  setAuto(terms) {
    this.setTermsType('auto', terms);
  }

  getAuto() {
    return this.termsType.auto;
  }

}
