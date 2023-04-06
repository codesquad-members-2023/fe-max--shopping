# 아마존#1

## 학습 키워드

### **UI 개발과 캐로셀UX**

#### 키워드

- html
- sass

#### 학습목표

- CSS 전처리기를 이해하고 활용해서 개발할 수 있다.
- Carousel UX를 구현할 수 있다.

### 웹애니메이션

웹애니메이션은 많은 콘텐츠를 보여줘야 하는 경우에, 자연스러운 콘텐츠 전환등의 좋은 경험을 제공해준다.
특히 화면 크기가 작은 모바일 환경에서는 더욱 유용하다.
하지만 애니메이션은 잘못 구현하면, 자연스럽지 않고 사용자에게 안좋은 경험만 줄 뿐이다.
seamless한 애니메이션을 만드는 방법을 고민해야 한다.

#### 키워드

- css3
- 애니메이션

#### 학습목표

- CSS3 기반 웹 애니메이션을 구현할 수 있다.
- CSS의 애니메이션 관련 속성을 이해하고, 이를 이용한 웹애니메이션을 구현 할 수 있다.
- 흔히 사용되는 Carousel UI 기능을 만들 수 있다.

### **CSS 전처리기 이해 (Using SASS)**

### **Sass란?**

Sass (Syntactically Awesome Style Sheets)는 CSS를 더욱 유지보수 가능하게 작성하기 위한 CSS 전처리기.Sass는 CSS의 superset이라고 볼 수 있음.Sass를 사용하면, 변수(variables), 믹스인(mixins), 함수(functions) 등을 사용하여 중복 코드를 제거하고 코드의 재사용성을 높일 수 있음.

### 중첩

### 믹스인(Mixins)

## 학습 계획

- [ ] sass, scss 학습
  - [x] sass, scss 적용시키는 법 찾아보기
  - [x] sass, scss 문법 학습
- [ ] 모달 학습
  - [ ] 모달창을 만드는 방법 찾아보기
  - [ ] 모달창을 띄웠을 때 배경 딤처리 하는 방법 찾아보기
- [ ] 슬라이딩 학습
  - [ ] 유한 슬라이딩에 대해 찾아보기
  - [ ] 유한 슬라이딩을 무한 슬라이딩으로 구현하는 방법 찾아보기
- [ ] 애니메이션 학습
  - [ ] css 애니메이션 관련 속성에 대해 학습하기
  - [ ] javascript로 애니메이션 만드는 방법에 대해 학습하기
  - [ ] 애니메이션을 활용할 방법에 대해 찾아보기

## 구현 계획

- [ ] 상단 네비게이션바 만들기
  - [ ] html 마크업, CSS작성
    - [ ] 화면의 가로 사이즈가 1120px 이상 길어지면 검색바가 길어지며 거로사이즈에 맞춰 늘어난다.
      - [ ] 본문 영역은 1120px로 고정비를 유지하도록 한다.
    - [ ] 로고
    - [ ] 배송처 영역
      - [ ] 마우스를 호버 하면 주소 변경에 대한 레이어가 뜨도록 한다.
        - [ ] 레이어가 뜰 때 배경 딤처리
      - [ ] 호버가 풀리면 레이어, 효과가 사라져야 한다.
    - [ ] 검색바
      - [ ] placeholder → ‘검색 Amazon’
      - [ ] 검색바를 클릭할 시 추천 검색어 10개 레이어가 뜨도록 한다.
        - [ ] 배경을 딤처리 한다.
        - [ ] 화살표 위, 아래키로 추천검색어 목록 이동할 수 있게 한다.
          - [ ] 배경색으로 현재 포커싱 목록 표시.
      - [ ] 검색어 입력 시, 검색바 아래로 실시간 자동완성 10개까지 표시하는 레이어가 뜨도록 한다.(실제 작동하진 않아도 됨.)
        - [ ] 화살표 위, 아래키로 자동완성 목록을 이동할 수 있게 한다.
          - [ ] 배경색으로 현재 포커싱 목록 표시.
      - [ ] 검색한 내역은 최대 5개까지 검색창에서 보이도록 한다.
        - [ ] 검색한 내역은 추천 검색어 위에 표시된다.
        - [ ] 우측의 x버튼으로 삭제 기능 추가
          - [ ] 삭제를 해도 추천 검색어 10개는 계속 표시되어야 한다.
        - [ ] 검색 내역, 추천 검색어를 화살표 키로 이동 할 수 있어야 한다.
          - [ ] 배경색으로 포커싱 목록 표시.
    - [ ] 로그인 영역
      - [ ] 메인페이지 처음 진입 1초 후 상단바에서 레이어로 로그인 버튼이 스르륵 보이도록 한다.
        - [ ] 레이어는 로그인 영역에 호버하기 전까지 유지.
      - [ ] 로그인 영역에 호버 시 확장된 버전의 레이어가 뜨도록 한다.
        - [ ] 레이어가 뜰 때 배경 딤처리
      - [ ] 호버가 풀리면 레이어, 효과가 사라져야 한다.
- [ ] 메인 페이지
  - [ ] html 마크업, CSS 파일 작성
  - [ ] 히어로 영역
    - [ ] 히어로 영역은 무한 슬라이더로 구현
      - [ ] 좌, 우 화살표를 통해 내용을 계속해서 변경이 가능해야 한다.
      - [ ] 좌, 우 화살표를 누르지 않아도 10초마다 다음 내용으로 넘어가야 한다.
  - [ ] 콘텐츠 영역
    - [ ] 이미지의 사이즈에 따라 콘텐츠의 높이가 다르게 적용되도록 한다.
    - [ ] 로딩 인디케이터를 활용하여 메인페이지에 진입했을 때, 스크롤을 내렸을 때 총 2번 사용될 수 있도록 한다.
- [ ] 사이드바
  - [ ] 상단바
    - [ ] 상단바의 모두 버튼을 누르면 좌측에 카테고리 사이드바가 애니메이션 효과와 함께 나온다.
      - [ ] 로그인 버튼 동작x
      - [ ] x 버튼으로 애니메이션과 함께 사이드바가 닫히도록 한다.
      - [ ] 사이드바의 각 목록은 호버 시 배경, 아이콘 색이 변하는 효과를 준다.
      - [ ] 목록의 모두보기를 누르면 접혀있는 카토고리들이 아래로 펼쳐지며 펼쳐지는 애니메이션 적용
        - [ ] 간단히 보기를 누르면 접히면서 접히는 애니메이션 적용.
      - [ ] 부서별 쇼핑 하위의 카테고리는 누르면 상세 카테고리 내역이 보이도록 애니메이션 처리한다.
        - [ ] 각 카테고리 항목은 실제 작동X

## 구현과정

1. 개발환경 세팅

- eslint: 혼자 처음 하려다 보니 찾아보고 하는데 시간을 너무 많이 빼았김
- sass: 중간에 오류도 나고 @use로 폴더 자체를 임포트 하는게 안돼서 시간을 너무 많이 빼았김(아직 해결하지 못함)
- icon 미리 다운받아 놓음
- 폴더, 파일 나누기에 대해 찾아보고 일부 적용함

2. style 작성

- html nav 영역 마크업 작성
  - nav 영역 css 작성
