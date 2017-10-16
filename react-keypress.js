var Keypress = require("./bower_components/Keypress/keypress.js");
var elements = new WeakMap();

module.exports = function(keys, handler) {
	if (!keys || !handler) return;

	return function(e) {
		var el = e.target;

		//Check for no register the same element multiple times
		if (elements.has(el)) return;

		var listener = new Keypress.Listener(el);

		elements.set(el, true);
		listener.register_combo({
			"keys": keys,
			"on_keyup": handler
		});
	};
};
