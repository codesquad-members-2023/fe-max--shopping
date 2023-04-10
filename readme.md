# 🛒 아마존 쇼핑몰
## 🎯 학습 목표

### Week #1
- sass 문법을 다양한 방식으로 적용하고 이해하기
- 모달의 작동 방식을 이해하고 구현하기
- DOM 조작으로 Carousel 구현하기
- 애니메이션 관련 CSS 속성을 이해하고 부드러운 전환 동작 구현해보기

### Week #2
- js 코드의 목적을 기준으로 디렉토리 구조 개선
- 객체지향 프로그래밍이 뭔지, 웹 프론트엔드에서 어떻게 구현할지 찾아보기
- ES Classes 표현 방식 적용
- (추가)`this`가 무엇을 가리키는지 공부
## 🔨 작업 리스트

### **상단 네비게이션바**
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

### **히어로 영역**
- [x] 좌우 화살표를 클릭하면 내용을 변경한다.
- [x] 무한히 내용을 반복해서 보여준다.
- [x] 넘어가는 동작은 끊김없이 부드럽게 이루어진다.
- [x] 화살표를 누르지 않는 경우, 10초 후 다음 내용으로 넘어간다.
- [x] 콘텐츠가 임의로 늘어나도 동작한다.

### **검색창**
- [ ] 검색바를 클릭하면 추천 검색어 10개가 표시된 레이어를 화면에 렌더링한다.
- [ ] 추천 검색어 레이어와 동시에 딤처리 영역을 렌더링한다.
- [ ] 검색어를 입력하면 검색결과를 10개까지 표시한다.
- [ ] 검색한 내역을 최대 5개까지 추천 검색어 레이어에 표시하고 그 아래로 추천 검색어를 10개 표시한다.
- [ ] 키보드의 화살표 키로 검색 내역과 추천 검색어를 이동하면 배경색을 변경한다.

## 🔑 기술 키워드

### Week #1
- CSS 전처리기(sass/scss)
- 웹 애니메이션(requestAnimationFrame/keyframe/transform + transition)
- HTMLDialogElement

### Week #2
- 객체지향 프로그래밍(OOP)
- ES Classes
- `this`

## 🎊 고민과 해결

### Week #1
**JS, CSS 코드가 복잡하고 길어져서 나누고 구조를 잡아줘야 할 것 같다.**
- 히어로 영역 구현이 끝나고 리팩토링을 해봐야겠다.
- 새로 프로젝트를 만드는 것보다 지금 코드를 나눠보라고 추천을 한 이유가 뭘까?(feat.남세)

**모달을 HTML로 미리 작성해놓는게 JS 코드 가독성 면에서 더 좋지 않을까?**
- 모달 이벤트 핸들링 코드보다 DOM Element 만드는 코드가 더 길어서 중요한 로직에 집중할 수 없다.
- HTML로 미리 작성하는 것과 DOM Element를 렌더링 하는 것 중 어느게 성능상으로 더 좋을까?

**로그인/배송지 주소 탭에서 모달로 이동할 때, mouseout 이벤트가 발생하지 않으려면 두 요소를 바짝 붙이는 방법밖에 없을까?**

### Week #2
**js 모듈이 어떤 구조로 나눠져 있으면 이어서 개발하는 사람이 필요한 부분을 편하고 빠르게 찾을 수 있을까?**
- 단순하고 이해하기 쉽기 때문에 가장 일반적인 구조를 선택한다.
  ```
  js/
  │
  ├── components/
  │   ├── modal.js
  │   ├── navbar.js
  │   └── ...
  │
  ├── utils/
  │   ├── constants.js
  │   ├── helpers.js
  │   └── ...
  │
  └── index.js
  ```
- 메인 페이지만 구현하기 때문에 pages 디렉토리는 생략한다. (필요하게 되면 추가할 예정)