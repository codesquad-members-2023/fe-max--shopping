export const store = {
  todoList: [],
  save(data, { AFTER_FN }) {
    this.todoList.push(data);
    if (AFTER_FN) AFTER_FN(this.todoList);
  },
  getData() {
    return this.todoList;
  },
};
