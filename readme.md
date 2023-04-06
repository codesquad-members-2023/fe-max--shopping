# 🛒 아마존 쇼핑몰
## 🎯 학습 목표

- sass 문법을 다양한 방식으로 적용하고 이해하기
- 모달의 작동 방식을 이해하고 구현하기
- DOM 조작으로 Carousel 구현하기
- 애니메이션 관련 CSS 속성을 이해하고 부드러운 전환 동작 구현해보기

## 🔨 작업 리스트

### 🧭 **상단 네비게이션바**

- [x] HTML, Sass로 상단 네비게이션 바의 기본 구조를 만든다.
- [x] 메인 페이지에 처음 진입하면 1초 뒤 로그인 모달이 나타난다.
  - [x] 로그인 모달 Element를 생성한다.
  - [x] 모달이 나타나는 동작을 로드 이벤트에 등록한다.
- [x] 로그인 영역에 마우스를 올리면 로그인 모달을 확장하고 배경을 딤처리 한다.
  - [x] 로그인 모달 확장.
  - [x] 배경 딤처리.
- [x] 주소 영역에 마우스를 올릴 때의 기능.
  - [x] 주소 모달이 나타난다.
  - [x] 배경 딤처리.
- [x] 마우스가 로그인 영역과 모달을 벗어나면 모든 레이어와 효과가 사라진다.
- [x] 모달이 나타나고 사라지고 확장하는 동작은 끊김없이 부드럽게 이루어진다.
- [x] 화면의 가로 사이즈가 1120px 이상으로 늘어날 경우, 검색바가 길어지며 사이즈에 맞춰진다.

### 🎠 **히어로 영역**

- [ ] 좌우 화살표를 클릭하면 내용을 변경한다.
- [ ] 화살표를 누르지 않는 경우, 10초 후 다음 내용으로 넘어간다.
- [ ] 넘어가는 동작은 끊김없이 부드럽게 이루어진다.
- [ ] 무한히 내용을 반복해서 보여준다.
- [ ] 콘텐츠가 임의로 늘어나도 동작한다.

## 🔑 기술 키워드

- CSS 전처리기(sass/scss)
- 웹 애니메이션
- HTMLDialogElement

## 🎊 고민과 해결
