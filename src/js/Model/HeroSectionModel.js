export class HeroSectionModel {
  constructor(data) {
    this.data = data;
  }

  async getHeroImg() {
    const fetchedData = await this.data;
    return fetchedData;
  }
}
