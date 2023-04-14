// 방향키 목록 이동, 최근 검색어 삭제 기능

import { QUERY } from "../constant.js";

function searchLayerEventHandler() {
  document.querySelector("img").addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log(e.target);
    // document.removeChild(e.target.parentNode);
  });
}

export { searchLayerEventHandler };
