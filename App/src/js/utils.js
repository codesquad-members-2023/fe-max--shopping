export const $ = document.querySelector.bind(document);

function generateDict() {
  const dict = {};

  function _add(name, event) {
    dict[name] = event;
  }

  function _find(name) {
    if (name in dict) {
      return dict[name];
    }
    return null;
  }

  return [
    _add,
    _find,
  ]
}

const [ _addComponent, _findComponent ] = generateDict();

export const addComponent = _addComponent;
export const findComponent = _findComponent;

const [ _addEvent, _findEvent ] = generateDict();

export const addEvent = _addEvent;
export const findEvent = _findEvent;
