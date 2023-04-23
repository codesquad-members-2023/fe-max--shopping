# 3주차 학습 정리

# Promise

Promise는 생성된 시점에는 알려지지 않았을 수도 있는 값을 위하여 대신 들어가는 값으로 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 연결할 수 있다.

최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 ‘약속(프로미스)’를 반환한다.

### Promise 상태

- 대기(_pending)_: 이행하지도, 거부하지도 않은 초기 상태.
- 이행(_fulfilled)_: 연산이 성공적으로 완료됨.
- 거부(_rejected)_: 연산이 실패함.

### Promise 문법

```jsx
let promise = new Promise((resolve, reject) => {
  // executor
});
```

### executor(실행자, 실행 함수)

- `new Promise`에 전달되는 함수는 `executor(실행자, 실행 함수)`라고 부른다.
- `executor`는 `new Promise`가 만들어질 때 자동으로 실행된다.
- `executor`의 인수 `resolve`와 `reject`는 자바스크립트에서 자체 제공하는 콜백이다.
- `executor`에선 결과를 즉시 얻든 늦게 얻든 상관없이 상황에 따라 인수로 넘겨준 콜백(`resolve`, `reject`) 중 하나는 반드시 호출해야 한다. → 안하면 계속 `pending` 상태일테니…

### resolve와 reject

- `resolve(value)`: 일이 성공적으로 끝난 경우 그 결과를 나타내는 `value`와 함께 호출
- `reject(error)`: 에러 발생 시 에러 객체를 나타내는 `error`와 함께 호출
- `resolve`, `reject`를 호출한 순간 이후에 `executor`는 종료된다.(이후에 코드는 무시된다.)
- `resolve`, `reject`는 인수를 하나만 받고 그 이외의 인수는 무시한다.

- `executor`는 아래 그림과 같이 `promise`의 상태를 둘 중 하나로 변화시킨다.
  <img width="592" alt="Untitled" src="https://user-images.githubusercontent.com/57666791/232784009-731c7e10-9344-48c8-9f89-186431f4b5da.png">

### settled와 pending

- 이행(resolved) 혹은 거부(rejected) 상태의 프라미스는 ‘처리된(settled)’ 프라미스라고 부른다.
- 반대되는 프라미스로 '대기(pending)'상태의 프라미스가 있습니다.

## then, catch, finally

### then

- `then()` 메소드는 `Promise` 를 리턴한다.
- 두 개의 콜백 함수를 인수로 받는다.

  - 하나는 `Promise`가 이행(resolve)했을 때, 다른 하나는 거부(reject)했을 때의 위한 콜백 함수입니다.

    ```jsx
    p.then(onFulfilled, onRejected);

    p.then(
      function (value) {
        // 이행
      },
      function (reason) {
        // 거부
      }
    );
    ```

    - onFulfilled
      - Promise가 수행될 때(resolve) 호출되는 콜백 함수로, **이행 값(fulfillment value)**을 하나를 인수로 받는다.
    - onRejected
      - Promise가 거부될 때(reject) 호출되는 콜백 함수로, **거부 이유(rejection reason)** 하나를 인수로 받는다.
      - 보통 이걸 사용하지 않고 `catch`를 사용하는듯?
      - `.catch(f)`는 문법이 간결하다는 점만 빼고 `.then(null,f)`과 완벽하게 같다.

### catch

- `catch()`메소드는 에러가 발생한 경우만 다루고 싶다면 사용한다.
- `catch`문에 `Error` 객체를 리턴하는 것이 권장한다. 디버깅 과정에서 에러의 원인 파악을 용이하게 하기 위해서이다. Error 객체는 엘
- `Promise`에서 `catch`문에 `Error` 객체를 리턴하는 것은 디버깅 과정에서 에러의 원인 파악을 용이하게 하기 위해서입니다. `Error` 객체는 에러에 대한 정보를 담고 있으며, `catch`문에서 이를 출력하면 에러의 메시지, 발생 위치 등을 확인할 수 있습니다.

### finally

- `finally()` 메소드는 `try catch`문에 `finally` 절이 있는 것처럼 `Promise`에도 `finally`가 있다.

## Promise()

새로운 Promise 객체를 생성한다. 주로 promise를 지원하지 않는 함수를 감쌀 때 사용한다.

## Promise.all()

순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행한(resolved) 새로운 Promise를 반환한다.

반환하는 프로미스가 이행한다면, 매개변수로 제공한 프로미스 각각의 이행 값을 모두 모아놓은 배열로 이행한다. 배열 요소의 순서는 매개변수에 지정한 프로미스의 순서를 유지한다.

주어진 프로미스 중 하나가 reject 된 경우, 즉시 reject 한다. 첫 번째로 reject한 프로미스의 이유를 사용해 자신도 거부한다.(실패 우선성)

## Promise.allSettled()

주어진 모든 프로미스가 처리(이행 또는 거부) 될 때까지 대기하는 새로운 프로미스를 반환한다.

`Promise.allSettled()`가 반환하는 프로미스는 매개변수로 제공한 모든 프로미스가 각각의 상태와 값(또는 거부 사유)을 모아놓은 배열로 이행한다.

## Promise.any()

주어진 모든 프로미스 중 하나라도 이행하는 순간, 즉시 그 프로미스의 값으로 이행하는 새로운 프로미스를 반환한다.

가장 먼저 완료되는 Promise가 실패한 경우, `Promise.any`는 다른 Promise가 성공할 때까지 기다린다. 따라서, 모든 Promise가 실패한 경우에만 `Promise.any`가 실패한다.

# Fetch

**Fetch API**는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다. `[XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)`
와 같은 비슷한 API가 존재합니다만, 새로운 Fetch API는 좀더 강력하고 유연한 조작이 가능합니다.

## AJAX

AJAX(**A**synchronous **J**avaScript **A**nd **X**ML, 비동기적 JavaScript와 XML)라는 용어를 들어보신 분이 있으실 겁니다. AJAX는 서버에서 추가 정보를 비동기적으로 가져올 수 있게 해주는 포괄적인 기술을 나타내는 용어로, 만들어진 지 오래되었습니다. AJAX에 XML이 포함된 이유가 바로 이 때문이죠.

## fetch() 기본 문법

```jsx
let promise = fetch(url, [options]);
```

- **`url`** – 접근하고자 하는 URL
- **`options`** – 선택 매개변수, method나 header 등을 지정할 수 있음

`options`에 아무것도 넘기지 않으면 요청은 `GET` 메서드로 진행되어 `url`로부터 콘텐츠가 다운로드 됩니다.

`fetch()`를 호출하면 브라우저는 네트워크 요청을 보내고 프라미스가 반환됩니다. 반환되는 프라미스는 `fetch()`를 호출하는 코드에서 사용됩니다.

### fetch()의 응답

응답은 대개 두 단계를 거쳐 진행된다.

1. **먼저, 서버에서 응답 헤더를 받자마자 `fetch` 호출 시 반환받은 `promise`가 내장 클래스 [Response](https://fetch.spec.whatwg.org/#response-class)의 인스턴스와 함께 이행 상태가 됩니다.**
2. **두 번째 단계에선 추가 메서드를 호출해 응답 본문을 받습니다.**

[Fetch API - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

[fetch](https://ko.javascript.info/fetch)
