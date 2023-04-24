# 아마존 #4: store와 view의 이별

## ⭐️ 4주차 학습키워드: `#MVC`, `#상태관리`, `#ES Module`, `#결합도`

## 🎯 4주차 학습 목표

- Store와 View를 분리해서 모듈을 만들고 이들을 연결할 수 있다.
- ES Modules를 활용한 모듈개발을 할 수 있다.

## ⌨️ 4주차 학습 및 구현 계획

- [ ]  기존 기능들 중 구현 못한 부분을 완성한다.
    - [ ]  히어로 영역
        - [ ]  이미지 받아오는 부분 json-server에서 받아오도록 변경하기
    - [ ]  검색바 영역
        - [ ]  최근검색어 삭제 기능 추가하기
    - [ ]  사이드바 영역
        - [ ]  초기 데이터와 더보기 데이터를 서버통신으로 가져오도록 구현하기

- [ ]  코드리뷰 받았던 부분 위주로 리팩터링
    - [ ]  `.env`파일로 환경변수 관리하기
    - [ ]  서버통신으로 데이터 요청을 처리하는 코드를 재사용 가능하게 분리해보기
    - [ ]  최근검색어 저장 시 로컬스토리지가 아닌 서버에 post/put 요청으로 처리해보기
    - [ ]  받아온 데이터로 렌더링 할 때 어떻게 사용할지 생각해보기
    - [ ]  unshift() 말고 다른 방법 고민하기
    - [ ]  검색바에서 결합도 낮출 방법 찾아서 적용하기

- ES Module에 대해서 학습한다.
- MVC 패턴에 대해서 학습하고 store와 view 분리하기
- 모듈간 의존성 낮출 방법 고민하기
## 📚 4주차 학습 정리

## 참고자료

### ES Module

- [https://ui.toast.com/weekly-pick/ko_20180402](https://ui.toast.com/weekly-pick/ko_20180402)

### 상태관리

- [https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-컴포넌트와-상태관리](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AA-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5)
