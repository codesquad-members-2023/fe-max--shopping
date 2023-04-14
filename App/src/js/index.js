import { App } from "./components/App.js";
(function () {
  let state = {
    navbarItems: [
      { href: "#", textContent: "오늘의 딜" },
      { href: "#", textContent: "고객 서비스" },
      { href: "#", textContent: "레지스트리" },
      { href: "#", textContent: "기프트 카드" },
      { href: "#", textContent: "판매" },
    ],
    loginAccountSubs: [
      {
        title: "귀하의 목록",
        items: [
          { href: "#", textContent: "목록 생성" },
          { href: "#", textContent: "목록 또는 레지스트리 찾기" },
          { href: "#", textContent: "AmazonSmile 자선 품목 목록" },
        ],
      },
      {
        title: "계정",
        items: [
          { href: "#", textContent: "계정" },
          { href: "#", textContent: "주문" },
          { href: "#", textContent: "권장 사항" },
          { href: "#", textContent: "검색 기록" },
          { href: "#", textContent: "워치리스트" },
          { href: "#", textContent: "비디오 구매 및 대여" },
          { href: "#", textContent: "Kindle 언리미티드" },
          { href: "#", textContent: "콘텐츠 및 기기" },
          { href: "#", textContent: "항목 구독 및 저장" },
          { href: "#", textContent: "멤버십 및 구독" },
          { href: "#", textContent: "음악 라이브러리" },
        ],
      },
    ],
    sidebarSubs: [
      {
        title: "디지털 콘텐츠 및 기기",
        items: [
          { textContent: "Amazon Music" },
          { textContent: "Kindle E-Reader 및 도서" },
          { textContent: "안드로이드 앱스토어" },
        ],
      },
      {
        title: "부서별 쇼핑",
        items: [
          { textContent: "전자" },
          { textContent: "컴퓨터" },
          { textContent: "Alexa 스마트 홈" },
          { textContent: "예술 및 공예" },
        ],
        all: [
          { textContent: "자동차 용품" },
          { textContent: "유아" },
          { textContent: "뷰티 및 퍼스널 케어전자" },
          { textContent: "여성 패션" },
          { textContent: "남성 패션" },
          { textContent: "여아용 의류" },
          { textContent: "남아용 의류" },
          { textContent: "건강 및 가정용품" },
          { textContent: "가정 및 주방" },
          { textContent: "산업용 및 과학용" },
          { textContent: "여행 가방" },
          { textContent: "영화 및 TV" },
          { textContent: "애완동물 용품" },
          { textContent: "소프트웨어" },
          { textContent: "스포츠 및 야외 활동" },
          { textContent: "공구 및 주택 개조" },
          { textContent: "장난감 및 게임" },
          { textContent: "비디오 게임" },
        ],
      },
    ],
    mainBgSlides: [
      {index: 0, src: "./src/img/Image.png"},
      {index: 1, src: "./src/img/background/bg1.webp"},
      {index: 2, src: "./src/img/background/bg2.webp"},
      {index: 3, src: "./src/img/background/bg3.jpg"},
      {index: 4, src: "./src/img/background/bg4.jpg"},
      {index: 5, src: "./src/img/background/bg5.jpg"},
    ],
    mainHeroSlides: [
      {index: 0, textContent: "1. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
      {index: 1, textContent: "2. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
      {index: 2, textContent: "3. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
      {index: 3, textContent: "4. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
      {index: 4, textContent: "5. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
      {index: 5, textContent: "6. 해외 쇼핑을 즐기고 한국 직불 카드 또는 한국 신용카드로 결제하십시오"},
    ],
    mainContentsItems: [
      {
        title: "집에서 입어보기",
        href: "#",
        src: "./src/img/content/4.png",
        linkTextContent: "더보기",
      },
      {
        title: "특가",
        href: "#",
        src: "./src/img/content/8.png",
        linkTextContent: "지금 쇼핑하세요",
      },
      {
        title: "피트니스용",
        href: "#",
        src: "./src/img/content/12.png",
        linkTextContent: "더보기",
      },
      {
        title: "Amazon Basics",
        href: "#",
        src: "./src/img/content/1.png",
        linkTextContent: "더보기",
      },
      {
        title: "건강 및 퍼스널 케어",
        href: "#",
        src: "./src/img/content/5.png",
        linkTextContent: "더보기",
      },
      {
        title: "가정 및 주방",
        href: "#",
        src: "./src/img/content/9.png",
        linkTextContent: "더보기",
      },
      {
        title: "Change your language preference",
        href: "#",
        src: "./src/img/content/2.png",
        linkTextContent: "Click here to shop in English",
      },
      {
        title: "드레스",
        href: "#",
        src: "./src/img/content/6.png",
        linkTextContent: "더보기",
      },
      {
        title: "활동추적기 및 스마트워치 쇼핑",
        href: "#",
        src: "./src/img/content/10.png",
        linkTextContent: "더보기",
      },
      {
        title: "노트북 및 태블릿 쇼핑",
        href: "#",
        src: "./src/img/content/13.png",
        linkTextContent: "더보기",
      },
      {
        title: "전자기기",
        href: "#",
        src: "./src/img/content/3.png",
        linkTextContent: "더보기",
      },
      {
        title: "Kindle E-readers",
        href: "#",
        src: "./src/img/content/7.png",
        linkTextContent: "지금 쇼핑하세요",
      },
      {
        title: "반려동물용품 쇼핑",
        href: "#",
        src: "./src/img/content/11.png",
        linkTextContent: "지금 쇼핑하세요",
      },
    ],
    footerMenus: [
      {
        title: "당사에 대해 알아보기",
        items: [
          { href: "#", textContent: "커리어" },
          { href: "#", textContent: "블로그" },
          { href: "#", textContent: "Amazon 소개" },
          { href: "#", textContent: "투자자 관계" },
          { href: "#", textContent: "Amazon 디바이스" },
          { href: "#", textContent: "아마존 사이언스" },
        ],
      },
      {
        title: "당사와 함께 돈 벌기",
        items: [
          { href: "#", textContent: "Amazon에서 판매" },
          { href: "#", textContent: "Amazon Buxiness에서 판매" },
          { href: "#", textContent: "Amazon에서 앱 판매" },
          { href: "#", textContent: "계열사 되기" },
          { href: "#", textContent: "Amazon에 자체 게시" },
          { href: "#", textContent: "Amazon 허브 호스팅" },
          {
            href: "#",
            textContent: "당사와 함게 돈 벌기에 대해 자세히 보기",
          },
        ],
      },
      {
        title: "Amazon 결제 제품",
        items: [
          { href: "#", textContent: "포인트로 구입" },
          { href: "#", textContent: "Amazon Buxiness에서 판매" },
          { href: "#", textContent: "잔고 재로드" },
          { href: "#", textContent: "Amazon 환율 변환기" },
        ],
      },
      {
        title: "지원",
        items: [
          { href: "#", textContent: "COVID-19 및 Amazon" },
          { href: "#", textContent: "사용자 계정" },
          { href: "#", textContent: "내 주문" },
          { href: "#", textContent: "배송 요금 및 정책" },
          { href: "#", textContent: "반품 및 교환" },
          { href: "#", textContent: "콘텐츠 및 디바이스 관리" },
          { href: "#", textContent: "Amazon Assistant" },
          { href: "#", textContent: "도움말" },
        ],
      },
    ],
    footerInfoItems: [
      { href: "#", textContent: "이용약관" },
      { href: "#", textContent: "개인정보 취급 고지" },
      { href: "#", textContent: "광고 개인정보보호 선택 항목" },
    ],
  }

  const app = new App(state);

  app.render();
  app.onload();
})();
