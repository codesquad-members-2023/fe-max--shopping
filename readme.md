# 🌴아마존

# 학습계획
- [x] SCSS에 대해 공부한다
- [] 모달영역 처리에 대해 고민한다
- [] 무한 슬라이딩 동작 방식을 알아본다
- [] 애니메이션 구현 방식 차이를 알아본다
  - [] js와 css 구현의 차이
  - [] css 애니메이션
- [] 뷰포트에 대해서
# week 1
- 상단 네비게이션 (모달기능 포함)
  - 기획서 1번 기능
- 히어로 영역 슬라이딩(Carousel)
  - 기획서 2번 기능
  - 무한 슬라이딩으로 동작해야 한다.
  - 데이터는 실제 데이터가 아닌 임의로 구성해도 된다.
- 그외 영역의 HTML,CSS 작업은 나중으로 미룬다.
# week1 TODO
- [] lint, prettier 적용
- [] 화면ui 구성
  - [] 상단바
  - [] 메인 페이지
- [] 상단바
  - [] 상단바의 가로사이즈가 1120px을 넘는경우 화면의 가로사이즈에 맞춰 늘어난다
  - [] 로그인 버튼
    - [] 메인페이지 진입시 1초 뒤, 상단 바 레이어로 로그인 버튼이 보인다
    - [] 스르륵 나타나는 애니메이션 추가
    - [] 상단바에 구성된 **로그인 버튼 영역**에 호버하면 사라진다
    - [] 호버 전까진 보이는 상태가 유지된다
    - [] **로그인 버튼 영역** 호버 하면 확장된 버전의 레이어가 뜬다
    - [] 배경 딤처리 
    - [] 확장 버전 레이어에서 마우스가 벗어나면 사라진다
  - [] 배송처
    - [] 배송처 영역에 호버시 주소 변경 레이어가 뜬다
    - [] 배경 딤처리
    - [] 주소 변경 레이어에서 마우스가 벗어나면 사라진다
- [] 메인페이지
  - [] 히어로 영역
    - [] 무한 슬라이더로 구현
    - [] 좌우 화살표를 통해 내용을 계속해서 변경할 수 있다
    - [] 화살표를 누르지 않는 경우, 10초마다 다음 내용으로 넘어간다
  - [] 콘텐츠 영역 
    - [] 이미지 사이즈에 따라 높이가 달라진다
    - [] 로딩 인디케이터를 사용한다
      - [] 처음 메인 페이지에 진입시
      - [] 스크롤 내릴 때
# 오류
## lint설정중...

1. 터미널 powershell 사용 환경 -> cmd로 변경   

        '' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.

- ctrl+shift+p 
- terminal: select default profile
- command prompt 선택
- vscode 재시작

2. 환경변수 조정

        'eslint'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

- 이전에 윈도우 계정명을 한글에서 영어로 변경
- 환경변수에서 npm의 PATH가 바뀌지 않은 상태였다
- 고급시스템보기 > 환경변수 > PATH > npm경로에 이름부분 변경
- 재부팅

3. .eslintrc.js -> .eslintrc.json

        [error] Invalid configuration file `.eslintrc.js`: require() of ES Module 
        [error] .prettierrc.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.

- es6 모듈 사용중
- .eslintrc.json으로 변경 
- 형식도 json으로 변경


# week1 학습정리
## CSS 전처리기(Preprocessor)
- CSS 문법과 유사하다
- 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등 표준 CSS 보다 훨씬 많은 기능을 사용해서 편리하게 작성 가능

### 사용
전처리기 언어 문법으로 작성 뒤, css로 컴파일 해서 웹으로 동작시킨다

## Sass / scss
개발의 효율을 올리기 위해 등장한 CSS 전처리기 언어
Sass: Syntactically Awesome StyleSheet
- 코드를 css로 해석하는 전처리기로써의 의미
- 문법으로써의 의미
scss: Sass의 3버전에서 등장
- css코드와 유사한 형태를 띄고 있다
- 중괄호, 세미콜론
- 대중적으로 더 많이 사용된다
## 장점

    변수의 사용
    조건문과 반복문
    Import (모듈화)
    Nesting (선택자 반복 작성 줄여주는 기능)
    Mixin (함수 개념)
    Extend/Inheritance (확장/상속)

### 문법은 쓰면서 배워보자!


