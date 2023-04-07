# 1주차 학습 정리

## Sass란?

- Syntactically Awesome Style Sheets의 약자이다. (문법적으로 어썸한 스타일 시트?)
- CSS의 superset이라고 볼 수 있다.
- 변수, 믹스인, 함수 등을 사용하여 중복 제거, 재사용성을 높일 수 있다.
- Sass는 새로운 css 언어가 아니다. 브라우저는 표준 css만 읽을 수 있어 Sass로 작성한 파일을 트랜스컴파일링 해야 한다.

> 왜 사용하는가?

- css는 규모가 커질수록 코드가 복잡해지고, 중복이 많아지며 유지보수가 불편하다.
- 이를 보완하기 위해 Sass가 나왔다. 변수, 함수, Mixin 등 다양한 기능들이 가능하여 css의 단점을 해결했다.

### Sass 사용방법

- 변수(Variables):
  Sass에서는 변수를 사용할 수 있다.

  ```sass
  css
  $primary-color: #FF5722;

  .button {
    background-color: $primary-color;
  }
  ```

  - Scope: Sass의 경우에도 스코프가 존재한다. 가장 바깥에 작성한 경우 전역변수이고, 블록 안에 작성하면 블록 안에서만 유효하다.
  - Shadowing: 지역 변수는 전역 변수와 같은 이름으로 선언할 수 있다. 이러한 경우 지역 변수가 우선시 된다.

- 중첩(Nesting): 부모를 따로 작성할 필요 없이 중괄호 안에 자식을 중첩하여 작성이 가능하다. 규칙 중첩, 속성 중첩, 두 가지 문법이 있다.

  ```sass
  // CSS
  .container {
    margin-top: 10px;
  }

  .container .item {
    padding: 10px;
  }

  // Sass, 규칙 중첩
  .container {
    margin-top: 10px;

    .item {
      padding: 10px;
    }
  }

  // Sass, 속성 중첩
  h1 {
      font: {
          family: 'Malgun Gothic';
          size: 25px;
          style: normal;
          weight: bold;
      }
      line-height: 1;
  }
  ```

  - 중첩 기능은 유용하지만 깊이가 깊을수록 가독성은 떨어질 수 있다. 깊이를 얕게 유지하는 것이 중요하다.

- 믹스인(Mixin): 함수와 비슷한 동작을 하는 문법, css에서 반복적으로 재사용할 css 스타일 그룹 선언을 정의하는 기능을 한다. 마치 class의 상속과 같은 느낌이다.

  - 기본 문법

    ```sass
    // @mixin - 스타일 정의
    @mixin 믹스인 이름 {
    	//CSS 스타일 내용
    }

    // @include - 믹스인 호출
    @include 믹스인 이름
    ```

  - 인수(Arguments)

    - mixin은 함수처럼 인수를 가질 수 있다.

    ```sass
    // 정의하기
    @mixin 믹스인 이름($매개변수) {
    	//CSS 스타일 내용
    }

    // 호출하기
    @include 믹스인 이름(인수);
    ```

### REF

[Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)

[[SassㆍSCSS] SASS 문법 1편 - 중첩 규칙과 선택자](https://www.biew.co.kr/entry/SassㆍSCSSSASS-문법-중첩규칙과-선택자)

[[SassㆍSCSS] SASS 문법 6편 - @mixin, @extend, @import](https://www.biew.co.kr/entry/SassㆍSCSS-SASS-문법-5편-mixin-extend-import)

## 웹 애니메이션

HTML, CSS, JavaScript를 이용하여 웹 페이지에서 동적인 움직임을 만드는 기술이다. 웹 애니메이션을 사용하면 사용자 친화적인 UI/UX를 구현할 수 있다.

### 애니메이션

애니메이션은 연속된 frame의 처리다.

![Untitled](https://user-images.githubusercontent.com/57666791/229451593-5af8216a-65de-4a10-8ad3-a271da0b59d3.png)

### VSync(vertical synchronization)와 fps

VSync는 그래픽카드의 프레임생성과 모니터의 출력타이밍간의 차이가 있을 때 이를 동기화시켜서 매끄러운 영상을 제공하는데 그 목적이 있다.

브라우저 JavaScript개발에서는 requestAnimationFrame을 사용하면 VSync에 맞춰서 seamless한 애니메이션 UI를 구현할 수 있다.

### 자바스크립트로 애니메이션 구현하는 방법

- setInterval
- setTimeout
- requestAnimationFrame
- Animations API

### requestAnimationFrame()

브라우저가 다음 프레임을 렌더링하기 전에 애니메이션 프레임을 호출하는 방식으로 동작한다.

> 왜 사용하는가?

- 브라우저의 성능을 최적화할 수 있어서
- setInterval은 직접 함수 호출 간격을 시간으로 조절하지만 requestAnimationFrame은 사용자의 모니터 주사율에 따르게 되어 효율적인 호출 횟수를 가지게 된다.

> 어떻게 사용하는가?

```jsx
window.requestAnimationFrame(callback);
```

mdn 예시

```jsx
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
element.style.position = "absolute";

function step(timestamp) {
  // DOMHighResTimeStamp 값이 첫번째 인자로 들어온다
  if (!start) start = timestamp; // start 값을 기억해 시간을 계산할 수 있다
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step); // 재귀로 호출해야 계속해서 렌더링을 할 수 있다
  }
}

window.requestAnimationFrame(step);
```

callback에 하나의 인자가 전달되는데, `DOMHighResTimeStamp`라는 타임스탬프가 전달된다.
`DOMHighResTimeStamp`은 timeorigin을 기준으로 얼마나 시간이 지났는지 나타내는 타입이다.
이 타임스탬프를 활용하여 시작시간을 알 수 있어 원하는 시간이 지나고 끊을 수 있게 구현할 수 있다.
`DOMHighResTimeStamp`값은 `window.performance.now()`에 의해 반환되는 것과 유사하다.

대부분의 최신 브라우저에서는 성능과 배터리 수명 향상을 위해 `requestAnimationFrame()`호출은 백그라운드 탭이나 hidden `<iframe>`에서 실행이 중단한다.

반환 값으로 고유한 id를 반환하는데, 이 값을 `window.cancelAnimationFrame()`에 전달해 콜백 요청을 취소할 수 있다.

### 더 빠른 애니메이션

브라우저 렌더링 과정은 요약하면 아래와 같다.

**JavaScript 실행 -> layout 계산 -> render tree -> paint -> composite**

composite 단계에서의 변화만으로 애니메이션을 구현한다면 더 빠르게 동작한다.
composite 단계의 변화를 줄 수 있는 css 속성은 아래와 같다.

1. transform: 2D 및 3D 변환 효과를 적용한다. transform 속성은 layout과 paint 단계를 건너뛰고 바로 composite 단계에서 수행된다.
2. opacity: 요소의 투명도를 조절한다. opacity 속성도 layout과 paint 단계를 건너뛰고 바로 composite 단계에서 수행된다.

### transition

element의 두 가지 상태 사이에 변화를 줄 수 있다. css 변화를 이어주는 역할이라고 볼 수 있다.

### transform

element를 변형시킨다. 대표적으로 회전, 크기 조절, 기울기, 이동 효과를 부여할 수 있다.

### REF

[window.requestAnimationFrame() - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/window/requestAnimationFrame)

[requestAnimationFrame 활용 (상)](https://velog.io/@younghwanjoe/requestAnimationFrame을-사용하여-애니메이션-구현하기-상)

[transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

[transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
