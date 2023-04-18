export const intervalIdState = {
  intervalId: 0,

  setIntervalId(id: number) {
    this.intervalId = id;
  },

  getIntervalId() {
    return this.intervalId;
  },
};
