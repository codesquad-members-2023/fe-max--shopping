# 아마존

## 1주차

- 상단 네비게이션 (모달 포함)
- 히어로 슬라이딩 (Carousel)
- SCSS, SASS 학습

## 상단 네비게이션

- [x] 상단 네비게이션 마크업

- [ ] 로그인 툴팁
  - [x] 페이지 로드 1초뒤, 툴팁이 스르륵 보이도록 한다.
  - [ ] 로그인 영역에 호버하기 전까지 유지된다.
  - [ ] 로그인 영역에 호버하면 확장된 툴팁이 뜨게한다.
    - [ ] 배경 딤처리
- [ ] 배송처 툴팁
  - [ ] 배송처 영역에 호버하면 주소 변경에 대한 툴팁이 뜨도록한다.
    - [ ] 배경은 딤처리
- [ ] 모든 호버 영역에 마우스가 벗어나면 모든 레이어 효과가 사라진다.
- [ ] 상단바는 화면 1120px 이상 늘어나면 검색바가 늘어난다.
- [ ] 메인 영역은 1120px 유지한다.

## 5주차

# **유지보수와 리팩토링**

짝과 서로의 코드를 바꿔서 유지보수, 리팩토링 한다

## 컨셉

1. class를 이용해 프로그래밍한다.
2. queryselector를 사용하지 않는다.
   1. Base라는 상속받을 class에서 node를 보관하고 사용한다.
3. innerHTML 사용하지 않는다.
   1. node를 직접 트리구조로 만든 뒤 body에 append한다.
4. 일정 기준의 크기의 component를 HTMLparser와 Base 이용해 template(html string)을 받아 파싱하여 노드로 만들어 사용한다.
   1. 컨트롤이 필요한 노드는 data-elementname이라는 dataset을 주며 class 내에서 컨트롤할 수 있게 한다.

- 참고 : [https://github.com/codesquad-members-2023/fe-max--shopping/pull/17]

## 수정 고민하던 부분

- 오타 수정
- html 태그 적절한 시멘틱 태그로 수정하기
- 로그인 모달창 툴팁창 mouseover시 이벤트 안 일어나게 하기
- backdrop의 딤처리 영역이 크게 2가지 종류가 있는데 이 2가지 경우를 하나의 backdrop으로 해결 하기
- 옵저버가 App에서 시작해 자식에 자식에 자식에 자식까지 타고 내려가는 드릴링이 관리가 너무 힘들다. 어떻게 수정할까

```jsx
App ┬ Header ─ NavBar  ┬  shipping - layer
    │                  ├  input    - layer
    │                  └  login    - layer
    └ Main  ─ SideBar
```

- scss 깔끔하게 사용하기
- 학습을 위해 mvc, mvvm 두가지가 함께 있는데 둘중 하나로 통일하기
  - sidebar에도 둘중 하나의 패턴 적용하기

## 버그

1. sidebar layer 버그가 있습니다.

   1. 모든 레이어는 hide() 메서드가 있습니다.
   2. sidebar layer hide 메서드는 다음과 같습니다.

      ```
      hide() {
        this.setStyle("transform", "translateX(-100%)");
        this.setEvent(
          "transitionend",
          () => {
            this.setStyle("display", "none");
          },
          { once: true }
        );
        Backdrop.hide();
      }
      ```

   3. 옵저버에서 다른 레이어에서 show가 실행되면 실행된 레이어를 제외한 모든 레이어의 hide를 실행 합니다.
   4. sidebar의 hide는 `transitionend` 가 발생하면 display none을 1회만 해주는 once를 사용합니다.
   5. 만약 Layer가 이미 none인 상태라면 이벤트를 추가 되었지만 `transitionend` 는 이벤트가 그대로 남아 있습니다.
   6. 이벤트가 남아 있는 상태에서 sidebar를 show하는 과정에서의 `transitionend` 가 발생하여 show가 되는 동시에 display none이 되어 버립니다.

