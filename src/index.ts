import Keypress from 'keypress.js';

const elements = new WeakMap();

export default (keys, handler) => {
  return function(e) {
    const el = e.target;

    // Check to no register the same element multiple times
    if (elements.has(el)) return;

    const listener = new Keypress.Listener(el);

    elements.set(el, true);
    listener.register_combo({
      "keys": keys,
      "on_keyup": handler
    });
  };
};