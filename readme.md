# 아마존 #4: store와 view의 이별

## ⭐️ 4주차 학습키워드: `#MVC`, `#상태관리`, `#ES Module`, `#결합도`

## 🎯 4주차 학습 목표

- Store와 View를 분리해서 모듈을 만들고 이들을 연결할 수 있다.
- ES Modules를 활용한 모듈개발을 할 수 있다.

## ⌨️ 4주차 학습 및 구현 계획

- [ ]  기존 기능들 중 구현 못한 부분을 완성한다.
    - [ ]  히어로 영역
        - [ ]  이미지 받아오는 부분 json-server에서 받아오도록 변경하기
    - [ ]  검색바 영역
        - [ ]  최근검색어 삭제 기능 추가하기
    - [ ]  사이드바 영역
        - [ ]  초기 데이터와 더보기 데이터를 서버통신으로 가져오도록 구현하기

- [ ]  코드리뷰 받았던 부분 위주로 리팩터링
    - [ ]  `.env`파일로 환경변수 관리하기 ⚠️
    - [ ]  서버통신으로 데이터 요청을 처리하는 코드를 재사용 가능하게 분리해보기
    - [ ]  최근검색어 저장 시 로컬스토리지가 아닌 서버에 post/put 요청으로 처리해보기
    - [x]  받아온 데이터로 렌더링 할 때 어떻게 사용할지 생각해보기
    - [ ]  unshift() 말고 다른 방법 고민하기
    - [x]  검색바에서 결합도 낮출 방법 찾아서 적용하기

- [x] ES Module에 대해서 학습한다. 
- [ ] MVC 패턴에 대해서 학습하고 store와 view 분리하기
    - [x] 검색바 영역
    - [ ] 히어로 영역
    - [ ] 사이드바 영역
- [ ] 모듈간 의존성 낮출 방법 고민하기
## 📚 4주차 학습 정리
### 1) ES Modules

(1) 모듈 방식 프로그래밍이 필요한 이유?

- 복잡한 애플리케이션을 모듈 단위로 만들어서 의존성을 관리하는 프로그래밍 방법
- 이전에는 웹사이트 개발에 사용되는 많은 JS파일들을 다 script 태그로 넣어주었다…
- 웹FE에서 SPA(Single Page Application)의 등장으로 필요성이 커졌다.

(2) 어떤 원리로 작동하는가?

브라우저에서 script 태그로 js파일을 읽어올 때 `type="module"`이 있으면 모듈로 인식하고, 이 파일을 진입점으로 해서 import문을 따라 나머지 연결된 파일들을 읽어온다. (Node에서는 `.mjs`확장자로 알릴 수 있다.)

- Construction(구성 단계): 브라우저의 로더(loader)가 모든 파일들을 찾아서 다운로드하고 파싱해서 모듈 레코드(Module Records)라고 하는 데이터 구조로 변환하는 과정, 다음과 같은 일들이 일어난다.
    - 모듈이 포함된 파일을 어디에서 다운로드할지 파악(aka module resolution)
    - 파일을 fetch 해온다.(URL에서 다운로드하거나 파일 시스템에서 로드)
    - 받아온 파일을 모듈 레코드로 파싱
- Instantiation(인스턴스화): 모듈 레코드를 모듈 인스턴스로 인스턴스화 하는 과정, export된 값들을 넣을 메모리 공간을 할당한다.(단, 아직 값으로 채워지지 않은 빈 공간임.) 그리고 exports와 imports 둘 다 메모리에 있는 같은 공간을 가르키도록 해서 연결한다.
- Evaluation(평가 단계): 코드를 실행해서 메모리 공간에 할당된 함수와 변수에 실제 값을 채우는 과정

![ES_Modules](https://user-images.githubusercontent.com/76121068/233927543-1f71b1ab-77c0-4a95-95a0-8d347588c6c9.png)

- 이러한 모듈화의 세 단계의 과정은 독립적으로 수행될 수 있다. (비동기적으로 이루어 질 수 있으나 반드시 비동기는 아니고 무엇을 불러오냐에 따라 동기적으로 일어날 수도 있다. 기존 Common JS와의 차이점)

> 모듈 인스턴스란?
>
> 코드(Code)와 상태(State)의 결합을 의미한다. 코드가 설명서나 레시피라면, 상태는 무언가를 만들기 위해 사용하는 원재료를 의미한다. 즉 상태는 변수의 실제 값을 의미한다.

### 2) MVC 패턴

(1) MVC란 무엇인가?

백엔드 애플리케이션에 주로 적용되는 전통적인 아키텍쳐로, 프로그램을 짤 때 데이터를 ****정의하는 **모델(model)**, 보여지는 화면을 처리하는 **뷰(view)**, 그리고 모델과 뷰 중간에서 중재하는 역할을 하는 **컨트롤러(controller)**로 이렇게 세 부분으로 분리해서 개발하고 관리하는 소프트웨어 디자인 패턴을 의미한다.

![m-v-c](https://user-images.githubusercontent.com/76121068/234317366-589e02e0-5bf8-45ac-b9af-9788fd019e20.png)

뷰와 모델간에 의존성을 낮추기 위해서 보통 컨트롤러에서 모델로부터 데이터를 가져와서 뷰에 가져온 데이터를 제공하면 뷰는 화면에 이를 렌더링한다.

(2) FE에서의 MVC 패턴

그럼 FE에서도 전통적인 MVC 패턴을 적용할까? 우선 FE에서는 다음과 같은 문제점들이 있다.

- view가 많고 여기서 온갖 이벤트가 발생한다.
- view와 model 간 양방향 처리가 필요하다.
- 이를 중재하기 위해서는 슈퍼 울트라 컨트롤러가 필요하고 복잡해진다.
- 리렌더링을 최소화하기 위해서 view 간의 계층 처리가 필요하다.

따라서 요새는 데이터 바인딩, MVVM 패턴, Flux 아키텍쳐 등과 상태관리를 이용해서 이를 해결하고 있다.

(3) Model

- 상태(state)를 담는 컨테이너
- 비즈니스/도메인 로직을 수행한다.
- 서버로부터 받아온 데이터를 가공하는 역할을 수행한다.

(4) View

- 화면의 렌더링을 담당한다.

![view](https://user-images.githubusercontent.com/76121068/234317445-4c3856f4-fdb3-4627-91bc-9e1fbe725dcf.png)

- 브라우저 기반의 바닐라 JS로 구현하는 경우 HTML과 DOM을 고려해야 한다. 따라서 View는 html 자체와 DOM 요소들을 캡슐화하는 View 클래스로 구성된다.
- 요소들에 이벤트를 걸어준다. (addEventListener로 걸어만 주고 실제 이벤트 핸들러는 컨트롤러에 두기)
## 참고자료

### ES Module

- [https://ui.toast.com/weekly-pick/ko_20180402](https://ui.toast.com/weekly-pick/ko_20180402)

### MVC

- [https://www.youtube.com/watch?v=Y5vOfv67h8A](https://www.youtube.com/watch?v=Y5vOfv67h8A)
- [https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702)
- [https://velog.io/@teo/프론트엔드에서-MV-아키텍쳐란-무엇인가요](https://velog.io/@teo/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-MV-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94)

### 상태관리

- [https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-컴포넌트와-상태관리](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AA-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5)
- [https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Store/#_1-중앙-집중식-상태관리](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Store/#_1-%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%BC-%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5)
- [https://youtu.be/o4meZ7MRd5o](https://youtu.be/o4meZ7MRd5o)
