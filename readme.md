# 🛒 Amazon

<details>
  <summary>1주차</summary>
  
## 📄 학습 키워드

- 1주차

  - [x] CSS 전처리기, SASS(변수, 함수, 믹스인, 중첩 규칙)
  - [x] 웹 애니메이션

## ✅ 체크리스트

- [ ] 상단 네비게이션

  - [x] HTML,CSS
    - [x] 상단바 검색바 사이즈
    - [ ] 본문 영역 사이즈 고정
  - [x] 배송처 영역
    - [x] 호버시 주소 변경 레이어 출현.
    - [x] 각 호버 영역 벗어나면 모든 레이어 & 효과 사라짐
  - [x] 로그인 영역
    - [x] 메인 페이지 진입 1초 뒤 레이어(로그인 버튼) 출현 애니메이션. 로그인 영역에 호버하기 전까지 유지.
    - [x] 호버시 레이어 확장, 배경 딤 처리
    - [x] 각 호버 영역 벗어나면 모든 레이어 & 효과 사라짐
  - [x] 검색바
    - [x] placeholder 적용

- [x] 히어로 영역 슬라이딩(Carousel)
  - [x] HTML,CSS
  - [x] 좌우 화살표 통해 내용 변경 기능
  - [x] 화살표 누르지 않는 경우 10초마다 다음 내용으로 이동
  - [x] 무한 슬라이딩으로 동작

## 이번 주 만들다가 새로 알게 된거 및 학습 키워드

- css Animation @keyframes
- createDocumentFragment()
- mouse 이벤트
- transitionend
- relatedTarget
- scss 문법들, 소스맵 파일

</details>

<details>
  <summary>2주차</summary>
  
## 📄 학습 키워드

- [x] OOP

## ✅ 체크리스트

### 검색바 만들기

- [x] HTML, CSS

### 추천 검색어, 최근 검색어 노출

#### 공통

- [x] 키보드 화살표 통해 검색어 목록 이동
  - [x] 이동시 배경색 포커싱

#### 검색바 클릭시

- [x] 배경 딤 처리
- [x] 최근 검색어 최대 5개 표시
  - [x] 우측의 X 버튼 클릭 시 해당 검색어 삭제
- [x] 추천 검색어 10개 표시

#### 검색어 입력시

- [x] 실시간 자동 완성 10개 포시

#### 오류

- 검색바가 활성화 되었을 때 딤처리가 되는데, 그때 모달 영역에 들어갔다가 나가면 딤 사라짐

</details>

<details>
  <summary>3주차</summary>
  
## 📄 학습 키워드

- 3주차

  - [x] fetch API, get/post요청
  - [x] Promise
  - [x] mock server(json-server 또는 MSW)

## ✅ 체크리스트

- [x] mock server 연동하기
  - [x] `json-server` or `MSW`
- [ ] 검색창 서버 연동
  - [ ] '검색 자동완성' 데이터 json-server와 연동
  - [ ] get방식으로 query를 보내고 응답데이터 받기
- [x] 슬라이딩 콘텐츠
  - [x] 초기데이터를 json -server와 연동해서 가져오기
- [ ] 좌측 메뉴 영역 개발
  - [x] 메뉴 구조 만들기
  - [x] 애니메이션 효과 부드럽게 적용
  - [x] 초기데이터와 더보기할때 데이터를 구분해서 서버와 통신을 통해서 가져온다.
- [ ] Promise 패턴의 동작 원리 (resolve, reject, then 메서드등) 이해하고 짧게 정리해서 PR에 포함시키기
</details>

## 📄 학습 키워드

- 4주차
  - Store와 View 분리, 모듈을 만들고 연결
  - ES Modules를 활용한 모듈개발

## ✅ 이번주 목표

**store, view 분리해보기**
