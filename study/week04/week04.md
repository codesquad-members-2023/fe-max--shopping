# 4주차 요구사항

- store와 view를 분리하여 모듈화하고 연결한다.
- store와 view가 섞이지 않도록 구현한다 = 로직 내부에서 섞이지 않도록 한다
  - 예시의 controller 주석 처리된 부분 참고하기
- 모듈간 의존성을 줄이기
- ES Modules 를 활용한다.
- 자기만의 방법으로 구조를 설계한다.

# 학습 내용

## 의존성

- 하나의 모듈이 다른 모듈에 의존하는 관계
- parameter나 return값, 또는 지역 변수 등으로 다른 객체를 참조하는 것

## 프론트엔드에서 MVC보다 더 많이 쓰이는 패턴은?

> [프론트엔드에서 MVC보다 더 많이 쓰이는 패턴은?](https://www.youtube.com/watch?v=Y5vOfv67h8A)

### 왜 MVC 패턴을 써야 하는데?

- 목적: 객체간의 의존성을 줄이기 위해서 계층을 나누는 것이다.
- Model과 View의 관계를 느슨하게 만들기 위해서 중간에 컨트롤러를 두는 것

### 백엔드에서의 MVC 패턴

1. Request 분석: 클라이언트(브라우저)의 request를 받는다. (Controller)

   - Routing: request를 분석한다.

1. Data 수집/가공: 필요한 데이터를 수집/가공 (Model)
1. View 생성: 뷰를 생성 (View)
1. 결과 응답: response를 보낸다. (Controller)
1. 의존성 낮추기: Controller만 Model, View를 알고, Model과 View는 서로의 존재를 모른다.

### 프론트에서의 MVC 패턴?

- 루카스 예시: Model, View, Controller의 역할과 구성 이해하기

1. store(Model)

- property: todoList[]
- method
  - `save` : 인자로 받은 데이터를 저장하고, 두번째 인자로 받은 함수를 실행
  - `getData` : 자신의 프로퍼티인 todoList를 내보낸다.

2. view

- `render` : 초기 뷰를 렌더링한다.
- `on` : 버튼 클릭 이벤트 발생 시 getTodoDataHandler함수를 실행한다.
  - 이 함수는 컨트롤러에서

3. otherView

- `render` : 원하는 위치에 인자로 받은 투두리스트 div 태그를 추가한다.

  - 질문: JSON.stringify 왜 해줘야 하는거지?
  - params: todoList 타입? JSON
    - store에도 JSON 타입으로 저장하고 있었어.. 그래서 data인건가봐...

4. controller

- `init`: 초기 view 렌더, view.getTodoDataHandler 할당, view 이벤트 리스너 등록
- `getTodoDataHandler`
  - fetch로 데이터를 받아온 후 받아온 데이터와 `updateOtherView`를 AFTER_FN 값으로 하는 store save 메서드를 실행한다.
- `updateOtherView` : 함수 내부에서 업데이트된 데이터를 다시 지역변수로 저장해서 이 값으로 뷰를 직접 변경하지 않고, store의 두번째 인자로 메서드를 전달하여 view update를 진행한다.

## 프론트엔드에서 MV\* 패턴을 어떻게 적용할 수 있을까?

### 프론트 특징

#### 1. View가 아주 많다.

- 이벤트나 데이터의 변화에 따라 리렌더링이 빈번하게 일어난다.

#### 2. View는 계층적인 구조를 가진다.

- DOM이 트리구조이기 때문에 View 또한 트리구조를 가지게 된다. (컴포넌트 간의 포함 관계)
- 효율적인 리렌더링이 필요하다: 리렌더링이 일어나는 부분을 최소화해야 한다. (DOM 변경은 비용이 비싼 작업)

#### 3. View와 Model이 양방향으로 의존해야 하는 경우가 많다. (양방향 처리가 필요하다.)

1. View의 변경으로 Model을 바꿔야 한다. (사용자 입력값)
2. Model의 변경으로 View를 바꿔야 한다.

### 해결해야 하는 문제

- 복잡한 view와 model 관계를 단순화한다.
- view를 계층적으로 처리하여 DOM 조작을 쉽고 효율적으로 해야 한다.

### 해결 방법

이벤트 등으로 데이터 변경 시 변경된 데이터로 view가 자동 렌더링되는 구조를 만든다.

1. 데이터 바인딩
2. MVVM 패턴 (Vue)
3. Flux 아키텍처 (React)

# 디자인 패턴

## 템플릿 메서드 패턴

- 객체 지향 디자인 패턴
- 상위 클래스에서 구조를 정의하고, 하위 클래스에서 구체적인 내용을 구현하는 패턴

## MVVM 패턴

> [참고 자료](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Server-Side-Rendering/#_3-mvvm-pattern)

### 주요 특징

- Model - View - ViewModel으로 관심사를 분리한다.
- ViewModel은 View의 모습을 본뜬 순수한 데이터 객체이다.
- ViewModel에 변화가 생기면 View에 반영한다.
- Model, ViewModel은 런타임에 독립적이다.
- View는 런타임에 종속적이다. (브라우저 환경, 서버 환경, 앱 등)
- Model과 ViewModel을 기반으로 render를 통해 런타임에 종속된 View를 만든다.

### Model (domain, store)

- 데이터와 데이터를 변경하거나 가져오는 함수 또는 메소드와 같은 비즈니스(service) 로직

### ViewModel

- View와 비슷한 구조를 가진 객체
- 객체는 가독성이 좋지 않기 때문에, JSX와 같이 기존 HTML 구조로 작성하되 내부에서 객체로 컴파일된다.
- 질문: JSX는 어떻게 HTML과 비슷한 구조로 Virtual DOM 객체를 만들까? [참고자료](https://react.dev/reference/react/createElement#creating-an-element-without-jsx)
  - 내부적으로 createElement 함수로
  - `createElement(type, props, ...children)`
    - props: `type`, `props`, `...children`

# 구조 설계

- 현재 구조의 의존성 분석하기
  - 어떤 모듈을 import해서 사용하고 있는지(어떤 모듈에 의존하고 있는지)
- 의존성 낮추기, 어떤 객체가 어떤 객체를 import해서 사용하게 할지
- base Component 클래스 구조 수정하기
- 웹 컴포넌트 만들기 아티클, 루카스 예제 참고해서 구조도 먼저 작성하기
