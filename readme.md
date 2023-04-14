# 아마존 #1: 모달, 애니메이션 구현

## ⭐️ 1주차 학습키워드: `#html`, `#css3`, `#Sass`, `#애니메이션`
## ⭐️ 2주차 학습키워드: `#OOP`, `#this`, `#Class`, `#prototype`

## 🎯 1주차 학습 목표

- CSS 전처리기를 이해하고 활용해서 개발할 수 있다. ✅
- Modal 기능을 구현할 수 있다. ✅
- Carousel UX를 구현할 수 있다.
- CSS3 기반 웹 애니메이션을 구현할 수 있다. ✅

## 🎯 2주차 학습 목표

- 객체지향 프로그래밍을 이해한다.
- 웹프론트엔드에서 어떻게 객체지향 프로그래밍을 할 수 있는지 안다.
- ES Classes 표현방식을 알고, this를 통해서 객체를 다룰 수 있다.

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
  - [ ]  추천검색어, 최근검색어 노출
    - [x] 기본 추천 검색어 json 객체로 받아와서 렌더링
    - [ ] 최근 검색어
    - [ ] 입력 내용에 맞는 자동완성 기능
  - [ ]  키보드를 통한 검색결과 선택
    - [x] 키보드 이벤트로 포커스 이동을 어떻게 구현할지
    - [x] 아래 방향키로 이동
    - [ ] 위 방향키로 이동
  - [ ]  기타 UX를 고려한 검색창 기능
  - [ ]  실제 검색결과를 노출하는 화면은 없다.

### 요구사항

- query에 따른 결과 데이터는 미리 생성해둔 json형태의 객체를 통해서 결과를 받아서 활용한다.
- 검색창과 검색결과는 별도의 모듈(클래스)로 분리해서 개발한다.
- es classes를 활용해서 객체를 표현한다.
- 최근검색어를 어떻게 저장해야 할지 찾아본다.

### 1) OOP (Object-oriented Programming)

객체지향 핵심개념들

- Class
- 캡슐화(Encapsulation)
- 상속(Inheritance)
- 다형성(polymorphism)
- 추상화(abstraction)

### 2) OOP in JS

- `Object.create(proto[, propertiesObject])`
```jsx
function parent() {
	this.name = 'parent';
}
parent.prototype.getName = function() {
	return this.name;
}

function child(age) {
	this.age = age;
}

console.log(child.prototype);
// ▼ {constructor: ƒ}
//	 ▶︎ constructor: ƒ child(age)
//	 ▶︎ [[Prototype]]: Object

child.prototype = Object.create(parent.prototype);

console.log(child.prototype);
// ▼ parent {}
//	 ▼ [[Prototype]]: Object
//		 ▶︎ getName: ƒ ()
// 		 ▶︎ constructor: ƒ parent()
// 		 ▶︎ [[Prototype]]: Object
```

## 🤔 생각할 거리

- searchbarInput에 이벤트를 걸어줄 때 searchbarLayer를 밖에서 변수로 선언해서 불러오려면 null 값이 나와서 이벤트 핸들러 내부에서 불러와서 사용해야 한다. WHY? → searchbar가 렌더링되고 그 이후에 layer가 렌더링 되어서 뭔가 순서 문제인가?

## 😵‍💫 삽질 기록

- button, input, select, a 태그 외 다른 요소들은 기본적으로 focus를 지원하지 않는다… → html tag에tabindex 속성을 줘야한다!

## 참고자료

### OOP in JS

- [https://poiemaweb.com/js-prototype](https://poiemaweb.com/js-prototype)
- [https://velog.io/@thms200/Object.create-](https://velog.io/@thms200/Object.create-)
- [https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-상태관리의-탄생](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%E1%84%8B%E1%85%B4-%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC)