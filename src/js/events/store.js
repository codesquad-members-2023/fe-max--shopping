export const store = {
  setLocalStorage(history) {
    //로컬스토리지는 문자열 형태로 저장해야함
    localStorage.setItem('searchHistory', JSON.stringify(history)); 
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('searchHistory')); // 문자열로 저장된 데이터를 json객체로
  },
};
