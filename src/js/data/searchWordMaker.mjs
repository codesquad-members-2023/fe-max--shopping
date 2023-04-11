import { writeFile } from 'fs/promises';

const searchWordMaker = {
  recommend: [
    'egift cards for amazon gift card',
    'gift cards',
    '기프트카드',
    'verve acoustic sounds series vinyl',
    'metro boomin vinyl',
    'avicii vinyl',
    'balance reload',
    'amazon reload',
    'reloadable visa gift cards',
    'reload gift card',
  ],

  autoComplete: [
    '자동차 점프 스타터',
    '강아지 자동급식기',
    '고양이 자동급식기',
    '자동차 장난감',
    '자동차 용품',
    '자동 연필깎이',
    '자동차 컴파운드 흠집 제거제',
    '두잇 자동급식기',
    '자동차 보조배터리',
    '자동차 타이어 공기주입기',
    '자동차 방향제',
    '빵',
    '포켓몬 빵',
    '빵가루',
    '햄버거 빵',
    '삼립 빵',
    '치아바타 빵',
    '코스트코 빵',
    '아침 식사대용 빵',
    '생크림 빵',
    '핫도그 빵',
    '바질 페스토',
    '바지걸이',
    '바지락',
    '여성 바지',
    '남자 바지',
    '바지 행거',
    '남자 바지 슬렉스바지',
    '트레이닝 바지',
    '골프 바지',
    '언더아머 바지',
  ],

  makeWordData(words) {
    return words.map((word, index) => {
      return { id: index + 1, word: word };
    });
  },

  getRecommendWordList() {
    return this.makeWordData(this.recommend);
  },

  makeJSON() {
    const template = {
      recommend: this.makeWordData(this.recommend),
      autoComplete: this.makeWordData(this.autoComplete),
    };
    const jsonData = JSON.stringify(template);

    writeFile('./src/js/data/db.json', jsonData, (err) => {
      if (err) throw err;
      console.log('data written to file');
    });
  },
};

searchWordMaker.makeJSON();
