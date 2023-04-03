# 아마존 #1: 모달, 애니메이션 구현

## ⭐️ 1주차 학습키워드: `#html`, `#css3`, `#Sass`, `#애니메이션`

## 🎯 1주차 학습 목표

- CSS 전처리기를 이해하고 활용해서 개발할 수 있다.
- Modal 기능을 구현할 수 있다.
- Carousel UX를 구현할 수 있다.
- CSS3 기반 웹 애니메이션을 구현할 수 있다.

## 📖 1주차 학습 계획

- [ ]  루카스에 나와있는 설명 읽어본다. (Sass, 웹 애니메이션)
- [ ]  Sass에 대해서 학습한다.
    - [ ]  Sass란 무엇인가
    - [ ]  설치 및 사용방법
    - [ ]  Sass syntax
- [ ]  웹 애니메이션에 대해서 학습한다.
    - [ ]  CSS 애니메이션 구현방법
        - [ ]  transition
        - [ ]  transform
    - [ ]  JS 애니메이션 구현방법
        - [ ]  setInterval, setTimeout
        - [ ]  requestAnimationFrame

## ⌨️ 1주차 구현 계획

- [ ]  Header
    - [ ]  Top Navigation bar
        - [ ]  Layout
        - [ ]  Login modal
        - [ ]  Shipping address modal
        - [ ]  Responsive size
- [ ]  Main page
    - [ ]  Hero section
        - [ ]  Image Slider
    - [ ]  Contents section

## 📚 1주차 학습 정리

### 1. Sass(Syntactically Awesome Style Sheets)
## ✨ 1주차 요구사항
### Sass

- SASS에서 제공하는 다양한 기능을 활용한다.
    - 변수
    - 함수
    - 믹스인
    - 중첩 규칙
- sass사용시 지나친 중첩이 되지 않도록 고려한다.
- CSS의 중복이 없도록 노력한다.
    - global 스타일등을 두어서 공통 스타일을 만든다.

### 모달 영역

- 모달영역 구현시 alert이나 confirm 함수를 사용하는 것이 아니다.
- 모달 영역과, Dimmed 처리시 반복로직을 최소한으로 하는 방법을 고민한다.
- 모달의 위치는 디자인 가이드라인에서 지정된 위치에 노출되도록 한다.

### 슬라이딩

- 무한 슬라이딩 구현이 어려울 수 있음으로, 유한 슬라이딩으로 먼저 개발하는 것을 추천한다.
- 무한 슬라이딩의 구현 원리는 스스로 DOM을 조작하는 방법을 설계하면서 해본다. (결국 DOM 을 추가/삭제/변경 하는 식이다)
