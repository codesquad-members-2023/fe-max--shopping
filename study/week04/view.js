export const view = {
  render() {
    document.body.innerHTML += '<button>getdata</button>';
  },

  on() {
    document.querySelector('button').addEventListener('click', this.getTodoDataHandler);
  },
};

export const otherView = {
  render(todoList) {
    document
      .querySelector('button')
      .insertAdjacentHTML('afterend', `<div>${JSON.stringify(todoList)}</div>`);
  },
};
