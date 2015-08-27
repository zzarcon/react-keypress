import exportable from "exportable";
var Keypress = require("./bower_components/Keypress/keypress.js");

var reactKeypress = function(keys, handler) {
  if (!keys || !handler) return;

  return function() {
    var listener = new Keypress.Listener();

    listener.register_combo({
      "keys": keys,
      "on_keyup": handler
    });
  };
};

exportable({
  module: module,
  name: 'reactKeypress',
  definition: reactKeypress
});