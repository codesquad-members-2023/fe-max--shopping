### **📰 구현 사항 정리**

### **🔥 새롭게 배운 점 - 키워드 및 요약**

-  모듈화 & 컴포넌트(component)

```markdown
- 모듈화
  1. 소프트웨어 개발에서 코드를 작은 조각으로 나누는 것이다
  2. 유지보수성, 재사용성, 테스트 용이성, 개발 생산성 등의 이점 제공한다
  3. 함수와 클래스, 파일 분할, 라이브러리, 프레임워크 등의 방법으로 이루어진다

- 컴포넌트(component)
  1. 소프트웨어 개발에서 재사용 가능한 코드 조각이다
  2. 비슷한 기능을 수행하는 모듈을 하나로 묶어서 사용하는 방식이다
  3. 유지보수와 코드 재사용이 쉬워지며 개발 생산성이 높아진다
  4. 컴포넌트는 독립적으로 작동하며, 다른 컴포넌트에 영향을 주지 않는다

- 공통점
  1. 둘 다 코드를 작은 조각으로 나누는 것을 말한다
  2. 코드를 효율적으로 관리하고 재사용 가능한 형태로 만들어준다

- 차이점
  - 검색어 : modular vs component in software development
    1. https://softwareengineering.stackexchange.com/questions/178927/is-there-a-difference-between-a-component-and-a-module
    2. https://stackoverflow.com/questions/2702816/module-vs-component-design
  - 나의 요약
    1. 부족한 독해력과 짧은 영어 실력으로 인해 결론을 내리지 못했다
    2. 용어를 자주 접하며 직접 느껴보자
```

- SCSS
  - 참고 링크 : https://heropy.blog/2018/01/31/sass/
  - SCSS 선택 이유 : CSS와 거의 같은 문법으로 SASS 기능을 지원 하기 때문에 선택했다
  - 주석 처리 법
    1. // 컴파일 되지 않는 주석
    2. /* 컴파일 되는 주석 */
    
  - 중첩

    ```SCSS
    .section {
      ... // ... => 속성과 속성값을 생략한 구문
      // 상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조를 작성할 수 있다
      .list {
        ...
        li {...}
        // 중첩 안에서 & 키워드를 통해 상위 선택자를 참조하여 치환한다
        &:last-child {...}
        // 중첩에서 벗어나고 싶을 때 @at-root 키워드를 사용한다
        @at-root .box {...}
      }
    }
    ```
  
  - 변수
    - 반복적으로 사용되는 값을 변수로 지정할 수 있다
    - 변수 이름 앞에는 항상 \$를 붙인다 -> $변수이름: 속성값;
    - 선언된 블록 내에서만 유효한 범위를 가진다
    - !global을 사용하여 변수의 유효범위를 전역으로 설정 가능하다
    - !default를 사용하여 할당되지 않은 변수의 초기값을 설정한다
    - #{}를 이용하여 코드 어디든지 변수 값을 넣을 수 있다
    - 변수에 변수를 할당할 수 있다

      ```SCSS
      $red: #FF0000;
      $color-red: $red;
      .box {
        color: $color-red;
      }
      ```

  - import와 파일 분할
    - @import "header", "footer"; 와 같이 여러 파일을 가져올 수 있다
    - import할 파일 이름 앞에 _를 붙이면 각각의 파일이 별도로 컴파일 되지 않고, 한번에 컴파일 된다(추천)
  - 재활용(mixin)
    - 스타일 시트 전체에서 재사용할 css 선언 그룹을 정의하는 기능이다
    - @mixin(선언하기)와 @include(포함하기, 사용하기)로 활용한다
    - 선택자를 포함할 수 있으며, 상위 요소 참조(&) 등도 할 수 있다
    - 함수처럼 인수를 가질 수 있다, 기본값을 설정해 주는 것이 좋다, 가변인수 또한 활용 가능하다

    ```SCSS
    $color: black;
    $backgroudColor: gray;

    // mixin 선언하기
    @mixin large-text($color, $backgroundColor) {
      color: $color;
      background-color: $backgroundColor;
      font-size: 22px;
      font-weight: bold;
    }

    h1 {
      // mixin 사용하기
      @include large-text;
    }
    ```

  - 확장(extend)
    - 특정 선택자가 다른 선택자의 스타일을 가져야 할 때 사용 가능하다
    - 사용을 권장하지 않는다, mixin을 대신 사용하도록 한다  
    -> 한번의 확장으로 엄청난 크기의 CSS가 생성되는 등 원치 않는 부작용이 초래될 수 있다

    ```SCSS
    .btn {
      padding: 10px;
      margin: 10px;
      background: blue;
    }
    .btn-danger {
      @extend .btn;
      background: red;
    }
    ```

  - 함수와 조건, 반복등의 기능도 사용 가능하다

- dialog 태그
  - 모달을 구현할 때 사용한다
  - 대화 상자의 형태로 나타나며, 사용자와 상호작용 할 때 필요한 정보나 작업을 보여준다
  - form과 같은 방식으로 작동한다
  - 태그를 선언해도 아무 일도 일어나지 않고, 자바스크립트를 통해 조작 가능하다
  - 내장된 showModal()과 close() 메서드를 사용 가능하다

- Carousel(slider)
  - 이미지, 제품등의 컨텐츠를 일렬로 나열하고 사용자가 좌우로 슬라이드 하여 콘텐츠를 탐색할 수 있는 웹 요소이다
  - 추천 검색어 : carousel slider in javascript

### **🤔 생각해볼 거리**
