### **🔑 2주차 키워드**

`OOP` `this` `웹서버` `클래스` `캡슐화` `상속` `다형성` `추상화`  
`object literal` `bind` `call` `json` `prototype` `__proto__`

### **📰 구현 사항 정리**

- 무한 슬라이더를 구현했다
- 매직 넘버의 변수화, 함수의 분리에 신경썼다

### **🔥 새롭게 배운 점 - 키워드 및 요약**

- transition
  - `transition: transform 1s ease-in-out`과 같이 애니메이션을 넣을 속성에만 접근하는 것이 권장된다
  - 디폴트 값은 all이며, all을 사용할 경우, 의도치 않은 오류가 발생할 수 있다

- gitignore 시 이미 커밋된 파일은 gitignore에 추가해도 계속 추적된다
  - 해결하려면 commit을 취소해야 한다

- carousel slide 구현
  - slider 처음과 마지막에 fake item 을 활용할 수 있다
    - 양 끝의 애니메이션을 자연스럽게 해준다
    - 각 fake item에 도착했을 때, 반대편의 real item으로 텔레포트 하는 것이 무한 슬라이더의 핵심이다
  - 참고: https://velog.io/@wjddnjswjd12/javascript%EB%A1%9C-carousel-slide-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0

### **🤔 생각해볼 거리**

- 시간이 남는다면 이전 함수형으로 구현했던 모달 이벤트 역시 객체지향으로 구현해본다
- 웹서버에 대해 알아본다 - express?
- class의 상속인 extands에 대해 제대로 학습한다
- bind와 call로 this를 변경하는 방법에 대해 알아본다

### **🗒️ 질문 노트**

- 매직 넘버
  - 매직 넘버를 최대한 변수화 시켰는데, 더 이상 변수화 시키기 애매하거나 변수명 짓기 어려운 것들은 어떻게 처리하면 좋을까요?
    - `lastIndex = length - 1` <- 에서의 '1'과 같은 경우입니다
    - 변수화 시키기 애매하거나 어렵다고 생각한 이유는 `length - 1` 자체가 `lastIndex` 라고 생각하기 때문입니다
    - [예시) 29번째 줄 오른쪽 구문 '1'](../src/js/carousel/carousel-event.js) 

- 커밋 단위

