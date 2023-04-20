// 방향키 목록 이동, 최근 검색어 삭제 기능

function searchLayerEventHandler() {
  document.querySelector("img").addEventListener("click", (e) => {
    console.log(e.target);
  });
}

export { searchLayerEventHandler };
