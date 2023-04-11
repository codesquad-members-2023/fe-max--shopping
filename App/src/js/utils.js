export const $ = document.querySelector.bind(document);

function generateSubComponentDict() {
  const dict = {};

  function _addComponent(name, _class) {
    dict[name] = _class;
  }

  function _findComponent(name) {
    if (name in dict) {
      return dict[name];
    }
    return null;
  }

  return {
    _addComponent,
    _findComponent,
  };
}

const { _addComponent, _findComponent } = generateSubComponentDict();

export const addComponent = _addComponent;
export const findComponent = _findComponent;

function generateEventDict() {
  const dict = {};

  function _addEvent(name, event) {
    dict[name] = event;
  }

  function _findEvent(name) {
    if (name in dict) {
      return dict[name];
    }
    return null;
  }

  return {
    _addEvent,
    _findEvent,
  };
}

const { _addEvent, _findEvent } = generateEventDict();

export const addEvent = _addEvent;
export const findEvent = _findEvent;
