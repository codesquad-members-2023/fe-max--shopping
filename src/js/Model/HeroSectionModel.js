export class HeroSectionModel {
  constructor(data) {
    this.data = data;
    this.widthOfSlide = 1280;
    this.transform = 0;
    this.currentIndex = 0;
  }

  async getHeroImg() {
    const fetchedData = await this.data;
    return fetchedData;
  }
}
