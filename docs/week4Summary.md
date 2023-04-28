# 4주차 학습 정리

## ES Module

### 도입 배경

초기의 자바스크립트는 작게 시작되었고, 대부분의 스크립트는 독립적인 작업을 수행했고 큰 스크립트가 필요하지 않았다.

하지만 몇년 후 자바스크립트는 완전한 애플리케이션을 실행할 수 있게 되는 등 사이즈가 커지게 되어 모듈 분할의 필요성이 대두되었다.

그 시도는 다음과 같은 모듈 시스템으로 이어졌다.

- [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) – 가장 오래된 모듈 시스템 중 하나로 [require.js](http://requirejs.org/)라는 라이브러리를 통해 처음 개발되었다.
- [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) – Node.js 서버를 위해 만들어진 모듈 시스템이다.
- [UMD](https://github.com/umdjs/umd) – AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 만들어졌다.

그리고 ES6부터 모듈 기능을 지원하기 시작했다.

### 모듈이란

모듈은 단지 파일 하나에 불과하다. 스크립트 하나는 모듈 하나이다.

### 모듈 사용법

HTML 페이지에 `<script>` 요소에 `type=”module”`을 포함시켜야 한다.

기본적으로 모듈 기능을 가져오는 스크립트는 최상위 모듈로 작동한다.

`export`와 `import`를 통해서 모듈 간의 변수를 공유할 수 있다.

### 모듈 사용 주의사항

- HTML 파일을 로컬에서 로드하려고하면, 자바스크립트 모듈 보안 요구 사항으로 인해 CORS 에러가 발생한다. 서버를 통해 테스트 해야한다.
- 모듈은 `strict mode`를 사용한다.
- 모듈 스크립트를 불러올 때 `defer` 속성을 사용할 필요가 없다. 모듈은 자동으로 `defer` 된다.

### 모듈 레벨 스코프

모듈은 자신만의 스코프가 있다. 모듈 외부에선 내부의 변수나 함수에 접근할 수 없다.

외부에 공개하려는 모듈은 꼭 `export` 해야하고, 내보내진 모듈을 사용하려면 `import` 해줘야 한다.

이로 인해 코드들을 각각 독립적으로 작동할 수 있는 단위로 나누기 수월해진다.

### 모듈의 최상위 this는 undefined이다.

일반 스크립트의 this는 전역 객체인 것과 대조된다.

## MVC 패턴

- Model + View + Controller를 합친 용어
  - Model: 데이터와 비즈니스 로직을 관리한다.
  - View: UI와 관련된 로직을 처리한다.
  - Controller: 사용자의 입력(Action)을 받고 Model과 View의 데이터를 받아 로직을 수행한다.

![image](https://user-images.githubusercontent.com/57666791/235055347-4288238f-9ed4-4cd6-82c1-49d57365002d.png)

Model, View, Controller 간의 관심사를 분리하고, 각각이 독립적으로 동작하고 유지 관리가 쉬워지도록 하는 것이다. 이를 통해 시스템이 확장성 있고, 테스트하기 쉽고, 유지 관리가 용이한 구조를 가질 수 있다.

### MVC 장점

- 가장 단순한 패턴이고, 단순한만큼 보편적으로 많이 사용되는 패턴이다.

### MVC 단점

- 뷰와 모델이 서로 직접적으로 연결되어 View와 Model 사이의 의존성이 높다. 이러한 구조는 유지 보수의 어려움이 생긴다.

## MVP 패턴

- MVC 패턴의 단점을 보완하고자 나온 패턴
- Model + View + Presenter를 합친 용어
- Model과 View의 역할은 MVC와 동일하다.
- Presenter: View에서 요청한 정보로 Model에게 정보를 전달, 요청하고 받은 정보를 View에 제공하는 식으로 View와 Model을 연결하는 역할을 한다.

![image](https://user-images.githubusercontent.com/57666791/235055362-fd8cf50e-3522-475d-b32f-298feb8ba94a.png)

### MVP 장점

- View와 Model의 의존성이 없다. Presenter를 통해서만 데이터를 전달받기 때문

### MVP 단점

- View와 Model의 의존성을 제거했으나, View와 Presenter 사이의 의존성이 높아졌다.

## MVVM 패턴

- Model + View + View Model을 합친 용어
- Model과 View의 역할은 위의 패턴과 같다.
- View Model: View를 위한 Model. View를 나타내기 위한 데이터 처리를 담당한다.
- Command 패턴과 Data Binding 두 가지 패턴을 사용하여 View와 View Model 사이의 의존성을 없앴다.

![image](https://user-images.githubusercontent.com/57666791/235055406-4e0c46bd-2a4e-43d6-9b5c-fa8d523274db.png)

### MVVM 장점

- View와 Model 사이의 의존성이 없으며, View와 ViewModel 사이의 의존성 또한 없앴다.
- 각각의 부분이 독립적이기 때문에 모듈화하여 개발할 수 있다.

### MVVM 단점

- View Model의 설계가 쉽지 않다.
