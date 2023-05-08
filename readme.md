# 아마존 #5: store와 view의 이별

## 시작하기

`npm install` 후에 `npm run dev`로 css파일과 json-server를 실행시킬 수 있습니다. npm live-server도 포함되어 있었는데 자꾸 최근검색어를 submit 이벤트로 db.json에 추가할 때 파일의 변화를 감지해서 페이지가 새로고침되는 문제가 발생해서 vscode의 extension으로 live-server를 따로 설치해서 실행해 주었네요.

그리고 vscode settings.json 파일에 `"liveServer.settings.ignoreFiles": [ "**/db.json" ],`를 추가해서 새로고침되는 문제를 해결하였습니다.
## 현재 진행상황

- 검색바

    4주차 미션을 진행하면서 기존에 두 개의 클래스로 작성했던 코드들을 MVC 패턴에 맞춰 Model, Controller, 그리고 두 개의 View로 나눠둔 상태입니다. 그리고 View에서 이벤트가 일어났을 때 Model의 변화가 생기면 View가 update되는 간단한 Observer 패턴이 적용되어 있습니다.
    
    View는 검색폼이 있는 검색바 영역과 검색내역들이 렌더링되는 검색 레이어 부분 두 부분으로 나누어져 있고, model의 데이터를 사용해서 화면에 렌더링되는 템플릿을 만들고 이를 화면에 보여줍니다. 또한 View에서 화면에서 발생하는 이벤트들을 등록해주고 있습니다.

    Controller는 model과 view를 인자로 받아서 서로 상호작용할 수 있도록 하고있습니다. 대부분의 비즈니스 로직들과 view에서 등록한 이벤트에 대한 핸들러들이 있습니다. db.json에서 데이터를 fetch 해오는 부분은 별도의 Fetcher라는 클래스로 분리해서 사용중입니다.

    Model은 서버와 통신해서 fetch 해 온 데이터를 담아두거나 view에서 일어나는 이벤트에서 필요한 정보들을 저장해두는 역할을 하고있습니다.

    제가 MVC 패턴을 설계하고 옵저버 패턴을 적용해볼 때 참고했던 글을 아래와 같습니다!

    https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702

    https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8

    
- 히어로 영역

    무한 슬라이드 기능만 구현되도록 해놓은 상태이고 시간마다 자동으로 넘어가는 기능은 아직 추가하지 못했고 MVC로 나누지 못했네요. 일반적인 슬라이더의 로직을 사용하진 않았고 급하게 구현하느라 다른 코드를 이용했습니다. 그래서 좀 특이할 수도 있네요.

    만약 제가 참고했던 영상이 궁금하시면 이 영상을 잠깐 참고하셔도 좋을 것 같습니다. https://youtu.be/6TYkDy54q4E?t=470 7분 50초 부터만 보시면 될 것 같아요!

- 사이드바

    사이드바는 html, css로 레이아웃이랑 단순한 애니메이션만 구현해 둔 상태라 뭐 많이 완성하지 못했네요. 😢

## 코드리뷰로 피드백 받은 부분과 리팩터링 하려 했던 부분

- 기존에 구현했던 히어로 영역을 MVC 패턴을 적용해서 리팩터링

- 나누어져 있는 이벤트의 등록과 핸들러를 View나 Controller 한 곳에 뭉쳐놓고 관리하기 (Colocation이라는 개념에 대해서 알려주셔서 이에 대해 공부해 보려고 했음. https://kentcdodds.com/blog/colocation)

- 검색내역을 새로 렌더링 할 때 전체 데이터들을 받아와서 innerHTML로 템플릿을 통째로 갈아끼우는 방식을 사용하고 있는데 이를 기본 추천검색어, 최근검색어, 자동완성 검색어 들을 각각의 템플릿만 만들어 변경 필요한 부분만 재렌더링 해주는 방식으로 변경해보려 했습니다.

- 적용된 옵저버 패턴을 재사용 가능한 방식으로 리팩터링. Model이 변경될 때 각각의 옵저버에 선택적으로 notify 하는 방식이 아니라 우선 모델에 등록된 모든 obeserver들에게 한번에 notify를 해주고 변경이 필요한 view만 재렌더링 하는 방식으로 수정해보려 했습니다. (https://blog.bitsrc.io/the-observer-pattern-in-javascript-the-key-to-a-reactive-behavior-f28236e50e10)

- 서버와 통신할 때 사용하는 url과 같은 환경 변수들을 .env 파일로 따로 분리해서 사용하기 (브라우저에서 .env와 같은 파일에 담겨있는 환경변수에 접근하려면 Vite나 Webpack과 같은 번들러를 이용해야 한다고 하시네요? 저도 이건 안 써봐서 잘 모르겠습니다... 지금 당장 중요한 건 아닌것 같아요.)

- fetch할 url을 넣어줄 때 뒤에 path부분에 limit과 같은 쿼리를 사용해서 원하는 개수만큼의 데이터를 받아올 수 있다고 해서 이에 대해서 찾아보고 적용해보려 했습니다.