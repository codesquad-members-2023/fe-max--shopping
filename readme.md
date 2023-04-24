# 아마존 #1: 모달, 애니메이션 구현

## ⭐️ 1주차 학습키워드: `#html`, `#css3`, `#Sass`, `#애니메이션`
## ⭐️ 2주차 학습키워드: `#OOP`, `#this`, `#Class`, `#prototype`

## ⭐️ 3주차 학습키워드: `#fetch`, `#비동기 네트워크 API`, `#비동기 통신`, `#Promise 패턴`, `#JSON`

## ⭐️ 4주차 학습키워드: `#MVC`, `#상태관리`
## 🎯 1주차 학습 목표

- CSS 전처리기를 이해하고 활용해서 개발할 수 있다. ✅
- Modal 기능을 구현할 수 있다. ✅
- Carousel UX를 구현할 수 있다. ✅
- CSS3 기반 웹 애니메이션을 구현할 수 있다. ✅

## 🎯 2주차 학습 목표

- 객체지향 프로그래밍을 이해한다.
- 웹프론트엔드에서 어떻게 객체지향 프로그래밍을 할 수 있는지 안다. 
- ES Classes 표현방식을 알고, this를 통해서 객체를 다룰 수 있다. ✅

## 🎯 3주차 학습 목표

- 기존 기능에 데이터 통신을 포함한 기능을 만든다. ✅
- fetch API를 활용해 get/post요청을 할 수 있다. ✅
- Promise패턴이 어떻게 동작하는 이해하고 활용할 수 있다. ✅
- mock server 를 연동해서 프론트엔드와 통신하는 방법을 안다. ✅

## 🎯 4주차 학습 목표

- Store와 View를 분리해서 모듈을 만들고 이들을 연결할 수 있다.
- ES Modules를 활용한 모듈개발을 할 수 있다.

## ⌨️ 1주차 학습 및 구현 계획

- [x] 헤더영역 (네비게이션 바)
  - [x] 상단 네비게이션 바
    - [x] 레이아웃
  - [x] 로그인 영역 모달 기능
    - [x] 페이지 로드시 1초 뒤에 스르륵 나타나는 로그인 팝오버(버튼) 구현
    - [x] 로그인 영역 호버했을때 나타나는 확장된 모달 구현
  - [x] 배송처 영역 모달 기능
  - [x] 호버 영역 및 모달 영역 벗어날 때 모달과 딤 처리가 사라지는 기능
  - [x] 화면 크기에 맞게 검색창 사이즈 조정

- [x] 메인 화면
  - [x] 히어로 영역
    - [x] 레이아웃
    - [x] 이미지 슬라이더

## ⌨️ 2주차 학습 및 구현 계획

1주차 때 너무 개념공부만 하다가 요구사항들을 구현을 많이 못해서 2주차 때는
못 만들었던 히어로 영역을 빠르게 완성하고 2주차 주요 개념들을 간단히만 찾아보고
바로 객체지향 검색바 만들기를 시작해볼 예정이다.

- [x] 루카스에 나온 개념들 위주로 학습하기
  - [x] OOP
  - [x] OOP in JS
  - [x] prototype과 상속

- [ ] 검색바 구현
  - [x]  검색창(바) 개발
    - [x] html, css로 레이아웃 잡아보기
    - [x] Class로 구현하기 (검색창과 검색내역)
  - [x]  추천검색어, 최근검색어 노출
    - [x] 기본 추천 검색어 json 객체로 받아와서 렌더링
    - [x] 최근 검색어
    - [x] 입력 내용에 맞는 자동완성 기능
  - [x]  키보드를 통한 검색결과 선택
    - [x] 키보드 이벤트로 포커스 이동을 어떻게 구현할지
    - [x] 아래 방향키로 이동
    - [x] 위 방향키로 이동
  - [ ]  기타 UX를 고려한 검색창 기능
  - [x]  실제 검색결과를 노출하는 화면은 없다.

## ⌨️ 3주차 학습 및 구현 계획

- AJAX, JSON, json-server 학습하기
- Promise 패턴 학습하기
- fetch API 학습하기

- [x]  json-server 연동
- [x]  검색창
    - [x]  검색창 자동완성 데이터를 json-server와 연동해서 가져오는 방식으로 개발한다.
    - [x]  get방식으로 query를 보내고 응답 데이터를 받아온다.
- [ ]  슬라이더
    - [ ]  기존 슬라이드 이미지를 json-server에 연동해서 가져오는 방식으로 구현
- [ ]  사이드바
    - [x]  사이드 메뉴 기능 구현
    - [ ]  초기 데이터와 더보기 데이터를 구분해서 서버 통신으로 가져오도록 구현한다.

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
## 📚 3주차 학습 정리

### 1) AJAX(Asynchronous JavaScript and XML)

- 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 뜻하며, 빠르게 동작하는 동적인 웹페이지를 만들기 위한 기술이다.
    
    ![ajax-webpage-lifecycle](https://user-images.githubusercontent.com/76121068/232877814-2c39757e-e5ea-4ce9-a593-8cf338f26bf8.png)

- 페이지를 새로고침을 하지 않아도 JS를 통해서 서버에 요청을 보내고 응답받은 데이터를 이용해서 페이지의 일부분만 갱신할 수 있다! (비동기성) → 더 이상 페이지 전체를 로드해서 렌더링 할 필요가 없어짐!
- 이 때 서버와 다양한 형태의 데이터를 주고받을 수 있다. (JSON, XML, HTML, 이미지 파일 등등)
- 장점
    - 웹페이지 일부분만을 갱신할 수 있다.
    - 웹페이지가 로드된 이후에도 서버에 데이터 요청을 보내고 서버로부터 데이터를 받을 수 있다.
    - 백그라운드에서 서버로 데이터를 보낼 수 있다.
- 단점
    - 클라이언트가 서버에 데이터를 요청하는 client pulling 방식을 사용하므로, 서버가 자동으로 특정 정보를 제공하는 server push 방식의 실시간 서비스를 만들 수 없다.
    - 바이너리 데이터를 주고받을 수 없다.
    - ajax 스크립트가 포함된 서버가 아닌 다른 서버로 ajax 요청을 보낼 수 없다.
    - 클라이언트의 PC로 ajax 요청을 보낼 수 없다.

### 2) JSON(JavaScript Object Notation)

- 클라이언트(브라우저)와 서버 간 데이터 교환을 할 때 사용되는 데이터 포맷의 한 종류이다.
- JSON은 일반 텍스트 포맷보다 더 효과적인 데이터 구조화가 가능하며 XML 포맷보다 가볍고 사용하기 간편하고 가독성이 좋아 사실상 데이터 통신을 위한 표준이 되었다.
- 객체리터럴과 매우 흡사하고 키 값에는 반드시 쌍따옴표(””)를 사용한다.
- 순수한 데이터 포맷으로 프로퍼티만 담을 수 있고 메서드는 담을 수 없다.
- 콤마(,)나 콜론(:)을 제대로 된 위치에 사용하지 않으면 작동하지 않을 수 있으므로 주의한다.
- `JSON.stringify()`: 객체를 매개변수로서 수용하고, JSON 문자열 형태로 변환합니다.
- `JSON.parse()`: JSON 문자열을 매개변수로 받아서, 일치하는 자바스크립트 객체로서 변환합니다.

### 3) Promise와 fetch API

(1) Promise란?

```jsx
// Promise가 등장하기 이전의 비동기 처리는 콜백을 다른 함수의 인자로 넘겨서 했었다...
findUser(1, function (user) {
  console.log("user:", user);
});

function findUser(id, cb) {
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}
// 결과
// waited 0.1 sec.
// user: {id: 1, name: "User1", email: "1@test.com"}
```

- 지금 당장 얻을 수 없지만 가까운 미래에 얻을 수 있는 어떤 데이터에 접근하기 위한 방법 → 데이터를 얻는데까지 지연(delay)가 발생한다. (대표적으로 네트워크에서 데이터를 받아올 때!)
- 기존 콜백을 인자로 넘겨 비동기 처리하는 방식에서 콜백 지옥이 일어나는 문제점을 해결해준다.
- 비동기 처리임에도 마치 동기적인 것 처럼 보여지게 함으로써 코드의 가독성을 높여준다!

```jsx
// 콜백 인자를 넘기는 대신 Promise 객체를 만들어 리턴해주고, 
// 호출할 때 리턴받은 Promise 객체에 then() 메서드를 호출해서 실행로직을 넘겨준다.
findUser(1).then(function (user) {
  console.log("user:", user);
});

function findUser(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("waited 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}
// 결과는 위와 동일!
```

(2) Promise 문법

- Promise객체는 `new`키워드와 생성자를 이용해서 만들 수 있다. 이때 생성자는 함수를 인자로 받는데, 이 함수는 인자로 resolve, reject라는 2개의 매개변수를 가진다.

```jsx
function returnPromise() {
  return new Promise((resolve, reject) => { ... } );
}
```

- 생성자의 인자로 넘어가는 함수에서는 `resolve()`, `reject()` 함수를 적절히 호출해서 사용한다. `resolve()` 함수의 인자로는 미래 시점에 얻게될 결과를 넘겨주고, `reject()` 함수의 인자로는 미래에 발생할 예외를 넘겨준다.
- 이후 이를 호출할 때 `then()`, `catch()` 메서드를 사용하는데, 정상적인 인자를 넘긴 경우 `then()`이 호출되고, 비정상적인 인자를 넘긴 경우 `catch()`가 호출된다.

(3) fetch API

- 실제 Promise를 직접 생성해서 리턴하는 경우보다 보통 라이브러리나 API로부터 얻어지는 Promise 객체를 사용하는 경우가 많은데 REST API를 호출할 때 사용되는 브라우저 내장 함수인 `fetch()`가 대표격!
- fetch() 함수는 API의 URL을 인자로 받아서 미래 시점에 얻게 될 API 호출 결과를 Promise 객체로 리턴해준다. API 호출이 성공했을 때는 response 객체를 resolve하고, 실패하면 error 객체를 reject한다.
- 옵션(options) 객체에는 HTTP method, headers, body 등을 설정해 줄 수 있다.
- fetch()함수는 기본값으로 GET 방식으로 작동한다.

```jsx
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

- 대부분 JSON 포맷의 데이터를 응답으로 받게 되는데 이때 `json()` 메서드를 사용하면 응답 객체로부터 JSON 포맷의 응답 전문을 JS 객체로 변환해서 얻을 수 있다!

## 😵‍💫 생각할 거리

- backdrop 태그의 위치를 어떻게 해야 제대로 위치할까?
- 렌더링 할 템플릿들이 조금씩 다른데 다 다르게 만들어야할까?
- 싱글톤 패턴
- Promise 내부 구현체
## 참고자료
### AJAX, JSON

- [http://www.tcpschool.com/ajax/ajax_intro_basic](http://www.tcpschool.com/ajax/ajax_intro_basic)
- [https://poiemaweb.com/js-ajax](https://poiemaweb.com/js-ajax)
- [https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)

### Promise, fetch API

- [https://www.daleseo.com/js-async-promise/](https://www.daleseo.com/js-async-promise/)
- [https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

### 자동완성

- [https://velog.io/@1703979/JS-30-06](https://velog.io/@1703979/JS-30-06)
- [https://www.freecodecamp.org/korean/news/debounce-dibaunseu-javascripteseo-hamsureul-jiyeonsikineun-bangbeob-js-es6-yeje/](https://www.freecodecamp.org/korean/news/debounce-dibaunseu-javascripteseo-hamsureul-jiyeonsikineun-bangbeob-js-es6-yeje/)