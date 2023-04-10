import { writeFile } from 'fs/promises';

const searchWordMaker = {
  recommendWords: [
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

  makeWordData(words) {
    return words.map((word, index) => {
      return { id: index + 1, word: word };
    });
  },

  getRecommendWordList() {
    return this.makeWordData(this.recommendWords);
  },

  makeJSON() {
    const template = { recommend: this.getRecommendWordList() };
    const jsonData = JSON.stringify(template);

    writeFile('./src/js/data/db.json', jsonData, (err) => {
      if (err) throw err;
      console.log('data written to file');
    });
  },
};

searchWordMaker.makeJSON();
