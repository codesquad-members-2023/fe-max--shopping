import { store } from './store.js';
import { otherView, view } from './view.js';

const controller = {
  init() {
    view.render();
    view.getTodoDataHandler = this.getTodoDataHandler.bind(this);
    view.on();
  },
  getTodoDataHandler() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((dataFromServer) => {
        store.save(dataFromServer, {
          AFTER_FN: this.updateOtherView,
        });
        //this.updateOtherView();
      });
  },
  updateOtherView(todoList) {
    //const updatedData = store.getData();
    //otherView.render(updatedData);
    otherView.render(todoList);
  },
};

controller.init();
